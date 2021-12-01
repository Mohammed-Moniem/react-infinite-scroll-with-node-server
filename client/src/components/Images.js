import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

const Images = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(10);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`/api/photos?count=${count}&start=${start}`)
        .then((res) => {
          if (res.data) {
            setImages(res.data.images);
            setCount(res.data.images.length);
          }
        });
    };
    fetch();
  }, []);

  const fetchImages = () => {
    setStart(start + count);
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages([...images, ...res.data.images]));
  };

  return (
    <div className="images">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
