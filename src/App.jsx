import { useState } from "react";
import BooksList from "./container/BookList/BooksList";
import Modal from "./components/Modal/Modal";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [modalBookData, setModalBookData] = useState(null);
  const [books, setBooks] = useState([]);

  return (
    <>
      <Title />
      <SearchBar setBooks={setBooks} />
      <BooksList setModalBookData={setModalBookData} books={books} />
      <Modal book={modalBookData} setModalBookData={setModalBookData} />
    </>
  )
}

export default App;
