import React from "react";
import ReactDOM from "react-dom/client";
import { Layout, Header } from "./shared/components/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />

      <Home />
    </Layout>
  </React.StrictMode>
);
