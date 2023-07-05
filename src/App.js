import React from "react";
import { Layout } from "antd";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Navbar from "./components/Navbar";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Routes>
            <Route path="/page-1" element={<Page1 />} />
            <Route path="/page-2" element={<Page2 />} />
            <Route path="/page-3" element={<Page3 />} />
          </Routes>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
