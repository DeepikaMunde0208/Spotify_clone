import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({info,playSound}) => {

    const {currentSong,setCurrentSong}=useContext(songContext); 
     const val=useContext(songContext);
    



  return (
    <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm" onClick=
     {()=>{
      setCurrentSong(info);
     }}
    >
      {/* // first div is for thumbNail second div for content */}
      <div
        className="w-12 h-14 bg-cover bg-center "
        style={{
          backgroundImage: `url("${info.thumbNail}")`,
        }}
      >
        {/* thumnail ko dirct image dene ke bejaye hum use background denge is div it is easy to to add play button on it that why   */}
      </div>

      <div className="flex w-full">
        <div className="text-white flex justify-center items-center flex-col pl-4">
          {/* flex ki waja se right side aa janyenge or items images ke center me or flex-col ke waja se yek dusare ke neeche aajayen ge */}
          <div className="text-2xl cursor-pointer hover:underline">
            {info.name}
          </div>
           {/* cursor-not-working check once */}
          <div className="text-gray-400 cursor-pointer hover:underline">{info.artitst.firstName + " "+info.artitst.lastName}</div>
        </div >
        <div className=" w-5/6 flex items-center justify-end text-gray-400 text-sm">
         <div>3:44</div>
         <div className="text-gray-400 text-lg  flex items-center justify-center pl-3">

         </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
