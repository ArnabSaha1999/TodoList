import { useState, useContext, createContext, useEffect, useCallback, useMemo } from 'react';

// Create a TodoContext with default values for todos and functions
const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { },
    updateTodo: () => { },
    toggleCompleted: () => { }
});

// TodoProvider component to manage todo state and provide it to the rest of the app
export const TodoProvider = ({ children }) => {
    // Initialize todos from localStorage or use an empty array
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        return (savedTodos && savedTodos.length > 0) ? savedTodos : [];
    });

    // State to manage the current filter ('All', 'Completed', 'Pending')
    const [filter, setFilter] = useState("All");

    // Add a new todo to the list
    const addTodo = useCallback((todo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    }, []);

    // Delete a todo based on its ID
    const deleteTodo = useCallback((id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    // Update the text of a todo based on its ID
    const updateTodo = useCallback((id, updatedTodoText) => {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? { ...todo, todo: updatedTodoText } : todo
        ));
    }, []);

    // Toggle the completed status of a todo
    const toggleCompleted = useCallback((id) => {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    }, []);

    // Filter the todos based on the current filter state
    const getFilteredTodos = useCallback(() => {
        if (filter === "Completed") {
            return todos.filter(todo => todo.isCompleted);
        }

        if (filter === "Pending") {
            return todos.filter(todo => !todo.isCompleted);
        }

        // If 'All', return all todos
        return todos;
    }, [todos, filter])

    // Memoize the filtered todos to avoid unnecessary recalculations
    const filteredTodos = useMemo(() => getFilteredTodos(), [getFilteredTodos]);

    // Update localStorage whenever todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    // Provide todo-related data and functions to children components
    return (
        <TodoContext.Provider value={{ filter, setFilter, filteredTodos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
            {children}
        </TodoContext.Provider>
    );
}

// Custom hook to use the TodoContext in components
export const useTodo = () => useContext(TodoContext);