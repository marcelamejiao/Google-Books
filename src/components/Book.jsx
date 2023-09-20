const Book = ({ book }) => {

	return (
		<article>
			<img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt="No image found" />
			<p>{book.volumeInfo?.authors}</p>
			<p>{book.title}</p>
			<p>{book.volumeInfo?.description}</p>
		</article>
	);
};

export default Book;