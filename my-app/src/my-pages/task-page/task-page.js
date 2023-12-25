import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components';
import styles from './task-page.module.css';
import { useEffect, useState } from 'react';

export const TaskPage = () => {
	const [task, setTask] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	};

	console.log(task);

	useEffect(() => {
		fetch(`http://localhost:3003/todos/${id}`)
			.then((response) => response.json())
			.then((data) => setTask(data));
	}, [id]);

	return (
		<div className={styles.task}>
			<div className={styles.panelTask}>
				<div>
					<Button onClick={handleClick}>⪦</Button>
				</div>
				<div>
					<Button>✖</Button>
				</div>
				<div>
					<Button>✎</Button>
				</div>
			</div>
			{task ? (
				<div className={styles.title}>{task.title}</div>
			) : (
				<div className={styles.loader}></div>
			)}
		</div>
	);
};
