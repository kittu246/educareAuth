import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { LuAsterisk } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useGlobalContext } from "../GlobalContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useGlobalContext();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);

    

    // create the user in firebase
    if(name,number,email,password){

        if ( password.length >= 6) {
            try {
              const authUser = await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
              const user = authUser.user;
              console.log("user", user);
      
              // add user in database in firestore
      
             const abc = await setDoc(doc(db,"user", user.uid), {
                name: name,
                email: user.email,
                uid: user.uid,
              });
      
              
      
              // seting user in react
      
              setUser({
                name: name, // as name is not stored in user
                email: user.email,
                uid: user.uid,
              });
      
              setLoading(false);
              toast.success("user successfully signed up");
              navigate("/signIn");
      
            } catch (error) {
              setLoading(false);
              console.log("error",error);
            toast.error(error.message)
            }
          } else {
            setLoading(false);
            toast.error("Password can't be less than 6")
            
          }

    }
    else{

        setLoading(false);

        toast.error("Fill the mandatory fields");

    }

    
  };

  return (
    <section className="flex flex-col h-screen items-center  gap-4 p-4">
      <h1 className="font-bold text-3xl my-5 ">Create your PopX Account</h1>
      <CustomInput
        type="text"
        value={name}
        setValue={setName}
        name="Full Name"
      />
      <CustomInput
        type="text"
        value={number}
        setValue={setNumber}
        name="Phone Number"
      />
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
      <CustomInput
        type="text"
        value={companyName}
        setValue={setCompanyName}
        name="Company Name"
      />

      <div>
        <p className="flex gap-1 items-center ">
          Are You an Agency? <LuAsterisk className="text-red-400" />
        </p>

        <div className="flex gap-6">
          <div className="flex gap-1">
            <input
              id="yes"
              type="checkbox"
              value={isAgency}
              onChange={() => setIsAgency(true)}
            />
            <label htmlFor="yex">Yes</label>
          </div>

          <div className="flex gap-1">
            <input
              type="checkbox"
              value={isAgency}
              onChange={() => setIsAgency(false)}
            />
            <label>No</label>
          </div>
        </div>
      </div>
      <button className="customButton" onClick={handleSignUp} disabled={loading}>
        {loading ? "loading" :"Create Account"}
      </button>
    </section>
  );
};

export default SignUp;
