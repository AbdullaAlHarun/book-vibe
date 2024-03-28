import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/book.json') // Fetch the JSON data from the public folder
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (books.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
                <h1 className='mx-auto text-4xl text-center'>Books</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {books.map(book => (
                        <div key={book.bookId} className="group">
                            <Link to={`/book/${book.bookId}`} className="max-w-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 p-5 rounded-xl block">
                                <div className="relative mx-auto justify-center flex item-center">
                                    <img
                                        role="presentation"
                                        className="object-cover  h-80 p-10 rounded bg-cover bg-black"
                                        src={book.image}
                                        alt={book.bookName}
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex justify-start gap-2">
                                        {book.tags.map((tag, index) => (
                                            <span key={index} className="text-xs tracking-wider uppercase hover:underline btn btn-sm text-[#23BE0A]">{tag}</span>
                                        ))}
                                    </div>
                                    
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                        {book.bookName}
                                    </h3>
                                    
                                    <span className="text-base dark:text-gray-600">
                                        By: {book.author}
                                    </span>
                                    <hr className='border-dashed'/>
                                    <div className="flex justify-between">
                                        <span className="text-sm dark:text-gray-600"> {book.category}</span>
                                        <span className="text-sm dark:text-gray-600">Rating {book.rating} <FontAwesomeIcon icon={faStar} /></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;
