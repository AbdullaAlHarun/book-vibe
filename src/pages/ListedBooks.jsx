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
    const option = e.target.value;
    setSortOption(option);

    // Sort the books based on the selected option for both read books and wishlist books
    if (activeTab === "read") {
      const sortedReadBooks = [...readBooks].sort((a, b) => {
        if (a[option] < b[option]) return 1;
        if (a[option] > b[option]) return -1;
        return 0;
      });
      setReadBooks(sortedReadBooks);
    } else {
      const sortedWishlistBooks = [...wishlistBooks].sort((a, b) => {
        if (a[option] < b[option]) return 1;
        if (a[option] > b[option]) return -1;
        return 0;
      });
      setWishlistBooks(sortedWishlistBooks);
    }
  };

  const handleViewDetails = (book) => {
    // Navigate to the Book details page for the selected book
    history.push(`/book/${book.bookId}`);
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <h1 className="mx-auto text-4xl text-center">Books</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="mx-auto">
            <label className="btn btn-sm bg-[#23BE0A] " htmlFor="sort">
              Sort By:
            </label>
            <select
              id="sort"
              className="btn btn-sm bg-[#23BE0A] mx-auto"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="rating">Rating</option>
              <option value="totalPages">Number of Pages</option>
              <option value="yearOfPublishing">Publisher Year</option>
            </select>
          </div>
          <div className="container mx-auto mt-6">
            <div className="flex justify-start -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
              <a
                onClick={() => handleTabChange("read")}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${
                  activeTab === "read" ? "border-b-0 border-2" : "border-b"
                }`}
              >
                <span> Read Books</span>
              </a>
              <a
                onClick={() => handleTabChange("wishlist")}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${
                  activeTab === "wishlist" ? "border-b-0 border-2" : "border-b"
                }`}
              >
                <span>Wishlist</span>
              </a>
            </div>

            <div className="gap-2 grid">
              {(activeTab === "read" ? readBooks : wishlistBooks).map(
                (book) => (
                  <div
                    key={book.bookId}
                    className="card card-side border-2 bg-base-100 shadow-xl flex flex-col md:flex-row w-full flex-2"
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
