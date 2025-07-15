import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, category, tags, bookName, author, bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-base-300 py-8 rounded-2xl">
          <img src={image} alt="Shoes" className="h-[166px]" />
        </figure>
        <div className="card-body">
          <div className="flex gap-6 items-center">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-green-800"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed border-gray-400"></div>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
