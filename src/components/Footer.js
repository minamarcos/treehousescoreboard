import React from "react";

const Footer = props => {
  return (
    <footer>
      <p>
        {props.copy} - {props.Year}
      </p>
    </footer>
  );
};

export default Footer;
