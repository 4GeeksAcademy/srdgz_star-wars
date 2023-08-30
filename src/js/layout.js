import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { DetailCharacter } from "./views/DetailCharacter";
import { DetailPlanet } from "./views/DetailPlanet";
import { DetailStarship } from "./views/DetailStarship";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/DetailCharacter/:name/:id"
              element={<DetailCharacter />}
            />
            <Route path="/DetailPlanet/:name/:id" element={<DetailPlanet />} />
            <Route
              path="/DetailStarship/:name/:id"
              element={<DetailStarship />}
            />
            <Route path="*" element={<h1>404 Page not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
