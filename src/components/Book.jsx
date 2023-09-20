import { useState } from "react";

const Book = () => {
	const [bookName, setBookName] = useState('');

	const refreshSearch = (e) => {
		e.preventDefault();
		console.log("hey")
	}

	const handleChange = (e) => {
		setBookName(e.target.value);
		console.log(e.target.value)
	}

	return (
		<>
			<form onSubmit={refreshSearch}>
				<input 
					type="text" 
					placeholder="enter the book name"
					value={bookName} 
					onChange={handleChange} 
				/>
				<button>Send</button>
			</form>
		</>
	);
};

export default Book;