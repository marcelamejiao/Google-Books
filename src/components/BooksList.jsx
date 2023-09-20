import { useState } from "react";
import { getBooksData } from "../services/book-services";

const BooksList = () => {
	const [bookName, setBookName] = useState('');
	const [books, setBooks] = useState([]);
	const [error, setError] = useState('');

	const refreshSearch = async (e) => {
		e.preventDefault();
		try {
			const booksData = await getBooksData(bookName);
			// with the APIs response, change the initial state
			setBooks(booksData);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleChange = (e) => {
		setBookName(e.target.value);
	};

	return (
		<>
			<form onSubmit={refreshSearch}>
				<input 
					type="text" 
					placeholder="enter the book's name here"
					value={bookName} 
					onChange={handleChange} 
				/>
				<button>Send</button>
				<div>{error}</div>
				{books.map((book, index) => {
					return (
					<div key={`book-${index}`}>
						<img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt="No image found" />
						<p>{book.volumeInfo?.authors}</p>
						<p>{book.title}</p>
						<p>{book.volumeInfo?.description}</p>
					</div>
					);
				})}

			</form>
		</>
	);
};

export default BooksList;