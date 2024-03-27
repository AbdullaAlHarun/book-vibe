import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const { id } = useParams(); // Assuming your route parameter is named 'id'
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`/book.json`)
            .then(response => response.json())
            .then(data => {
                const selectedBook = data.find(book => book.bookId === parseInt(id));
                setBook(selectedBook);
            })
            .catch(error => console.error('Error fetching book data:', error));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className='bg-slate-300 p-8 flex justify-center rounded-xl'>
                        <img
                            src={book.image}
                            alt={book.bookName}
                            className="object-cover w-[350px] h-[500px] rounded-lg "
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">{book.bookName}</h2>
                        <p className="text-gray-600 font-semibold">By: {book.author}</p>
                        <hr /> 
                        <p className="text-gray-600 font-semibold">{book.category}</p>
                        <hr /> 
                        <p className="text-gray-600"><b>Review:</b> {book.review}</p>
                        <div className="flex justify-start gap-2">
                            {book.tags.map((tag, index) => (
                                <span key={index} className="text-xs tracking-wider uppercase hover:underline btn btn-sm text-[#23BE0A]">{tag}</span>
                            ))}
                        </div>
                        <hr />
                        <p className="text-gray-600">Total Pages: {book.totalPages}</p>
                        <p className="text-gray-600">Year of Publishing: {book.yearOfPublishing}</p>
                        <p className="text-gray-600">Publisher: {book.publisher}</p>
                        <p className="text-gray-600">Rating: {book.rating}</p>
                        <div className="flex">
                            <button className="btn btn-sm btn-primary mr-2">Read</button>
                            <button className="btn btn-sm btn-secondary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;
