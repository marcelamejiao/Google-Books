import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ( { book, setModalBookData } ) => {
	let modalClasses = styles.modalCard;
	let wrapperClasses = styles['modal-wrapper'];

	if (!book) {
		wrapperClasses += ` ${styles['modal-wrapper--hidden']}`
	}

	return (
		<div className={wrapperClasses}>
			<div className={modalClasses}>
				<FontAwesomeIcon onClick={() => {setModalBookData(null)}} icon={faCircleXmark} />
				<p>Language: {book?.volumeInfo?.language}</p>
				<p>Published Date: {book?.volumeInfo?.publishedDate}</p>
				<p>Publisher: {book?.volumeInfo?.publisher}</p>
				<p>Page count: {book?.volumeInfo?.pageCount}</p>
				<p>Average raiting: {book?.volumeInfo?.averageRating}</p>
			</div>
		</div>
	);
};

export default Modal;