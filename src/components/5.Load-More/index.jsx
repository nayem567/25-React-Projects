import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMore = () => {
  const url = "https://dummyjson.com/products?limit=20&skip=20";

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);


  const handleLoadMore = () => {
    setCount(count + 1);
  };

  return (
    <div className="load-more-container">
      {products.map((product) => {
        return (
          <div className="image-container-load-more" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
          </div>
        );
      })}
      <button onClick={handleLoadMore}>
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMore;
