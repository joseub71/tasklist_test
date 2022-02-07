
const server_name = process.env.REACT_APP_BACKEND_SERVER

export const global = {
  SERVER_NAME: server_name,
  TASKS_GET: `${server_name}/tasks`,
  TASKS_PUT: `${server_name}/tasks`,
}