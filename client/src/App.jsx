import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { RiImageAddFill } from "react-icons/ri";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);

  const fetchingImages = async () => {
    try {
      const response = await fetch('http://localhost:106/images', {
        method: 'GET'
      });
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        console.log("Unable to fetch images");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingImages();
  }, []);

  const handleImgInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", image);

    const response = await fetch('http://localhost:106/upload', {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      toast.success("Post Uploaded!");
      console.log(data);
      fetchingImages(); // Refresh the images list after uploading
    } else {
      console.error("Upload failed");
      toast.error("Image cannot be uploaded");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>MoodExpress.</h1>
        <form onSubmit={handleSubmit}>
          <label className="image-upload">
            <RiImageAddFill className="img-icon" />
            <input type="file" name="image" onChange={handleImgInput} />
          </label>
          <button type="submit">Upload</button>
        </form>
      </header>
      <div className="head">
        <h1>Upload your image and share your mood anonymously...</h1>
      </div>
      <div className="container">
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img id="img" src={`http://localhost:106/public/uploads/${img.photo}`} alt="Uploaded mood" />
          </div>
        ))}
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
