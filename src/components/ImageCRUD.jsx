import React from "react";

const ImageCRUD = () => {
  const onSubmit = () => {};
  const imageUpload = (e) => {
    console.log(e.target.files);
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
