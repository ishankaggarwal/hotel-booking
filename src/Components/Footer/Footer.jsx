/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> BeachResort.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          
        >
          Ishank Aggarwal
        </a>
      </p>
    </footer>
  );
}
