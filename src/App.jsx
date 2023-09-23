import { useState } from "react";
import BooksList from "./container/BookList/BooksList";
import Modal from "./components/Modal/Modal";
import Title from "./components/Title/Title";

function App() {
  const [modalBookData, setModalBookData] = useState(null);

  return (
    <>
      <Title />
      <BooksList setModalBookData={setModalBookData} />
      <Modal book={modalBookData} setModalBookData={setModalBookData} />
    </>
  )
}

export default App;
