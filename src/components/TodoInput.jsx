import { useRef } from 'react';
import { useTodo } from '../contexts/TodoContext';

const TodoInput = () => {
    // Access the addTodo function from the TodoContext
    const { addTodo } = useTodo();
    const inputRef = useRef(null);

    // Function to create and add a new todo item
    const addTodoItem = () => {
        if (inputRef.current?.value.trim() !== '') {
            // Create a new todo object
            const newTodo = {
                id: Date.now(), // Unique ID based on current timestamp
                todo: inputRef.current?.value.trim(), // Get input value
                time: formatDate(new Date()), // Format current date and time
                isCompleted: false // Set initial completed status to false
            }
            // Add the new todo to the context
            addTodo(newTodo);
        }
        // Clear the input field after adding the todo
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    // Format the current date and time for the todo item
    const formatDate = (date) => {
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const time = date.toLocaleString([], timeOptions); // Get time in 'hh:mm AM/PM' format
        const day = date.getDate().toString().padStart(2, '0'); // Get day with leading zero
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month with leading zero
        const year = date.getFullYear().toString(); // Get year
        // Return formatted date string
        return `${time}, ${day}/${month}/${year}`;
    }

    return (
        <div
            className="flex flex-row flex-wrap justify-start items-center w-1/2 xl:w-3/5 lg:w-3/4 md:w-4/5 sm:w-full">
            {/* Input field for new todo */}
            <input
                ref={inputRef}
                type="text"
                placeholder="Type Your Todo"
                className="px-4 py-2 border-2 border-purple-500 outline-none rounded-l-xl h-12 grow"
            />
            {/* Button to add new todo */}
            <button
                className="bg-purple-500 px-4 py-2 text-white outline-none border-none rounded-r-xl h-12"
                onClick={addTodoItem}>
                Add Todo
            </button>
        </div>
    );
}

export default TodoInput;