import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {

   const {user} = useContext(AuthContext);
   // console.log(user);
   const checkoutService = useLoaderData();
   const { _id, title, price } = checkoutService;
   console.log(_id,title,price)
   return (
      <div>
         <Banner></Banner>
         <div className="bg-gray-100 my-20 rounded-xl p-4 md:p-10 px-0 md:px-20 text-base md:text-xl">
            <form >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-0 md:py-10">
                  <div>
                     <input type="text" name="name" defaultValue={user?.name}
                        className="bg-white py-4 px-5 w-full rounded-lg" placeholder="Your Name..." />
                  </div>
                  <div>
                     <input type="date" name="date"
                        className="bg-white py-4 px-5 w-full rounded-lg" />
                  </div>
                  <div>
                     <input type="email" name="email" defaultValue={user?.email}
                        className="bg-white py-4 px-5 w-full rounded-lg" placeholder="Your Email..." />
                  </div>
                  <div>
                     <input type="text" name="phone" defaultValue={user?.phone}
                        className="bg-white py-4 px-5 w-full rounded-lg input-bordered" placeholder="Your Phone No..." />
                  </div>
               </div>
               <div className="mt-8">
                  <textarea name="message"
                     className="bg-white py-4 px-5 w-full rounded-lg h-60 textarea-lg " placeholder="Your Message..." />
               </div>
               <div className="mt-8 pb-0 md:pb-20">
                  <input type="submit" value="Order Confirm"
                     className="bg-white py-2 px-5 w-full rounded-lg textarea-lg text-center bg-gradient-to-tr from-[#FF3811] to-[#f37a62] text-white font-semibold" />
               </div>
            </form>
         </div>
      </div>
   );
};

export default Checkout;