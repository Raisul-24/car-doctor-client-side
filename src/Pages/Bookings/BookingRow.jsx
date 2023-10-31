import PropTypes from 'prop-types';

const BookingRow = ({ booking, handleDelete,handleBookingConfirm }) => {
   // console.log(booking)
   const {_id, img, service, date, price,status } = booking;

  
   return (
      <tr>
         <th>
            <button onClick={() => handleDelete(_id)}
               className="btn btn-sm btn-circle btn-outline">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         </th>
         <td>
            <div className="avatar">
               <div className="mask mask-squircle w-20 h-20">
               {img ? <img src={img} alt="Avatar Tailwind CSS Component" /> : <p className='flex justify-center'>No image</p>}
                  
               </div>
            </div>
         </td>
         <td>
            <div>
               <div className="font-bold">{service}</div>
            </div>
         </td>
         <td>
            {price}$
         </td>
         <td>{date}</td>
         <th>
            {
               status === 'confirm' ? <span className='btn btn-xs btn-outline bg-green-500 w-24 border-2'>Approved</span> :
               <button onClick={() => handleBookingConfirm(_id)}
               className="btn btn-ghost btn-xs btn-outline bg-orange-600 w-24 border-2">Pending</button>
            }
         </th>
      </tr>
   );
};

BookingRow.propTypes = {
   booking: PropTypes.element.any,
   handleDelete: PropTypes.element.any,
   handleBookingConfirm: PropTypes.element.any,
}
export default BookingRow;