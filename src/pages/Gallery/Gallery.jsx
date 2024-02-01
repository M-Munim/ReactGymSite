import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import img from '../../assets/headerImg.jpg';
import './gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const galleryLen = 4;

  useEffect(() => {
    const fetchImages = async () => {
      const imgArray = [];
      for (let i = 1; i <= galleryLen; i++) {
        const imgModule = await import(`../../assets/gallery${i}.jpg`);
        imgArray.push(imgModule.default);
      }
      setImages(imgArray);
    };

    fetchImages();
  }, []);

  return (
    <>
      <Header title="Our Gallery" image={img}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis ullam a ad eveniet illo expedita dolore hic explicabo soluta nemo pariatur, ipsam, saepe laudantium veritatis neque qui in id.
      </Header>

      <section className="gallery">
        <div className="container gallery_container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
