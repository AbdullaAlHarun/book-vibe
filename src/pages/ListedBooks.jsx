import { useState, useEffect } from "react";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");
  const [sortOption, setSortOption] = useState("rating");

  useEffect(() => {
    const storedReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
    setReadBooks(storedReadBooks);

    const storedWishlistBooks =
      JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    setWishlistBooks(storedWishlistBooks);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle sorting option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <h1 className="mx-auto text-4xl text-center">Books</h1>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
              <option value="rating">Rating</option>
              <option value="totalPages">Number of Pages</option>
              <option value="yearOfPublishing">Publisher Year</option>
            </select>
          </div>
          <div className="container mx-auto mt-6">
            

            

            <div className="gap-2 grid">
              {(activeTab === "read" ? readBooks : wishlistBooks).map(
                (book) => (
                  <div
                    key={book.bookId}
                    className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row w-full flex-2"
                  >
                    <figure className="text-center md:text-left">
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="p-8 w-60 h-72 object-cover rounded-md mx-auto md:ml-0"
                      />
                    </figure>
                    <div className="card-body ml-4">
                      <h2 className="card-title">{book.bookName}</h2>
                      <h2>By: {book.author}</h2>
                      <div className="flex flex-col md:flex-row w-full flex-2 gap-2">
                        <div className="gap-2 flex">
                          <strong>Tags:</strong>
                          {book.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs tracking-wider uppercase hover:underline btn btn-sm text-[#23BE0A]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span>
                          <p>Year of Publishing: {book.yearOfPublishing}</p>
                        </span>
                      </div>
                      <div className="flex justify-start gap-2">
                        <span>Publisher: {book.publisher}</span>
                        <p>Total Pages: {book.totalPages}</p>
                      </div>
                      <hr />
                      <div className="card-actions justify-start">
                        <span className="text-xs tracking-wider uppercase hover:underline btn btn-sm text-info">
                          Catagory:{book.category}
                        </span>
                        <span className="text-xs tracking-wider uppercase hover:underline btn btn-sm text-warning">
                          Ratings:{book.rating}
                        </span>
                        <button className="btn btn-sm bg-[#23BE0A] text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
