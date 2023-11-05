import React from "react";
import { Bag, Cart, Edit, Logout, User } from "../Svgs";
import "./Profile.css"; // Create a separate CSS file for styling
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="background-image">
<div className="container h-80-profile d-flex align-items-center justify-content-center">
      <div className="card profile-card">
        <div className="row">
          <div className="col-md-4 bg-success">
            <div className="profile-image">
              <img
                src="/logo192.png"
                alt="Profile Image"
                className="img-fluid rounded-circle"
                width="200"
                height="200"
              />
              <h3 className="card-title text-white">Your Name</h3>
              <Edit height="50" width="50" stroke="white" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-details">
              <h3>Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <table>
                    <thead>
                      <tr>
                        <td className="bordered-bottom">Email:</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>sampleemail@gmail.com jhku j f </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <table>
                    <thead>
                      <tr>
                        <td className="bordered-bottom">Phone</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>+1234567890</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row bordered-bottom">
                <div className="col-md-6">
                  <table>
                    <thead>
                      <tr>
                        <td className="bordered-bottom">Address</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>samplw address, sdf sd sd 9099889</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <table>
                    <thead>
                      <tr>
                        <td className="bordered-bottom">City</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sample City</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-4">
              <Link to="/account/orders"> <Bag height="50" width="50" stroke="green" fill="none" /></Link>
              <Link to="/account/cart"> <Cart height="50" width="50" stroke="green" fill="none" /></Link>
              <Link to="/account/log"> <Logout height="50" width="50" stroke="green" fill="none" /></Link>
               
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Profile;
