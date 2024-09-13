import Todo from "./Todo";
import { useTodo } from '../contexts/TodoContext';
import EmptyTodo from "./EmptyTodo";
import EmptyPendingTodo from "./EmptyPendingTodo";
import EmptyCompletedTodo from "./EmptyCompletedTodo";
const TodoList = () => {
    const { filter, filteredTodos } = useTodo();

    // Determine the appropriate empty state component to render based on the filter and filteredTodos length
    const renderEmptyState = () => {
        // Check if there are no todos to display
        if (filteredTodos.length === 0) {
            // Return the corresponding empty state component based on the current filter
            switch (filter) {
                case "Pending":
                    return <EmptyPendingTodo />

                case "Completed":
                    return <EmptyCompletedTodo />

                default:
                    return <EmptyTodo />
            }
        }
        // Return null if there are todos to display (no empty state component needed)
        return null;
    }

    return (
        <div className="bg-gray-300 w-full p-3 text-black">
            {/* Render todos if there are any, otherwise render the appropriate empty state component */}
            {filteredTodos.length > 0 ? (
                filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            ) : (
                renderEmptyState()
            )}
        </div>
    );
}

export default TodoList;