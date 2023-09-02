import Spotify_logo from "../assets/images/download.png";
import IconText from "../components/shared/IconText";
import TextHover from "../components/shared/TextHover";
import { Icon } from "@iconify/react";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description:
      "relax and indulge with beautiful piano pieces and some beautiful songs",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1682326302625-1e5b7826fb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Instrumental study",
    description: "focus with soft study music in the bacground.",
    imgUrl:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlvbGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Focus flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Beats to think to",
    description: "focus with deep techno and tech house",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
];
const spotifyPlaylistscardsData = [
  {
    title: "Today's Top hits",
    description: "The Weekend is on top of the Hottest 50!",
    imgUrl:
      "https://media.istockphoto.com/id/1058251118/photo/abstract-musical-background.webp?b=1&s=170667a&w=0&k=20&c=JSYxOxeSLerYi2S0JSMPGAmmZIum4WxOjc4N80WityM=",
  },
  {
    title: "Rapcaviar",
    description: "Music from Lil Uzi vert, Drake and Moneybagg Yo",
    imgUrl:
      "https://media.istockphoto.com/id/157425110/photo/rapper-on-concert-stage.webp?b=1&s=170667a&w=0&k=20&c=FSibXDQAcrn-K-iie-SfB2kIPXQLUyxiraGOkE-7C8s=",
  },
  {
    title: "All out 2010s",
    description: "The biggest songs of the 2010s",
    imgUrl:
      "https://media.istockphoto.com/id/182354890/photo/new-year-2010-pinned-on-noticeboard.webp?b=1&s=170667a&w=0&k=20&c=L3BRqwWVZ_mGRzNJUVpLneubjrpwhznRF16EB2a2ws4=",
  },
  {
    title: "Rock Classics",
    description: "Rock legends and epics songs that continue so..",
    imgUrl:
      "https://media.istockphoto.com/id/1189314771/photo/singing-a-few-classics.webp?b=1&s=170667a&w=0&k=20&c=7rY6wxD1H6CPIbIBxdUokzr8lToK-V8PLx32LbPTEOU=",
  },
  {
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    imgUrl:
      "https://media.istockphoto.com/id/1388400011/photo/rear-view-of-man-with-headphones-on-beach-n.webp?b=1&s=170667a&w=0&k=20&c=BxoJoD7slaICHjREGrf3oVVKjcITyv2w_TQkktJz8yc=",
  },
];

const soundofindiaCardsData = [
  {
    title: "The Sound of Mumbai",
    description: "the songs that defines unite and distiguish",
    imgUrl:
      "https://media.istockphoto.com/id/1425801496/photo/chhatrapati-shivaji-terminus-mumbai.jpg?s=612x612&w=is&k=20&c=_U-wPpLv_euWI72PN3IQjpoZjn4ZxwYpIOO9hdDU6t8=",
  },
  {
    title: " The Sound of kolkata",
    description: "The songs that define unite and distinguish",
    imgUrl:
      "https://media.istockphoto.com/id/157310150/photo/victoria-memorial-kolkata.webp?b=1&s=170667a&w=0&k=20&c=18ISN5_nmgteVpiLM2ph-JcW3c_yrZprwOx6NM3i6mc=",
  },
  {
    title: "The sound of Delhi",
    description: "The songs that defines,unite and distinguish",
    imgUrl:
      "https://media.istockphoto.com/id/471052720/photo/india-gate-delhi-illuminated-dusk-scene.webp?b=1&s=170667a&w=0&k=20&c=5Pv7S1CpV1dtieFz2o7GP6eEriuqJWPS9RbcHvxQrn0=",
  },
  {
    title: "The sound of Bengaluru",
    description: "The songs that defines,unite and distinguish",
    imgUrl:
      "https://media.istockphoto.com/id/1382384512/photo/bangalore-or-bengaluru.webp?b=1&s=170667a&w=0&k=20&c=QtoCkdhGSi4PS6UIY7dmFVdgLnxyschwmDHcuWbGwxE=",
  },
  {
    title: "The Sound of Chennai",
    description: "The songs that defines,unite and distinguish",
    imgUrl:
      "https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.webp?b=1&s=170667a&w=0&k=20&c=83oxVJ5rcSZuxjhdRM957Oim3fg_aQE10qQb6Mswm6Q=",
  },
];

const Home = () => {
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
            <div className="w-3/5 flex justify-around items-center ">
              <TextHover displayText={"Premium"} />
              <TextHover displayText={"Support"} />
              <TextHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white "></div>
            </div>
            <div className="w-2/5 flex justify-around items-center">
              <TextHover displayText={"Sign Up"} />
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold text-2xl cursor-pointer  ">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0  overflow-auto">
          {/* second div for content */}

          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView
            titleText="Spotify Playlist"
            cardsData={spotifyPlaylistscardsData}
          />
          <PlaylistView
            titleText="Sound Of India"
            cardsData={soundofindiaCardsData}
          />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <>
      <div className="text-white mt-8">
        <div className="text-4xl  font-semibold mb-5 ">{titleText}</div>
        <div className="w-full flex justify-between space-x-4 ">
          {
            // cardsData will be an array
            cardsData.map((item) => {
              return (
                <Card
                  title={item.title}
                  description={item.description}
                  imgUrl={item.imgUrl}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="py-4">
        <img className="w-full rounded-md" src={imgUrl} alt="label image" />
      </div>
      <div className="text-white text-2xl font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-xl">{description}</div>
    </div>
  );
};

export default Home;
