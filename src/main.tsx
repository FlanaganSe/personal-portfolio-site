import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { Layout } from "./shared/components/Layout.tsx";
// import { Layout, Header } from "./shared/components/Layout.tsx";
// import { Home } from "./pages/Home.tsx";
import "./index.css";
import { router } from "./pages/routes";

// import Root from "./pages/root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Layout> */}
    {/* <Header metadata={data.site.siteMetadata} noBlog={noBlog} /> */}
    <RouterProvider router={router} />
    {/* <Home /> */}
    {/* </Layout> */}
  </React.StrictMode>
);
