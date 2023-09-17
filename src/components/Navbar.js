import React from "react";
import Options from "./Options";
import myImg from "../components//plaksha.png";

function Navbar() {
  return (
    <div>
      <div
        className="main"
        style={{ backgroundColor: "rgb(0,85,90)", padding: 10 }}
      >
        <p style={{ color: "white", textAlign: "center" }}>
          Sign up for Virtual Chats here. | View Academic Calendar 2023-24 here.
          | Admissions for TLP Class of 2024 are closed. | Admissions to BTech
          program are closed.{" "}
        </p>
      </div>
      <nav className="navbar navbar-expand-lg bg-white " style={{ padding: 0 }}>
        <div className="container">
          <a className="navbar-brand" href="##">
            <img src={myImg} height={90} width={200} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
          ></button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="myNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="##"
                  style={{ color: "black", marginRight: "20px" }}
                >
                  Virtual Campus Tour
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="##"
                  style={{ color: "black", marginRight: "20px" }}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="##"
                  style={{ color: "black", marginRight: "20px" }}
                >
                  my-Plaksha
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="##"
                  style={{ color: "black", marginRight: "20px" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-end">
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  backgroundColor: "rgb(0,85,90)",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Options />
    </div>
  );
}

export default Navbar;
