import React from "react";
import "./ImageUpload.scss";

export const ImageUpload = () => {
  return (
    <div className="upload_avatar-wrapper">
      <span>Upload avatar</span>
      <label htmlFor="upload" className="upload">
        Upload
        <input type="file" id="upload" />
      </label>
    </div>
  );
};

{
  /* <label htmlFor="upload_avatar">Upload avatar </label>
 <input type="file" name="upload_avatar" className="btn-2"></input>
 <img src="./images/man_1.svg" alt="" /> */
}
