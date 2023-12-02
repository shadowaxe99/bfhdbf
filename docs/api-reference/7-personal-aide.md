# Personal Aide API Reference

## Overview

The Personal Aide component of Elysium OS is an AI-powered assistant designed to adapt to user habits and optimize task management. This document provides a detailed API reference for developers looking to integrate or extend the Personal Aide functionalities within their applications.

## API Endpoints

### Get Personal Aide Profile

- **GET** `/api/personal-aide/profile`
- Retrieves the profile information of the Personal Aide, including preferences and learned habits.

### Update Personal Aide Profile

- **PUT** `/api/personal-aide/profile`
- Updates the profile information of the Personal Aide.

### Fetch Scheduled Tasks

- **GET** `/api/personal-aide/tasks`
- Fetches a list of scheduled tasks managed by the Personal Aide.

### Add New Task

- **POST** `/api/personal-aide/tasks`
- Adds a new task to the Personal Aide's schedule.

### Update Task

- **PUT** `/api/personal-aide/tasks/:taskId`
- Updates an existing task in the Personal Aide's schedule.

### Delete Task

- **DELETE** `/api/personal-aide/tasks/:taskId`
- Removes a task from the Personal Aide's schedule.

## Models

### Profile

```typescript
interface Profile {
  userId: string;
  preferences: Preferences;
  habits: Habit[];
}

interface Preferences {
  notificationSettings: NotificationSettings;
  theme: string;
}

interface NotificationSettings {
  enableEmail: boolean;
  enablePush: boolean;
}

interface Habit {
  activity: string;
  frequency: string;
}
```

### Task

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
}

enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}
```

## Usage

### Initializing Personal Aide

To initialize the Personal Aide within your component, import the `useAI` hook and the `PersonalAide` component from the shared dependencies.

```typescript
import { useAI } from 'src/hooks/useAI';
import PersonalAide from 'src/components/PersonalAide/PersonalAide';
```

### Fetching Tasks

To fetch tasks scheduled by the Personal Aide, use the `useAI` hook to access the `fetchTasks` method.

```typescript
const { fetchTasks } = useAI();

const tasks = fetchTasks();
```

### Adding a New Task

To add a new task, use the `useAI` hook to access the `addTask` method.

```typescript
const { addTask } = useAI();

const newTask: Task = {
  title: 'Meeting with Team',
  description: 'Discuss project milestones',
  dueDate: new Date('2023-04-15T09:00:00'),
  priority: Priority.HIGH
};

addTask(newTask);
```

### Updating a Task

To update an existing task, use the `useAI` hook to access the `updateTask` method.

```typescript
const { updateTask } = useAI();

const updatedTask: Task = {
  id: 'task-123',
  title: 'Updated Meeting with Team',
  description: 'Discuss updated project milestones',
  dueDate: new Date('2023-04-15T10:00:00'),
  priority: Priority.MEDIUM
};

updateTask(updatedTask);
```

### Deleting a Task

To delete a task, use the `useAI` hook to access the `deleteTask` method.

```typescript
const { deleteTask } = useAI();

deleteTask('task-123');
```

## Error Handling

All API interactions should include error handling to ensure a smooth user experience. Use try-catch blocks to handle any potential errors that may occur during API calls.

```typescript
try {
  const tasks = await fetchTasks();
} catch (error) {
  console.error('Failed to fetch tasks:', error);
}
```

## Conclusion

The Personal Aide API provides a robust set of endpoints for managing tasks and user preferences. By following this reference, developers can effectively integrate the Personal Aide's capabilities into their applications, enhancing the overall user experience within Elysium OS.