import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
    </footer>
  );
};

export default Footer;
