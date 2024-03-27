import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert'; // Importing sweetalert library
import '../index.css';

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

    // Function to handle adding item to local storage and showing toast
    const handleAddToStorage = (action) => {
        let storageKey = '';
        let message = '';
        
        if (action === 'Read') {
            storageKey = 'readBooks';
            message = `Added "${book.bookName}" to Read list!`;
        } else if (action === 'Wishlist') {
            storageKey = 'wishlistBooks';
            message = `Added "${book.bookName}" to Wishlist!`;
        }
    
        // Check if the book is already added to local storage
        let storedBooks = localStorage.getItem(storageKey);
        storedBooks = storedBooks ? JSON.parse(storedBooks) : [];
        const isBookAdded = storedBooks.find(item => item.bookId === book.bookId);
    
        if (action === 'Wishlist') {
            const isBookInReadList = localStorage.getItem('readBooks');
            if (isBookInReadList && isBookInReadList.includes(book.bookId.toString())) {
                swal('Oops!', `"${book.bookName}" is already in your Read list!`, 'warning');
                return;
            }
        }
    
        if (!isBookAdded) {
            storedBooks.push(book);
            localStorage.setItem(storageKey, JSON.stringify(storedBooks));
            swal('Success!', message, 'success'); // Show success toast
        } else {
            swal('Oops!', `"${book.bookName}" is already in your ${action} list!`, 'warning'); // Show warning toast
        }
    };

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
                            <button onClick={() => handleAddToStorage('Read')} className="btn btn-sm btn-primary mr-2">Read</button>
                            <button onClick={() => handleAddToStorage('Wishlist')} className="btn btn-sm btn-secondary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;
