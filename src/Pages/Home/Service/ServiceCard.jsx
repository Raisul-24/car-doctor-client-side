import PropTypes from 'prop-types';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
   const { _id,title, img, price } = service;
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
               <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <div className="card-actions flex justify-between items-center text-red-500 font-bold">
                  <p className="">Price: ${price}</p>
                  <Link to={`/checkOut/${_id}`}><BiRightArrowAlt className='text-3xl font-extrabold'></BiRightArrowAlt></Link>
               </div>
            </div>
         </div>
      </div>
   );
};
ServiceCard.propTypes = {
   service: PropTypes.element.any
}
export default ServiceCard;