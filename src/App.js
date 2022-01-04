import React, { useState, useEffect } from "react";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";
import { ClimbingBoxLoader } from "react-spinners";

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="App">
          <ClimbingBoxLoader size={20} color={"#00c6f7"} loading={loading} />
        </div>
      ) : (
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <Routes />
              <Footer />
            </>
          )}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
