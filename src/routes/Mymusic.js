//import { CloudinaryTransformable } from "@cloudinary/url-gen/assets/CloudinaryTransformable";

import SingleSongCard from "../components/shared/SingleSongCard";

import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useState, useEffect } from "react";


import LoggedInContainer from "../containers/LoggedInContainer";



// const Mymusic = () => {
//   const [songData, setSongData] = useState([]);
//   const [soundPlayed, setSoundPlayed] = useState(null);

//   const playSound = (songSrc) => {
//     if (soundPlayed) {
//       soundPlayed.stop();
//     }

//     let sound = new Howl({
//       src: [songSrc],
//       html5: true,
//     });

//     setSoundPlayed(sound);
//     sound.play();
//     console.log(sound);
//   };

//   useEffect(() => {
//     // fecth data
//     const getData = async () => {
//       const response = await makeAuthenticatedGETRequest("/song/get/mysong");
//       setSongData(response.data);
//     };
//     getData();
//   },[]);

//   // home me jo chize hai same isme aane ke liye bass hame component bana hai baar baar files bana ke copy kr ne ki jarurt nhi hai
//   return (
//     <div className="h-full w-full flex">
//       <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-6">
//         <div>
//           {/* {this div is for left panel of home} */}
//           <div className="logoDiv p-6 flex items-center justify-start">
//             {/* this div is for logo spotify jo left side me hai pages ke */}
//             <img src={Spotify_logo} alt="spotify logo" width={200} />
//           </div>
//           <div className="py-6">
//             <IconText iconName={"typcn:home"} displayText={"Home"} />
//             <IconText
//               iconName={"system-uicons:search"}
//               displayText={"search"}
//             />
//             <IconText
//               iconName={"ion:library-outline"}
//               displayText={"library"}
//             />
//             <IconText
//               iconName={"entypo:music"}
//               displayText={"My music"}
//               active
//             />
//           </div>
//           <div className="pt-8">
//             <IconText
//               iconName={"basil:add-solid"}
//               displayText={"Create playlist"}
//             />
//             <IconText iconName={"bxs:heart"} displayText={"liked songs"} />
//           </div>
//         </div>
//         <div className="px-5 ">
//           <div className="border border-gray-100 text-white w-2/5 text-2xl flex px-2 py-1 rounded-full items-center justify-center hover:border-white  cursor-pointer ">
//             <Icon icon="bi:globe2" />
//             <div className="ml-2">English</div>
//           </div>
//         </div>
//       </div>

//       <div className="h-full w-4/5 bg-app-black overflow-auto">
//         {/* this div is for right panel ya part for home page */}
//         <div className="navbar w-full h-1/10 bg-black  bg-opacity-30 flex items-center justify-end ">
//           {/* one div for navbar */}
//           <div className="w-1/2 flex h-full">
//             <div className="w-2/3 flex justify-around items-center ">
//               <TextHover displayText={"Premium"} />
//               <TextHover displayText={"Support"} />
//               <TextHover displayText={"Download"} />
//               <div className="h-1/2 border-r border-white "></div>
//             </div>
//             <div className="w-1/3 flex justify-around items-center">
//               <TextHover displayText={"Upload Song"} />
//               <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold text-2xl cursor-pointer  ">
//                 AC
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="content p-8   overflow-auto">
//           <div className="text-white text-2xl font-semibold pb-4 pl-2">
//             My Songs
//           </div>
//           <div className="space-y-3 overflow-auto">
//             {/* // bhut saare SingleSongCard ke replacemenbt me hum kr rahai hai */}
//             {songData.map((item) => {
//               return (
//                 <SingleSongCard
//                   info={item}
//                   playSound={playSound} // har song ke liye play krna hai tho isliye combined de dena
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Mymusic = () => {
  const [songData, setSongData] = useState([]); // api se detils fecth krna ka

  useEffect(() => {
    // fecth data
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysong");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer>
      <div className="text-white text-2xl font-semibold pb-4 pl-2 pt-8">
        {" "}
        My Songs
      </div>
      <div className="space-y-3 overflow-auto">
        {/* // bhut saare SingleSongCard ke replacemenbt me hum kr rahai hai */}
        {songData.map((item) => {
          return (
            <SingleSongCard
              info={item}
              playSound={() => {}} // har song ke liye play krna hai tho isliye combined de dena
            />
          );
        })}
      </div>
    </LoggedInContainer>
  );
};

export default Mymusic;
