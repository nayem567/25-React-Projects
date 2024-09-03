import React, { useEffect, useState } from "react";
import "./styles.css";

const ImageSlider2 = () => {
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
        throw new Error(`Fetch Issue Occured ${response.status}`);
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : allImages.length - 1
    );
    console.log(currentIndex + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < allImages.length - 1 ? prevIndex + 1 : 0
    );
    console.log(currentIndex + 1);
  };

  return (
    <section>
      <h1 className="title">Image Slider 2</h1>
      {isLoading && <p>Fetching Data, Please Wait...</p>}
      {error && <>Error : {error}</>}
      <article>
        <div className="img-container">
          {allImages.length > 0 && (
            <img
              src={allImages[currentIndex].download_url}
              alt={allImages[currentIndex].download_url}
              width="600"
              height="400"
            />
          )}
        </div>
        <div className="btn-container">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </article>
    </section>
  );
};

export default ImageSlider2;
