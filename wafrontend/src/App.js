import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Rout from "./routes";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rout />
      <ToastContainer autoClose={3000} className="toast-container" />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
