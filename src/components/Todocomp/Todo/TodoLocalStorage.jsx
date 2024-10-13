export const getLocalStorageTodoData = () => {
  const rawTodo = localStorage.getItem("reactTodo");

  // Check if there is any data in localStorage and if it's valid
  if (!rawTodo) return []; // If no data is found, return an empty array

  try {
    return JSON.parse(rawTodo); // Attempt to parse the JSON data
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return []; // If parsing fails, return an empty array to avoid crashing
  }
};

export const setLocalStorageTodoData = (task) => {
  localStorage.setItem("reactTodo", JSON.stringify(task));
};
