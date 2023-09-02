//import { CloudinaryTransformable } from "@cloudinary/url-gen/assets/CloudinaryTransformable";
import Spotify_logo from "../assets/images/download.png";
import IconText from "../components/shared/IconText";
import TextHover from "../components/shared/TextHover";
import TextInput from "../components/shared/TextInput";
import { Icon } from "@iconify/react";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadSong = () => {
  // console.log(window);
  // console.log(window.cloudinary);
  const [name, setName] = useState("");
  const [thumbNail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylisturl] = useState("");
  const [UploadedSongFileName, setUploadedSongFileName] = useState();
  // navigation pages ko link kar ne ke liye use kar thy hai like home se uploadsong jane me or uploadsongs se home jane me
  const navigate=useNavigate();
  const submitSong= async ()=>{

    const data={name,thumbNail,track:playlistUrl};
    const response=await makeAuthenticatedPOSTRequest("/song/create",data);
   // console.log(response);  is ka mtlb mongo mera puri tara se object create ho gya hai
     if(response.err){
      alert("could not create song");
      return ;
     }
     alert("sucess");
    // sucessfuly create ho jaye tho home page pr wapis aa jayeh ga
    navigate("/home"); 
  
  }
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-6">
        <div>
          {/* {this div is for left panel of home} */}
          <div className="logoDiv p-6 flex items-center justify-start">
            {/* this div is for logo spotify jo left side me hai pages ke */}
            <img src={Spotify_logo} alt="spotify logo" width={200} />
          </div>
          <div className="py-6">
            <IconText iconName={"typcn:home"} displayText={"Home"} />
            <IconText
              iconName={"system-uicons:search"}
              displayText={"search"}
              active
            />
            <IconText
              iconName={"ion:library-outline"}
              displayText={"library"}
            />
            <IconText iconName={"entypo:music"} displayText={"My music"} />
          </div>
          <div className="pt-8">
            <IconText
              iconName={"basil:add-solid"}
              displayText={"Create playlist"}
            />
            <IconText iconName={"bxs:heart"} displayText={"liked songs"} />
          </div>
        </div>
        <div className="px-5 ">
          <div className="border border-gray-100 text-white w-2/5 text-2xl flex px-2 py-1 rounded-full items-center justify-center hover:border-white  cursor-pointer ">
            <Icon icon="bi:globe2" />
            <div className="ml-2">English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
        {/* this div is for right panel ya part for home page */}
        <div className="navbar w-full h-1/10 bg-black  bg-opacity-30 flex items-center justify-end ">
          {/* one div for navbar */}
          <div className="w-1/2 flex h-full">
            <div className="w-2/3 flex justify-around items-center ">
              <TextHover displayText={"Premium"} />
              <TextHover displayText={"Support"} />
              <TextHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white "></div>
            </div>
            <div className="w-1/3 flex justify-around items-center">
              <TextHover displayText={"Upload Song"} />
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold text-2xl cursor-pointer  ">
                AC
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0  overflow-auto">
          <div>upload ur music</div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                label="Name"
                labelClassName={"text-white"}
                placeholder="Name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Thumbnail"
                labelClassName={"text-white"}
                placeholder="Thumbnail"
                value={thumbNail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-5">
            {UploadedSongFileName ? (
              // this for if song is not uploaded then show select track else shoe name of uploadedsong
              <div className="bg-white rounded-full p-3 w-1/3">
             {UploadedSongFileName.substring(0,35)}....

              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylisturl}
                setName={setUploadedSongFileName}
              />
            )}
          </div>
           
          <div className="bg-white w-40 flex-center justify-center p-4 rounded-full cursor-pointer font-semibold "   onClick={submitSong}>
        
          
            submit Song
            </div>           

        </div>
      </div>
    </div>
  );
};

export default UploadSong;
