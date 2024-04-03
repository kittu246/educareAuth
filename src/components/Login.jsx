import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../GlobalContext";

const Login = () => {


    const navigate = useNavigate();
    const { setUser } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const handleLogin =async () => {

    if(email && password){
        setLoading(true);

    try{

         // login with email and password

        const authUser = await signInWithEmailAndPassword(auth,email,password);

        console.log(authUser.user);
        const user = authUser.user;
 

         // now user is alredy set we need to get user

         const userDoc = await getDoc(doc(db,"user",user.uid));
         const userData = userDoc.data();
         console.log(userData);

         // set user in react

         setUser(userData) ;
         setLoading(false);
         toast.success("Successfully Logged in");
         navigate("/userPage");




    }
    catch(error){
        setLoading(false);
        toast.error(error.message)
    }

    }

    else{

        setLoading(false);
        toast.error("Please enter the credentials");

    }

    




  };
  return (
    <section className="flex flex-col h-screen items-center  gap-6 p-4">
      <h1 className="font-bold text-3xl my-5 ">SignIn to your PopX Account</h1>

      <CustomInput
        type="text"
        value={email}
        setValue={setEmail}
        name="Email-Address"
      />
      <CustomInput
        type="text"
        value={password}
        setValue={setPassword}
        name="Password"
      />

      <button className="customButton" onClick={handleLogin} disabled={loading}>{loading?"loading":"Login"}</button>
    </section>
  );
};

export default Login;
