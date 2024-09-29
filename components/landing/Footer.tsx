"use client";
import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

export function Footer() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div style={{ padding: "20px 0" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-30">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "#00ADEE", fontSize: "1.5rem" }}
                ></i>{" "}
                {/* FontAwesome icon */}
                <div style={{ marginLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.5rem", color: "#00ADEE" }}>
                    Find us
                  </h4>
                  <span>Đại Học FPT Đà Nẵng</span>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fas fa-phone"
                  style={{ color: "#00ADEE", fontSize: "1.5rem" }}
                ></i>{" "}
                {/* FontAwesome icon */}
                <div style={{ marginLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.5rem", color: "#00ADEE" }}>
                    Call us
                  </h4>
                  <span>0964106456</span>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="far fa-envelope-open"
                  style={{ color: "#00ADEE", fontSize: "1.5rem" }}
                ></i>{" "}
                {/* FontAwesome icon */}
                <div style={{ marginLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.5rem", color: "#00ADEE" }}>
                    Mail us
                  </h4>
                  <span>TYFcompany@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "20px 0 50px 0px " }}>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            <div className="mb-50">
              <div>
                <div>
                  <a href="index.html">
                    <Image
                      src="/images/logo.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "auto" }} // Increased logo size
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
                <div style={{ marginTop: "15px" }}></div>
              </div>
            </div>
            <div className="col-span-3" style={{ gap: 60 }}>
              <div>
                <div>
                  <h3
                    className="font-bromega-regular"
                    style={{
                      marginBottom: "20px",
                      color: "#00ADEE",
                      fontSize: "1.3rem",
                      borderBottom: "2px solid",
                      paddingBottom: "50px",
                    }}
                  >
                    <strong>Subscribe</strong>
                  </h3>
                </div>
                <div style={{ marginBottom: "25px", color: "#00ADEE" }}>
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div>
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Email Address"
                      style={{
                        padding: "10px",
                        marginRight: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        outline: "none",
                        width: "200px",
                        paddingRight: "20px",
                      }}
                    />
                    <button
                      style={{
                        padding: "10px",
                        background: "#007bff",
                        border: "none",
                        borderRadius: "5px",
                        color: "#fff",
                      }}
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#00ADEE", // Changed background color to #00ADEE
          padding: "20px 0",
          textAlign: "center",
          color: "#fff", // Adjusted text color to white for better contrast
        }}
      >
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="text-center w-full">
              <div>
                <p style={{ margin: "0" }}>
                  Copyright © 2023, All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
