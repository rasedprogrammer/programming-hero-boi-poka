import { useLoaderData, useParams } from "react-router-dom";
import { addToStroredReadList, addToStroredWishList } from "../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const { image, bookName, bookId: currentBookId, review } = book;

  const handleBookMarkList = (id) => {
    addToStroredReadList(id);
  };
  const handleBookWishlist = (id) => {
    addToStroredWishList(id);
  };

  return (
    <div>
      <h2 className="text-4xl text-center my-4">
        Books Details Page {currentBookId}
      </h2>
      <hr />
      <div className="my-8 flex justify-center gap-4">
        <img src={image} className="w-1/4" alt="Book Picture" />
        <div className="mx-w-2xl book-content">
          <h3 className="text-4xl">
            <span className="font-bold">Book Name: </span>
            {bookName}
          </h3>
          <p className="text-lg my-4">
            <span className="font-bold">Description: </span>
            {review}
          </p>
          <div className="button-group">
            <button
              onClick={() => handleBookMarkList(currentBookId)}
              className="btn btn-outline btn-accent text-black mr-4 my-4"
            >
              Mark As Read
            </button>
            <button
              onClick={() => handleBookWishlist(currentBookId)}
              className="btn btn-accent"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
