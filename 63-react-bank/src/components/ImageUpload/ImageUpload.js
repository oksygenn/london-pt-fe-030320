import React from "react";
import "./ImageUpload.scss";

export const ImageUpload = () => {
  return (
    <div className="upload_avatar-wrapper">
      <label htmlFor="file"> Choose a file </label>
      <input type="file" id="file" />
    </div>
  );
};

{
  /* <label htmlFor="upload_avatar">Upload avatar </label>
 <input type="file" name="upload_avatar" className="btn-2"></input>
 <img src="./images/man_1.svg" alt="" /> */
}
