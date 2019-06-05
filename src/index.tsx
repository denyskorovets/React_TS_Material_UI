import * as React from "react";
import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AdminDashboardGrid from "./components/AdminDashboardGrid";
import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AdminDashboardGrid />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
