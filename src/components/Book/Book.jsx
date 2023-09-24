import styles from './Book.module.scss';

const Book = ({ book, setModalBookData }) => {

	return (
		<article onClick={() => {
			setModalBookData(book)
		}} className={styles.book}>
			<p className={styles.title}>{book.volumeInfo?.title}</p>
			<img className={styles.image} src={book.volumeInfo?.imageLinks?.smallThumbnail} alt="No image found" />
			<p className={styles.text}>Author: {book.volumeInfo?.authors}</p>
			<p className={styles.text}>Description: {book.volumeInfo?.description}</p>
		</article>
	);
};

export default Book;