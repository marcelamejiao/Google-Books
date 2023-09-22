import { useState } from "react";
import { getBooksData } from "../services/book-services";
import Book from "./Book/Book.jsx";
import styles from './Wrapper/Wrapper.module.scss';

const BooksList = ( {setModalBookData} ) => {
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
			</form>

			<div className={styles.wrap}>
				{books.map((book, index) => {
					return (
						<Book 
							book={book}
							key={index}	
							setModalBookData={setModalBookData}
						/>
					);
				})}
			</div>
		</>
	);
};

export default BooksList;