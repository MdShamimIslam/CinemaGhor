import { useContext, useState } from "react";
import { getImgUrl } from "../utils/options";
import Ratings from "./Ratings";
import MovieModal from "./MovieModal";
import { MovieContext } from "../context";
import { toast } from 'react-toastify';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {state,dispatch} = useContext(MovieContext);

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };
  const handleMovieSelection = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };

  const handleAddToCart = (e,movie)=>{
    e.stopPropagation();

    const found = state.cartData.find(item => item.id === movie.id);

    if (!found) {
        dispatch({
          type:"ADD_TO_CART",
          payload:{
            ...movie
          }
        })
        toast.success(`${movie.title} added Successfully`)

    }else{
      toast.error(`This movie ${movie.title} already added !!`)
    }

  }

  return (
    <>
      {showModal && (
        <MovieModal onClose={handleModalClose} onAddToCart={handleAddToCart} movie={selectedMovie} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full h-[500px] object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e)=> handleAddToCart(e,movie)}
            >
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
