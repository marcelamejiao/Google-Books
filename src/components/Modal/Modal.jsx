import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ( { book, setModalBookData } ) => {
	let modalClasses = styles['modal-card'];
	let wrapperClasses = styles['modal-wrapper'];
	let modalDetailClass = styles['modal-card__detail'];

	if (!book) {
		wrapperClasses += ` ${styles['modal-wrapper--hidden']}`
	}

	return (
		<div className={wrapperClasses}>
			<div className={modalClasses}>
				<FontAwesomeIcon onClick={() => {setModalBookData(null)}} icon={faCircleXmark} />
				<p>{book?.volumeInfo?.title}</p>
				<p className={modalDetailClass}>Language: {book?.volumeInfo?.language}</p>
				<p className={modalDetailClass}>Published Date: {book?.volumeInfo?.publishedDate}</p>
				<p className={modalDetailClass}>Publisher: {book?.volumeInfo?.publisher}</p>
				<p className={modalDetailClass}>Page count: {book?.volumeInfo?.pageCount}</p>
				<p className={modalDetailClass}>Average raiting: {book?.volumeInfo?.averageRating}</p>
			</div>
		</div>
	);
};

export default Modal;