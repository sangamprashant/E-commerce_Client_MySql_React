const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");
const db = require("../db");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();

router.post("/api/make/order", requireLogin, (req, res) => {
  try {
    const { name, email, city, postalCode, street, country, CartProducts, phone, APhone, total } = req.body;
    const userId = req.user._id;
    // Check if the user exists in the 'clients' table
    const userQuery = 'SELECT * FROM clients WHERE _id = ?'; 
    db.query(userQuery, [userId], async (userError, userResults) => {
      if (userError) {
        console.error("Error:", userError);
        return res.status(500).json({ message: "Server error." });
      }

      if (userResults.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      // console.log(CartProducts)
      // Ensure CartProducts contains unique product IDs
    const uniqueCartProducts = [...new Set(CartProducts)];


     // Query the 'products' table to get information about the products in the cart
        const placeholders = Array.from({ length: uniqueCartProducts.length }, (_, index) => '?').join(',');
        const productQuery = `SELECT * FROM products WHERE _id IN (${placeholders})`;
        db.query(productQuery, uniqueCartProducts, async (productError, productResults) => {
        if (productError) {
          console.error("Error:", productError);
          return res.status(500).json({ message: "Server error." });
        }

        let line_items = [];

        for (const productId of uniqueCartProducts) {
          const productInfo = productResults.find(p => p._id === productId);
          const quantity = CartProducts.reduce((count, _id) => (_id === productId ? count + 1 : count), 0);
          if (quantity > 0 && productInfo) {
            line_items.push({
              quantity,
              price_data: {
                currency: "inr",
                product_data: {
                  name: productInfo.title,
                  images: productInfo.images,
                },
                unit_amount: quantity * productInfo.price,
              },
            });
          }
        }

        const lineitemstosave=JSON.stringify(line_items)
        // Insert the order into the 'orders' table
        const orderInsertQuery = 'INSERT INTO orders (name, email, city, postalCode, street, country, line_items, phone, APhone, total, paid, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, false, "confirm")';
        const orderValues = [name, email, city, postalCode, street, country, lineitemstosave, phone, APhone, total];

        db.query(orderInsertQuery, orderValues, async (orderError, orderResults) => {
          if (orderError) {
            console.error("Error:", orderError);
            return res.status(500).json({ message: "Server error." });
          }

          const orderId = orderResults.insertId;
         // Parse the JSON 'orders' column
      const currentOrders = JSON.parse(userResults[0].orders || '[]');

      // Insert the new order ID into the array
      currentOrders.push(orderId);

      // Convert the updated orders back to a JSON string
      const updatedOrdersString = JSON.stringify(currentOrders);

      const updateOrdersQuery = 'UPDATE clients SET orders = ? , carts = ? WHERE _id = ?';
      db.query(updateOrdersQuery, [updatedOrdersString,'', userId], (updateError) => {
        if (updateError) {
          console.error("Error:", updateError);
          return res.status(500).json({ message: "Server error." });
        }
      
        res.status(200).json({ message: "Updated", order: { _id: orderId, ...req.body } });
      });
        });
      });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error." });
  }
});
//get cart itms
router.post("/api/order", requireLogin, (req, res) => {
  try {
    const ids = req.body.ids;
    console.log(ids)
    // Create a placeholder for the SQL query parameters
    const placeholders = ids.map(() => '?').join(',');
    console.log(placeholders)
    const query = `SELECT * FROM orders WHERE _id IN (${placeholders})`;
    db.query(query, ids, (error, results) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to get orders" });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to get orders" });
  }
});
module.exports = router;
