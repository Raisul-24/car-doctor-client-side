/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { Link } from "react-router-dom";
import login from "/images/login/login.svg"
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { GithubAuthProvider } from "firebase/auth";

const Registration = () => {
   const { createUser,googleSignIn,githubSignIn,twitterSignIn } = useContext(AuthContext);
   const [registerError, setRegisterError] = useState(null);

   const handleRegister = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const newUser = { name, email, password }
      console.log(newUser)
      // reset
      setRegisterError('');
      setRegisterError('')
      if (password.length < 6) {
         return setRegisterError('Password should be at least 6 character');
      }
      else if(!/^(?=.*[A-Z])/.test(password)){
         return setRegisterError('Password should be at least 1 Capital Letter');
      }
      else if(!/(?=.*[@$!%*#?&])/.test(password)){
         return setRegisterError('Password should be at least 1 special character(@$!%*#?&)');
      }
      if (email, password) {
         createUser(email, password)
            .then(result => {
               console.log(result.user);
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your account has been successfully registered!!',
                  showConfirmButton: false,
                  timer: 1500
               })
               form.reset();
            })
            .catch(error => {
               console.log(error.message);
               setRegisterError(error.message);
            })
      }
   }
      const handleGoogleSignIn = () => {
      // reset
      setRegisterError('');
      // sign up
      googleSignIn()
         .then(result => {
            console.log(result.user);
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Sign In with Google Successfully',
               showConfirmButton: false,
               timer: 1500
            })
         })
         .catch(error => {
            console.log(error.message);
            setRegisterError(error.message);
         })
   }
   const handleGithubSignIn = () => {
      // reset
      setRegisterError('');
      // sign up
      githubSignIn()
         .then(result => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            // eslint-disable-next-line no-unused-vars
            const token = credential.accessToken;
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Sign In with Github Successfully',
               showConfirmButton: false,
               timer: 1500
            })
         })
         .catch(error => {
            console.log(error.message);
            setRegisterError(error.message);
         })
   }
   const handleTwitterSignIn = () => {
      // reset
      setRegisterError('');
      // sign up
      twitterSignIn()
         .then(result => {
            console.log(result.user);
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Sign In with Twitter Successfully',
               showConfirmButton: false,
               timer: 1500
            })
         })
         .catch(error => {
            console.log(error.message);
            setRegisterError(error.message);
         })
   }
return (
   <div className="flex flex-col md:flex-row my-20 items-center">
      <div className="w-1/2 flex justify-center md:justify-end">
         <img src={login} alt="" />
      </div>
      <div className="w-1/2 flex justify-center">
         <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#FF3811] to-[#f37a62] bg-clip-border shadow-pink-500/40">
               <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                  Register Now!!
               </h3>
            </div>
            {
               registerError && <p className="text-red-500 text-center">{registerError}</p>
            }
            <form onSubmit={handleRegister}>
               <div className="flex flex-col gap-4 p-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                     <input type="text" name="name"
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                     />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name
                     </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                     <input type="email" name="email"
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        required />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                     </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                     <input type="password" name="password"
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        required />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                     </label>
                  </div>

               </div>

               <div className="p-6 pt-0">
                  <input
                     className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#FF3811] to-[#f37a62] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                     type="submit"
                     data-ripple-light="true"
                     value="Register"
                  >
                  </input>
                  <p className="flex justify-center mt-6 font-sans text-medium antialiased font-light leading-normal text-inherit">
                     Or, Sign In with
                  </p>
                  <div className="flex justify-center my-5">
                        <div className="rounded-full text-4xl bg-slate-300 btn" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></div>
                        <div className="rounded-full btn text-4xl bg-slate-300 mx-5" onClick={handleGithubSignIn}><FaGithub className="text-black"></FaGithub></div>
                        <div className="rounded-full btn text-4xl bg-slate-300" onClick={handleTwitterSignIn}><FaTwitter className="text-blue-500"></FaTwitter></div>
                     </div>
                  <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                     Have an account?
                     <Link
                        to="/login"
                        className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-[#FF3811]"
                     >
                        Sign In
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </div>
   </div>
);
};

export default Registration;