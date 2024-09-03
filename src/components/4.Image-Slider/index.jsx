import React, { useEffect, useState } from "react";
import "./styles.css";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const ImageSlider = () => {
  const url = "https://picsum.photos/v2/list";
  const [allImages, setAllImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status ${response.status}`);
      }
      const data = await response.json();
      setAllImages(data);
      setCurrentIndex(0);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : allImages.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < allImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section>
      <h1 className="title">Images Slide Show</h1>
      {isLoading && <p>Fetching Data...</p>}
      {error && <p>Error : {error}</p>}
      <article>
        <div className="img-container">
          {allImages.length > 0 && (
            <img
              src={allImages[currentIndex].download_url}
              alt={allImages[currentIndex].download_url}
              width="600"
              height="400"
              className="loaded"
            />
          )}
        </div>

        <div className="btn-container">
          <button onClick={handlePrevious}>
            <BiLeftArrowCircle /> Previous{" "}
          </button>
          <button onClick={handleNext}>
            Next <BiRightArrowCircle />
          </button>
        </div>
      </article>
    </section>
  );
};

export default ImageSlider;
