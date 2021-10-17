import React from "react";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
// import Modal from './Modal';
import Searchbar from "./Searchbar";

function App() {
  return (
    <>
      <h1>ImageFinder</h1>
      <Searchbar />
      <ImageGallery />
      <Button />
      {/* <Modal /> */}
    </>
  );
}
export default App;
