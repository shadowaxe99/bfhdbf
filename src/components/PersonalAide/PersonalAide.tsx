```typescript
import React, { useState, useEffect, useContext } from 'react';
import { AIContext } from '../../context/AIContext';
import { useAI } from '../../hooks/useAI';
import styles from './styles.module.css';

interface PersonalAideProps {
  userId: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
}

const PersonalAide: React.FC<PersonalAideProps> = ({ userId }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { getTasksForUser, scheduleTask } = useAI();
  const { aiState } = useContext(AIContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const userTasks = await getTasksForUser(userId);
      setTasks(userTasks);
    };

    fetchTasks();
  }, [userId, getTasksForUser]);

  const handleTaskSchedule = async (task: Task) => {
    const newTask = await scheduleTask(task);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={styles.personalAideContainer}>
      <h1>Personal Aide</h1>
      <div className={styles.tasksContainer}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskCard}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {task.dueDate.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      <button onClick={() => handleTaskSchedule({
        id: 'new',
        title: 'New Task',
        description: 'Description of the new task',
        dueDate: new Date(),
      })}>
        Schedule New Task
      </button>
    </div>
  );
};

export default PersonalAide;
```