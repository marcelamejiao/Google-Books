import styles from './Error.module.scss';

const Error = ({ error }) => {
	return (
			<div className={styles.error}>{error}</div>
	);
};

export default Error;