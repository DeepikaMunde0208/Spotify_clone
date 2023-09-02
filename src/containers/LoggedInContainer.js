import Spotify_logo from "../assets/images/download.png";
import IconText from "../components/shared/IconText";
import TextHover from "../components/shared/TextHover";
import { Icon } from "@iconify/react";
import { useState } from "react";
//import { Icon } from '@iconify/react';
import { Howl, Howler } from "howler"; // song play karne ke liye howler libraray hai
import { Children } from "react";
import { useContext } from "react";
import songContext from "../contexts/songContext";
const LoggedInContainer = ({ children }) => {
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPasused] = useState(true);

  const { currentSong, setCurrentSong } = useContext({ songContext });

  const playSound = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }

    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });

    setSoundPlayed(sound);
    sound.play();
    console.log(sound);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound(
        "https://res.cloudinary.com/dftejjghh/video/upload/v1692099763/e6wnd3gpzpq8dhlx6d2t.mp3"
      );

      setIsPasused(false);
    } else {
      pauseSound();
      setIsPasused(true);
    }
  };

  return (
    <>
      <div className="h-full w-full bg-app-black">
        <div className={`"${currentSong ? "h-9/10" : "h-full"} w-full flex"`}>
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
              {/* second div for content */}
              {children}
            </div>
          </div>
        </div>

        {currentSong && (
          <div className="w-full h-1/10  bg-black bg-opacity-30 text-white flex items-center px-4">
            <div className="w-1/4 flex items-center">
              <img
               // src="https://media.istockphoto.com/id/914202356/photo/young-woman-listening-music.webp?b=1&s=170667a&w=0&k=20&c=IeIRXRLlpX2vCYB2cK83URSQUy6i3lwUvEnK8Kjmf2Q="
               src={currentSong.thumbnail}
               
                alt="currentSongThumbail"
                className="h-28 w-25 rounded"
              />
              <div className="pl-4">
                <div className="text-2xl hover:underline cursor-pointer">
                  {currentSong.name}
                </div>
                <div className="text-xl text-gray-500 hover:underline cursor-pointer">
                 {currentSong.artist.firstName+" "+currentSong.artist.firstName}
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center h-full flex-col items-center">
              <div className="flex w-1/3 justify-between items-center">
                {/* icon work as like test if we want to increase the size just apply what u apply for text size increment */}
                {/* controls for playing song will be here */}
                <Icon
                  icon="zondicons:shuffle"
                  fontSize={30}
                  className="cursor-pointer text-gray-500 hover:text-white"
                />
                <Icon
                  icon="foundation:previous"
                  fontSize={30}
                  className="cursor-pointer text-gray-500 hover:text-white"
                />
                <Icon
                  text-gray-500
                  icon={
                    isPaused ? "carbon:play-filled" : "zondicons:pause-solid"
                  }
                  fontSize={50}
                  className="cursor-pointer text-gray-500 hover:text-white"
                  onClick={togglePlayPause}
                />
                <Icon
                  icon="foundation:next"
                  fontSize={30}
                  className="cursor-pointer text-gray-500 hover:text-white"
                />
                <Icon
                  icon="mingcute:repeat-line"
                  fontSize={30}
                  className="cursor-pointer text-gray-500 hover:text-white"
                />
              </div>
              {/* <div>Progress bar mere </div> */}
            </div>
            <div className="w-1/4 flex justify-end">hello</div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoggedInContainer;
