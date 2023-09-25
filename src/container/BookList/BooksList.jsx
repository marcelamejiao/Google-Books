import Book from "../../components/Book/Book.jsx";
import styles from './BooksList.module.scss';

const BooksList = ( {setModalBookData, books} ) => {


	return (
		<>
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