import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
   const {user,logOut} = useContext(AuthContext);
   // console.log(user);

   const handleLogOut =() =>{
      logOut()
      .then(()=>{
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'LogOut Successfully',
            showConfirmButton: false,
            timer: 1500
         })
      })
      .catch(error =>console.log(error))
   }
   const navLinks = <>
   <li><Link to='/'>Home</Link></li>
   <li><Link to='/about'>About</Link></li>
   <li><Link to='/services'>Services</Link></li>
   <li><Link to='/blog'>Blog</Link></li>
   <li><Link to='/contact'>Contact</Link></li>
   {
      user?.email ? <li><button onClick={handleLogOut}>LogOut</button></li>
      :
      <li><Link to='/login'>Login</Link></li>
   }

   </>
   return (
      <div>
         <div className="navbar flex items-center h-28">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <Link to='/' className="btn btn-ghost">
                  <img src="/logo.svg" className="h-10 md:h-20" />
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">
               <Link to='/login' className="btn btn-outline btn-warning">Appointment</Link>
            </div>
         </div>
      </div>
   );
};

export default Header;