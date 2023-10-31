import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {

   const { user } = useContext(AuthContext);
   // console.log(user);
   const checkoutService = useLoaderData();
   // console.log(checkoutService)
   const { _id, title, price,img } = checkoutService;

   const handleBookService = e => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = form.email.value;
      const price = form.price.value;
      const message = form.message.value;

      const order = {
         customerName: name,
         date,
         email,
         price,
         service: title,
         service_id: _id,
         img: img,
         comment: message
      }
      // console.log(order);
      fetch('https://car-doctor-server-side-beta.vercel.app/bookings',{
         method: 'POST',
         headers:{
            'content-type': 'application/json'
         },
         body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if(data.insertedId){
            Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Your service has been confirmed!!',
               showConfirmButton: false,
               timer: 1500
             })
             form.reset();
         }
      })
   }

   return (
      <div>
         <Banner></Banner>
         <h2 className="text-center text-3xl font-extrabold mt-10">Book Now: {title}</h2>
         <div className="bg-gray-100 my-20 rounded-xl p-4 md:p-10 px-0 md:px-20">
            <form onSubmit={handleBookService}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-0 md:py-10">
                  <div>
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name="name" defaultValue={user?.name}
                        className="bg-white py-4 px-5 w-full rounded-lg" placeholder="Your Name..." />
                  </div>
                  <div>
                     <label className="label">
                        <span className="label-text">Date</span>
                     </label>
                     <input type="date" name="date"
                        className="bg-white py-4 px-5 w-full rounded-lg" />
                  </div>
                  <div>
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name="email" defaultValue={user?.email}
                        className="bg-white py-4 px-5 w-full rounded-lg" placeholder="Your Email..." />
                  </div>
                  <div>
                     <label className="label">
                        <span className="label-text">Due Amount</span>
                     </label>
                     <input type="text" name="price" defaultValue={price}
                        className="bg-white py-4 px-5 w-full rounded-lg input-bordered" placeholder="Your Phone No..." />
                  </div>
               </div>
               <div className="mt-8">
                  <label className="label">
                     <span className="label-text">Message</span>
                  </label>
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