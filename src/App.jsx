import { useState } from "react";
import BooksList from "./components/BooksList";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalBookData, setModalBookData] = useState(null);

  return (
    <>
      <BooksList setModalBookData={setModalBookData} />
      <Modal book={modalBookData} setModalBookData={setModalBookData} />
    </>
  )
}

export default App;
