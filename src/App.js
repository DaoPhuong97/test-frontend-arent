import React from "react";
import { Layout } from "antd";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Navbar from "./components/Navbar";
const { Header, Footer, Content } = Layout;

const headerStyles = {
  background: "#414141",
  boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
  height: "4rem",
};

const contentStyles = {
  height: "100vh",
  margin: 0,
  padding: 0,
};

const footerStyles = {
  background: "#414141",
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyles}>
          <Navbar />
        </Header>
        <Content style={contentStyles}>
          <Routes>
            <Route path="/page-1" element={<Page1 />} />
            <Route path="/page-2" element={<Page2 />} />
            <Route path="/page-3" element={<Page3 />} />
          </Routes>
        </Content>
        <Footer style={footerStyles}>Put anything in footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
