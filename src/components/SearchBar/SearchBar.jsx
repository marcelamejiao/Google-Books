import { useState } from "react";
import { getBooksData } from "../../services/book-services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.scss';

const SearchBar = ( { setBooks } ) => {
	const [bookName, setBookName] = useState('');

	const [error, setError] = useState('');

	const refreshSearch = async (e) => {
		e.preventDefault();
		setError('');

		try {
			const booksData = await getBooksData(bookName);
			// with the APIs response, change the initial state
			setBooks(booksData);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleChange = (e) => {
		setError('');
		setBookName(e.target.value);
	};

	return (
		<>
			<form onSubmit={refreshSearch}>
				<div className={styles.wrapper}>
					<input
					required
					className={styles.search}
					type="text" 
					placeholder="enter the book's name..."
					value={bookName} 
					onChange={handleChange} 
					/>
					<button className={styles.button}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
				</div>
				<div>{error}</div>
			</form>
		</>
	);
};

export default SearchBar;
