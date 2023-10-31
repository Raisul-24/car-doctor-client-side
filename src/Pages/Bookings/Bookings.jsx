import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";


const Bookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([]);

   const url = `https://car-doctor-server-side-beta.vercel.app/bookings?email=${user.email}`;
   useEffect(() => {
      axios.get(url, {withCredentials: true})
      .then(res => {
         setBookings(res.data);
      })
      // fetch(url)
      //    .then(res => res.json())
      //    .then(data => {
      //       console.log(data);
      //       setBookings(data);
      //    })
   }, [url]);
   const handleDelete = id => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://car-doctor-server-side-beta.vercel.app/bookings/${id}`,{
               method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
               console.log(data);
               if(data.deletedCount > 0){
                  Swal.fire(
                     'Deleted!',
                     'Your service has been deleted.',
                     'success'
                  )
                  const remaining = bookings.filter(booking => booking._id !==id);
                  setBookings(remaining);
               }
            })
            
         }
      })
   }
   const handleBookingConfirm = id =>{
      fetch(`https://car-doctor-server-side-beta.vercel.app/bookings/${id}`,{
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({status: 'confirm'})
      })
      .then(res=> res.json())
      .then(data =>{
         console.log(data);
         if(data.modifiedCount >0){
            // update state
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status ='confirm'
            const newBooking = [updated, ...remaining];
            setBookings(newBooking);
         }
      })
   }
   return (
      <div>
         <h2 className="text-5xl text-center my-5 font-bold">Your bookings: {bookings.length}</h2>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>
                        <label>
                           Delete
                        </label>
                     </th>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Date</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     bookings.map(booking=><BookingRow key={booking._id} 
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                  }
               </tbody>


            </table>
         </div>
      </div>
   );
};

export default Bookings;