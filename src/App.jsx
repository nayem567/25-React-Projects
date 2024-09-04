import React from "react";
import Accordion from "./components/1.Accordion";
import Accordion2 from "./PracticeComponents/2.Accordion 2";
import RandomColor from "./components/2. RandomColor";
import StarRating from "./components/3.StarRating";
import ImageSlider from "./components/4.Image-Slider";
import ImageSlider2 from "./PracticeComponents/4.Image-Slider 2";
import LoadMore from "./components/5.Load-More";
import TreeView from "./components/6.TreeView";
import menus from "./components/6.TreeView/data";
import QrCode from "./components/7.QR-Code/QrCode";
import LightDarkMode from "./components/8.Light-Dark-Mode/LightDarkMode";
import ScrollIndicator from "./components/9. Custom-Scroll-Indicator/ScrollIndicator";

const App = () => {
  return (
    <main>
      {/* 16th, 17th August - 2024 */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <ImageSlider2 /> */}

      {/* <LoadMore /> */}

      {/* <TreeView menus={menus}/> */}
      {/* <QrCode /> */}

      {/* 31th August - 2024 */}
      {/* 3rd September - 2024 */}
      {/* <LightDarkMode /> */}

      {/* 3rd September - 2024 */}
      <ScrollIndicator />


    </main>
  );
};

export default App;
