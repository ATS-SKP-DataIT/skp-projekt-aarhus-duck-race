import React from "react";
import { Navigation } from "./Navbar";
import { Sponsors } from '../components/Sponsors/Sponsors';

import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = (props) => (
  <div>
    <Navigation/>
    <Sponsors />
    <div className="container">{props.children}</div>
  </div>
);
