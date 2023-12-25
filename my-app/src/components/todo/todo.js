import { useNavigate } from 'react-router-dom';
// import { Button } from '../button/button';
import styles from './todo.module.css';

export const Todo = ({
	id,
	title,
	completed,
	isEditing,
	// onEdit,
	onTitleChange,
	onCompletedChange,
	// onSave,
	// onRemove,
}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/task/${id}`);
	};

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>
			<div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onTitleChange(target.value)}
					/>
				) : (
					// <div className={styles.title} onClick={onEdit}>
					<div className={styles.title} onClick={handleClick}>
						{title}
					</div>
				)}
			</div>
			{/* <div>
				{isEditing ? (
					<Button onClick={onSave}>✎</Button>
				) : (
					<Button onClick={onRemove}>✖</Button>
				)}
			</div> */}
		</div>
	);
};
