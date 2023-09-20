import { useState } from "react";

const Book = () => {
	const [bookName, setBookName] = useState('');

	const refreshSearch = () => {
		console.log("hey")
	}

	const handleChange = (e) => {
		setBookName(e.target.value);
		console.log(e.target.value)
	}

	return (
		<>
			<input type="text" value={bookName} onChange={handleChange} />
			<button  onClick={refreshSearch}>Send</button>
		</>
	);
};

export default Book;