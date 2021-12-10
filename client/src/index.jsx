import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";

import { AdminRoute } from "@miq/adminjs";
import { STAFF_PATH } from "@miq/utils";
import { SharedDataProvider } from "@miq/contexts";

import AdminLayout from "./admin";
import PublicShopRoutes from "./shop/public";

// import reportWebVitals from "./reportWebVitals";

const PublicRoutes = (props) => {
  return (
    <div className="">
      <Switch>
        <Route path={props.match.path} component={PublicShopRoutes} />
      </Switch>
    </div>
  );
};

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <SharedDataProvider>
          <Switch>
            <AdminRoute path={STAFF_PATH} component={AdminLayout} />

            <Route component={PublicRoutes} />
          </Switch>
        </SharedDataProvider>
      </BrowserRouter>
    </React.StrictMode>,
    root
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
