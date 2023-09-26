import { useState } from "react";
import BooksList from "./container/BookList/BooksList";
import Modal from "./components/Modal/Modal";
import Title from "./components/Title/Title";
import Error from "./components/Error/Error";
import SearchBar from "./components/SearchBar/SearchBar";
import { getBooksData } from "./services/book-services";

function App() {
  const [modalBookData, setModalBookData] = useState(null);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const refreshSearch = async (newQuery) => {
		setError('');

		try {
			const booksData = await getBooksData(newQuery);
			// with the APIs response, change the initial state
			setBooks(booksData);
		} catch (err) {
			setError(err.message);
			// when an error occurs don't show any books
			setBooks([]);
		}
	};


  return (
    <>
      <Title />
      <SearchBar 
        setBooks={setBooks}
        onSubmit={(newQuery) => {refreshSearch(newQuery)}}
        placeholder="enter the book's name..."
        />
      {error ? (<Error error={error} />) : ''}
      <BooksList setModalBookData={setModalBookData} books={books} />
      <Modal book={modalBookData} setModalBookData={setModalBookData} />
    </>
  )
}

export default App;
