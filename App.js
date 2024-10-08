import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Layout from "./layouts/Layout";


const  App =()=> {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Services/>}/>
      </Routes>
      </Layout>
    </>
  );
}

export default App;
