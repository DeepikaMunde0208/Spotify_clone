//import "./App.css";
import "./output.css";
// is ke baad talinwindcss ka set up ho chupa hai
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Logincomponent from "./routes/Login";
import Signupcomponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHome from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import Mymusic from "./routes/Mymusic";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";
import { useState } from "react";
function App() {
  const [currentSong,setCurrentSong]=useState(null)
  const [cookies, setCookie] = useCookies(["token"]);
  return (
    // div ko BrowerRouter ke andar nhi dal sakte tho uper se dal dete hai
    <div className="w-screen h-screen font-poppins">
      {/* // talinwindcss.confighure me fontfamily add kar ke fir se npx
      talinwindcss@2 src/index.css -c talinwind.configur.js -o src/output.css
      jese command chala ne ke baad ke font-poppins hum login me use kar pa raha
      hai */}
      
      <BrowserRouter>
        {/* Adding routes components here indicates to the package (react-router-dom) */}
       
         { cookies.token?(
           <songContext.Provider value={{currentSong,setCurrentSong}}>
            <Routes>
             
              <Route path="/" element={<Hellocomponent />} />
              <Route path="/home" element={<LoggedInHome/>} />
              <Route path="/uploadSong" element={<UploadSong/>} />
              <Route path="/mymusic" element={<Mymusic/>} />
              <Route path="*" element={<Navigate to="/home" />} />
              {/* * ka mtlb yeh tho hamesha match karega */}
              {/* agar koi routed log in hume se chiye tho yaha pr */}
            
            </Routes>
            </songContext.Provider>
  ):(
          <Routes>
            {/* <Route path="/" element={<Hellocomponent />}></Route> */}
            <Route path="/login" element={<Logincomponent />}></Route>
            <Route path="/signup" element={<Signupcomponent />}></Route>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="*" element={<Navigate to="/login" />} />
            {/* isme logout hone wala part hai */}
          </Routes>
          ) }
       
      </BrowserRouter>
    </div>
  );
}

// component ko function aap ke baad he bana hota hai
const Hellocomponent = () => {
  return <div>This is hello from component</div>;
};
export default App;
