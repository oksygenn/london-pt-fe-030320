import React, { useState, useEffect } from "react";
import "./ImageUpload.scss";

export const ImageUpload = (props) => {
  const [avatar, setAvatar] = useState(
    props.user?.avatar || "./images/man_1.svg"
  );

  const handleUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setAvatar(url);
  };

  useEffect(() => {
    props.avatar.url = avatar;
  });

  return (
    <>
      <div className="upload_avatar-wrapper">
        <span>Upload avatar</span>
        <label htmlFor="upload" className="upload">
          Upload
          <input
            type="file"
            id="upload"
            name="avatar"
            onChange={handleUpload}
          />
        </label>
      </div>
      <img src={avatar} alt="avatar" className="avatar" />
    </>
  );
};
