import React from "react";
import "./Cart.css";
import { Minus, Plus } from "../Svgs";

function Cart() {
  return (
    <div className="d-flex justify-content-center w-100 background-image" style={{ paddingTop: "100px" }}>
      <div className="cart">
        <div className="row">
          <div className="col-md-7 w-full">
            <div className="card rounded-3 p-4">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-muted">Image</th>
                    <th className="text-muted">Quantity</th>
                    <th className="text-muted">Action</th>
                    <th className="text-muted">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img height="90px" src="/logo192.png" alt="image" />
                      <p>Item Title</p>
                    </td>
                    <td>
                      <div className="quantity">
                        <button className="btn btn-white"><Minus height="20" width="20" /></button>
                        <input type="number" className="form-control" value="1" />
                        <button className="btn btn-white"><Plus height="20" width="20" /></button>
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-danger">Remove</button>
                    </td>
                    <td>$346</td>
                  </tr>
                  <tr>
                    <td>
                      <img height="90px" src="/logo192.png" alt="image" />
                      <p>Item Title</p>
                    </td>
                    <td>
                      <div className="quantity">
                        <button className="btn btn-white"><Minus height="20" width="20" /></button>
                        <input type="number" className="form-control" value="2" />
                        <button className="btn btn-white"><Plus height="20" width="20" /></button>
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-danger">Remove</button>
                    </td>
                    <td>$692</td>
                  </tr>
                  <tr>
                    <td>
                      <img height="90px" src="/logo192.png" alt="image" />
                      <p>Item Title</p>
                    </td>
                    <td>
                      <div className="quantity">
                        <button className="btn btn-white"><Minus height="20" width="20" /></button>
                        <input type="number" className="form-control" value="3" />
                        <button className="btn btn-white"><Plus height="20" width="20" /></button>
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-danger">Remove</button>
                    </td>
                    <td>$1038</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="text-right">Total: </td>
                    <td>$2076</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-success my-1">Continue to Payment</button>
            </div>
          </div>
          <div className="col-md-5 w-full">
            <div className="card p-4">
              <h4>Order Information</h4>
              <form>
                <input className="form-control my-2" placeholder="Name" />
                <input className="form-control my-2" placeholder="Email" />
                <div className="row m-1 gap-1 justify-content-between">
                  <input className="address-input form-control" placeholder="Phone" />
                  <input className="address-input form-control" placeholder="Alternate Phone" />
                </div>
                <div className="row m-1 gap-1 justify-content-between">
                  <input className="address-input form-control" placeholder="City" />
                  <input className="address-input form-control" placeholder="Postal Code" />
                </div>
                <input className="form-control my-2" placeholder="Street Address" />
                <input className="form-control my-2" placeholder="Country" />
                <button className="btn btn-success w-100 my-1">Cash on Delivery</button>
                <button className="btn btn-success w-100 my-1">Pay Online</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
