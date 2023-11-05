import React from "react";
import { Bag, Cart, Edit, Logout, User } from "../Svgs";
import "./Profile.css"; // Create a separate CSS file for styling
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="background-image">
      <div className="container h-80-profile d-flex align-items-center justify-content-center text-white">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-md-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 mb-3">DIRAAZ</h1>
              <p class="col-lg-10 fs-4">
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a validation state that
                can be triggered by attempting to submit the form without
                completing it.
              </p>
            </div>
            <div class="col-md-5 mx-auto col-lg-5 text-black">
              <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-success mb-2" type="submit">
                  Sign In
                </button>
                <Link>Forgot password?</Link>
                <hr class="my-4" />
                <small>
                  New account? <Link to="/register">Register here.</Link>
                </small>
              </form>
            </div>
          </div>
          {false && (
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-md-5 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-light">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <button
                    class="w-100 btn btn-lg btn-success mb-2"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <Link>Forgot password?</Link>
                  <hr class="my-4" />
                  <small class="text-muted">
                    By clicking Sign up, you agree to the terms of use.
                  </small>
                  <br />
                  <small>
                    New account? <Link>Register here.</Link>
                  </small>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
