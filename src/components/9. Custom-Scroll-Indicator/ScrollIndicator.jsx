import React, { useEffect, useState } from "react";
import "./customScroll.css";

const ScrollIndicator = () => {
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const getData = await response.json();
      setData(getData.products);
    } catch (e) {
      setError(e);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleScrollPercentage = () => {
    console.log(document.body.scrollTop);

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  console.log(scrollPercentage);

  return (
    <div className="scroll-container">
      <div className="top-container">
        <div
          className="scrollBar-inner"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <div className="scroll-data-container">
        <h1>Scroll Indicator</h1>
        {isLoading ? <p>Calling API, please wait...</p> : null}
        <div>
          {data &&
            data.map((singleItem) => {
              const { id, title, price } = singleItem;
              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <h5>{price}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
