```tsx
import React, { useState, useEffect } from 'react';
import { useAI } from '../../hooks/useAI';
import { useOrbit } from '../../hooks/useOrbit';
import { AutomationTask } from '../../types/index.d';
import styles from './styles.module.css';

const AutomationStation: React.FC = () => {
  const { aiEntities } = useAI();
  const { currentOrbit } = useOrbit();
  const [tasks, setTasks] = useState<AutomationTask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch automation tasks from the AI service
    const fetchTasks = async () => {
      try {
        // Placeholder for fetching tasks logic
        // Replace with actual API call
        const fetchedTasks: AutomationTask[] = await new Promise(resolve => setTimeout(() => resolve([
          // Sample tasks
          { id: '1', name: 'Email Sorting', status: 'active' },
          { id: '2', name: 'Calendar Scheduling', status: 'inactive' },
        ]), 1000));
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [aiEntities, currentOrbit]);

  const handleTaskToggle = (taskId: string) => {
    // Placeholder for task toggle logic
    // Replace with actual API call to toggle task status
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: task.status === 'active' ? 'inactive' : 'active' } : task
      )
    );
  };

  if (loading) {
    return <div>Loading automation tasks...</div>;
  }

  return (
    <div className={styles.automationStation}>
      <h1>Automation Station</h1>
      <div className={styles.taskList}>
        {tasks.map(task => (
          <div key={task.id} className={styles.taskItem}>
            <span>{task.name}</span>
            <button onClick={() => handleTaskToggle(task.id)}>
              {task.status === 'active' ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomationStation;
```