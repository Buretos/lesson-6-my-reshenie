import { Link } from 'react-router-dom';
import styles from './page-404.module.css';

export const Page404 = () => {
	return (
		<>
			<div>
				<Link to="/">Вернуться на главную страницу</Link>
			</div>
			<div className={styles.centr}>
				<h1>Нет такой страницы!</h1>
			</div>
		</>
	);
};
