import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.scss';

const SearchBar = ( { onSubmit, ...inputProps } ) => {
	const [bookName, setBookName] = useState('');

	const handleChange = (e) => {
		setBookName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(bookName);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className={styles.wrapper}>
					<input
					required
					className={styles.search}
					type="text" 
					value={bookName} 
					onChange={handleChange} 
					{...inputProps}
					/>
					<button className={styles.button}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</form>
		</>
	);
};

export default SearchBar;
