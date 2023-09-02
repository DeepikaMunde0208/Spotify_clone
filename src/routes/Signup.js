import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
// import Dateofbirth from "../components/shared/Dateofbirth";
// import Gender from "../components/shared/Gender";
// import Checkbox from "../components/shared/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setconfirmEmail] = useState("");
  const [username, setusername] = useState("");

  const [password, setPassword] = useState("");
  // const [nickname, setName] = useState("");
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  // const [dateofbirth, setDateofbirth] = useState("");
  // const [gender, setGender] = useState("");
  // const [check, setCheck] = useState("");

  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  
  const signUp=async()=>{
      if(email!==confirmEmail){
        alert(
          "Email and confirm email fields must match.please check again"
        );
        return;
      }
      const data={email,password,username,firstName,lastName}
      // console.log(data); working
      const response=await makeUnauthenticatedPOSTRequest(
        "/auth/register",data
      )
     if(response && !response.err){
      
      const token=response.token  // token authentication ke liye use hoga tho muje us ke liye use store krna hoga isliye me token bana rhi hu jo console me cookies na me storage file me store hoga
      // spotify frontend ke terminal me install krange
      const date=new Date();
      date.setDate(date.getDate()+50);
     setCookie("token",token,{path:"/",expires:date}); // token ko inspect ke application 50 dino ke liye store kiya
      alert('success');
      navigate("/home");
     }
     else{
       alert("failure");
     }


    }

  
  



  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        {/* padding y ka or py ka mtlb upar se or neeche se padding dena us box ko */}
        {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
        <div className="font-bold mb-4 text-2xl">
          sign up for free to start listening
        </div>
        <TextInput
          label=" What's your Email? "
          placeholder=" Enter your Email "
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label=" conform email "
          placeholder=" Enter your Email again "
          className="my-6"
          value={confirmEmail}
          setValue={setconfirmEmail}
        />
        <TextInput
          label="Username"
          placeholder=" Enter your UserName "
          className="my-6"
          value={username}
          setValue={setusername}
        />
        <PasswordInput
          label="Create password"
          placeholder="create password"
          value={password}
          setValue={setPassword}
        />
        {/* <TextInput
          label=" What should we call you? "
          placeholder=" Enter a profile name "
          className="mt-5"
          value={nickname}
          setValue={setName}
        /> */}
        {/* {/* <div className="  flex flex-col w-full text-sm ">
          This appears on your profile */}
        {/* </div>  */}
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name "
            placeholder=" Enter Your First Name "
            className="mt-5"
            value={firstName}
            setValue={setfirstname}
          />
          <TextInput
            label=" Last Name "
            placeholder=" Enter Your last name  "
            className="mt-5"
            value={lastName}
            setValue={setlastname}
          />
        </div>

        {/* <Dateofbirth
          label=" What's your date of birth? "
          placeholder=" dd-mm-yyy "
          className="my-6"
          value={dateofbirth}
          setValue={setDateofbirth}
        /> */}
        {/* <Gender
          label="Select your gender"
          className="my-5"
          value={gender}
          setValue={setGender}
        /> */}
        {/* <Checkbox
          label="Share my registration data with Spotify's content providers for marketing purposes."
          value={check} // Use the appropriate state variable here if you want to store the checkbox state
          setValue={setCheck}
          className="mt-12 "
        /> */}

        <div className=" w-full flex items-center justify-center my-8">
          <button className="bg-green-400 font-semibold p-3 px-10 rounded-full"
          
          onClick={(e)=>{
            // e is event object that represents the event that occurred
              e.preventDefault();
              signUp();
          }}>
            SIGN UP
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        {/* // for line above  */}
        <div className="my-6 font-semibold text-lg">Have an account?</div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
