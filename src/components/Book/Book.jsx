import styles from './Book.module.scss';

const Book = ({ book, setModalBookData }) => {

	return (
		<article onClick={() => {
			setModalBookData(book)
		}} className={styles.book}>
			<img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt="No image found" />
			<p>{book.volumeInfo?.authors}</p>
			<p>{book.title}</p>
			<p>{book.volumeInfo?.description}</p>
		</article>
	);
};

export default Book;