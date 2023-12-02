# Automation Station API Reference

## Overview

The Automation Station component of Elysium OS is designed to enhance productivity by automating routine tasks with AI. This document serves as an API reference for developers looking to integrate and extend the Automation Station's capabilities within their applications.

## Endpoints

### `GET /api/automation/tasks`

Retrieves a list of automated tasks configured by the user.

#### Parameters

None.

#### Response

```typescript
type AutomatedTask = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  schedule: string; // cron format
};

type GetTasksResponse = {
  tasks: AutomatedTask[];
};

// Example response
{
  tasks: [
    {
      id: "1",
      name: "Daily Backup",
      description: "Backs up the system every day at 2 AM",
      enabled: true,
      schedule: "0 2 * * *",
    },
    // ... other tasks
  ];
}
```

### `POST /api/automation/tasks`

Creates a new automated task.

#### Parameters

```typescript
type CreateTaskRequest = {
  name: string;
  description: string;
  enabled: boolean;
  schedule: string; // cron format
};
```

#### Response

```typescript
type CreateTaskResponse = {
  task: AutomatedTask;
};

// Example response
{
  task: {
    id: "2",
    name: "Weekly Report Generation",
    description: "Generates a weekly report every Monday at 8 AM",
    enabled: true,
    schedule: "0 8 * * 1",
  };
}
```

### `PUT /api/automation/tasks/{taskId}`

Updates an existing automated task.

#### Parameters

```typescript
type UpdateTaskRequest = {
  name?: string;
  description?: string;
  enabled?: boolean;
  schedule?: string; // cron format
};
```

#### Response

```typescript
type UpdateTaskResponse = {
  task: AutomatedTask;
};

// Example response
{
  task: {
    id: "2",
    name: "Weekly Report Generation",
    description: "Generates a financial report every Monday at 8 AM",
    enabled: true,
    schedule: "0 8 * * 1",
  };
}
```

### `DELETE /api/automation/tasks/{taskId}`

Deletes an automated task.

#### Parameters

None.

#### Response

```typescript
type DeleteTaskResponse = {
  success: boolean;
};

// Example response
{
  success: true;
}
```

## Error Handling

All endpoints should return appropriate HTTP status codes along with an error message in the case of a failure.

```typescript
type ErrorResponse = {
  error: string;
};

// Example error response
{
  error: "Task not found";
}
```

## Usage

To use these endpoints, developers should import the `AIService` from `src/services/AIService.ts` and use the provided methods to interact with the Automation Station's backend.

```typescript
import { AIService } from '../services/AIService';

// Example usage for retrieving tasks
AIService.getAutomationTasks().then(response => {
  console.log(response.tasks);
});

// Example usage for creating a task
const newTask = {
  name: "Data Archiving",
  description: "Archives old data every month",
  enabled: true,
  schedule: "0 0 1 * *",
};

AIService.createAutomationTask(newTask).then(response => {
  console.log(response.task);
});
```

## Conclusion

The Automation Station API provides a robust set of endpoints for managing automated tasks within Elysium OS. By leveraging these APIs, developers can create applications that automate routine tasks, thereby increasing efficiency and productivity for users.