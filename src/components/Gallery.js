import React from "react";
import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src:
      "https://images.pexels.com/photos/4842487/pexels-photo-4842487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Arcade playtime for 90's kids",
    category: "Arcade Games",
  },
  {
    id: 2,
    src:
      "https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "No signal - no transmission",
    category: "TV",
  },
  {
    id: 3,
    src:
      "https://images.pexels.com/photos/12668238/pexels-photo-12668238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Retro Closures",
    category: "Boombox",
  },
  {
    id: 4,
    src:
      "https://images.pexels.com/photos/12204293/pexels-photo-12204293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vinyl Loveless Happiness",
    category: "Vinyl Record",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="section-title wrapper">Gallery</h2>
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
