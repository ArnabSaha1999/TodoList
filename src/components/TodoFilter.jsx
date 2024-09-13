import { useTodo } from "../contexts/TodoContext";

const TodoFilter = () => {
    const {setFilter} = useTodo();

    // Update the filter value based on user selection
    const updateFilter = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className="w-1/2 xl:w-2/5 lg:w-1/4 md:w-1/5 sm:w-full">
            {/* Dropdown for selecting the filter status */}
            <select name="status" id="todo-status"
                className="h-12 border-2 border-purple-500 outline-none px-2 py-2 w-full"
                onChange={(e) => updateFilter(e)} >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );
}

export default TodoFilter;