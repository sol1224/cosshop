import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, authenticate }) => {
  //   return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
  return user ? <ProductDetail user={user} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
