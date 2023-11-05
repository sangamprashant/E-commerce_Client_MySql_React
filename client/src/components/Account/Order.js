import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Bag } from "../Svgs";

const sampleOrders = [
  {
    _id: "12345",
    email: "sampleemail@gmail.com",
    street: "Sample Street",
    city: "Sample City",
    postalCode: "12345",
    name: "Sample Name",
    phone: "123-456-7890",
    APhone: "987-654-3210",
    status: "confirm", // Change this to different statuses for testing
    total: 1234.56,
    line_items: [
      {
        price_data: {
          product_data: {
            images: ["product_image_url"],
            name: "Product 1",
          },
          unit_amount: 123.45,
        },
        quantity: 2,
      },
      {
        price_data: {
          product_data: {
            images: ["product_image_url"],
            name: "Product 2",
          },
          unit_amount: 67.89,
        },
        quantity: 3,
      },
      // Add more line items as needed
    ],
  },
  {
    _id: "1",
    status: "confirm",
    total: 500,
    line_items: [
      {
        price_data: {
          product_data: {
            name: "Product 1",
            images: ["/logo192.png", "/logo192.png"],
          },
        },
        quantity: 2,
      },
      {
        price_data: {
          product_data: {
            name: "Product 1",
            images: ["/logo192.png"],
          },
        },
        quantity: 2,
      },
      // Add more items
    ],
  },
  {
    _id: "2",
    status: "packing",
    total: 300,
    line_items: [
      {
        price_data: {
          product_data: {
            name: "Product 2",
            images: ["/logo192.png"],
          },
        },
        quantity: 1,
      },
      // Add more items
    ],
  },
  // Add more orders
];

const MainContainer = styled.div`
  width: 100%;
  margin: 150px auto;
  padding: 20px;
  border-radius: 20px;
  background-color: #f7fbff00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  display: flex;
  justify-items: center;
  justify-content: center;
  color: green;
  font-size: 2.5rem;
  margin: 0;
  padding-bottom: 20px;
  font-weight: bold;
`;

const ProductTable = styled.div`
  color: blace;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #eee;
  span {
    color: green;
  }
  .Details {
    display: flex;
    justify-content: space-between;
  }
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: #aaa;
  }
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 20px;
  }
  h4 {
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    margin: 0;
    span {
      font-weight: bold;
    }
  }
  .arrow-icon {
    font-size: 2rem;
    margin-left: auto;
  }
`;

const StatusFilterDropdown = styled.select`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  width: 100%;
  border: 1px solid gray;
  &:focus {
    border: ;
  }
  &:hover {
    border: ;
  }

  option {
    &.all {
      font-weight: bold;
    }

    span {
      color: green;
      text-align: right;
    }
  }
`;

const SkeletonLoader = styled.div`
  /* Define your skeleton loading effect using CSS */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

function Order() {
  const [orders, setOrders] = useState(sampleOrders);
  const [filtegreenOrders, setFiltegreenOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (false) {
      navigate("/signin");
    } else {
      // fetchDetails();
    }
  }, []);

  useEffect(() => {
    if (selectedStatus === "all") {
      setFiltegreenOrders(orders);
    } else {
      const filtegreen = orders.filter(
        (order) => order.status === selectedStatus
      );
      setFiltegreenOrders(filtegreen);
    }
    setOrders(sampleOrders);
    setFiltegreenOrders(sampleOrders);
    setIsLoading(false);
  }, [selectedStatus, orders]);

  const orderStatusOptions = [
    "confirm",
    "packing",
    "packed",
    "shipping",
    "out to deliver",
    "delivegreen",
    "canceled",
  ];

  // Helper function to count orders for each status
  const countOrdersByStatus = (status) => {
    return orders.filter((order) => order.status === status).length;
  };
  return (
    <div className="background-image">
      <div className="container d-flex justify-content-center">
        <>
          <MainContainer>
            <Title>
              <Bag height="50" width="50" stroke="green" fill="none" />
              My Orders
            </Title>

            <div className="my-3">
              <StatusFilterDropdown
                className="form-control"
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
              >
                <option key="all" value="all" className="">
                  All ({orders.length})
                </option>
                {orderStatusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}{" "}
                    <span className="count">
                      ({countOrdersByStatus(status)})
                    </span>
                  </option>
                ))}
              </StatusFilterDropdown>
            </div>
            {isLoading ? (
              // Display skeleton loading while fetching data
              Array.from({ length: 2 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            ) : filtegreenOrders.length > 0 ? (
              filtegreenOrders.map((order, index) => (
                <ProductTable
                  key={index}
                  onClick={() =>
                    navigate(`/account/orders/${order._id}`, {
                      state: { orderDatas: order },
                    })
                  }
                >
                  {order.line_items.map((item, key) => (
                    <TableRow key={key}>
                      <img
                        src={item.price_data.product_data.images[0]}
                        alt="Product"
                      />
                      <div>
                        <h4>{item.price_data.product_data.name}</h4>
                        <p>
                          Quantity: <span>{item.quantity}</span>
                        </p>
                      </div>
                    </TableRow>
                  ))}
                  <div className="Details">
                    <div>
                      Order Status: <span>{order.status}</span>
                    </div>
                    <div>
                      Order Amount: <span>₹{order.total}</span>
                    </div>
                  </div>
                </ProductTable>
              ))
            ) : (
              <p>No orders found.</p>
            )}
          </MainContainer>
        </>
      </div>
    </div>
  );
}

export default Order;
