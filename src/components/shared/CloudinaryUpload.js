// we are getting upload button which connect to the device and help us to upload anything easily for that in cloudinary there is an fiel image upload.js we are copying that in it
import React from "react";
import { openUploadWidget } from "../../utils/CloudinaryServices";
import { cloudinary_upload_preset } from "../../config";

const CloudinaryUpload = ({ setUrl,setName }) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dftejjghh",
        uploadPreset: cloudinary_upload_preset,
        // beacuse we are  uploading audio only
        maxImageWidth: 600,
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="bg-white text-black rounded-full p-4"
      onClick={uploadImageWidget}
    >
      select track
    </button>
  );
};

export default CloudinaryUpload;
