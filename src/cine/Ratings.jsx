import { FaStar } from "react-icons/fa";


const Ratings = ({value}) => {
    const starts = Array(value).fill(<FaStar className="text-green-400"/>)
  return (
    <>
      {
        starts.map((star,index) => <div key={index}>{star}</div>)
      }
    </>
  );
};

export default Ratings;