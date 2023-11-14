import axios from "axios";
import React, { useState } from "react";

const ImageCRUD = () => {
  const [file, setFile] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const url = "/images";
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(url);
    try {
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
        console.log(response.data.fileUrl);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const imageUpload = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <form className="d-flex flex-column justify-content-center align-items-center">
            <div className="mb-3 d-flex col-12 justify-content-center align-items-center">
              <label htmlFor="formFile" className="form-label col-4">
                Upload image file<span className="text-danger">*</span>
              </label>
              <input className="form-control" type="file" id="formFile" onChange={imageUpload} />
            </div>
            <div className="mb-3 d-flex col-12 justify-content-center align-items-center">
              <label htmlFor="imageText" className="form-label col-4">
                Image Name
              </label>
              <input className="form-control" type="text" id="imageText" placeholder="example text" />
            </div>
            <button type="submit" className=" btn btn-success" onClick={onSubmit}>
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageCRUD;
