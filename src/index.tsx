import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./components/app/AppContainer";
import "./assets/style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@n3/react-vision-panel/dist/vision-panel.css";
import "./components/ui/i18next";
//@ts-ignore

import { BrowserRouter } from "react-router-dom";

// import SimpleReactLightbox from "";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
