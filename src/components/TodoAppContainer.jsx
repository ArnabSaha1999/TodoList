import AppTitleBar from "./AppTitleBar";
import TodoInput from './TodoInput'
import TodoFilter from './TodoFilter'
import TodoList from './TodoList'

const TodoAppContainer = () => {
    return (
        <div
            className="w-3/5 mx-auto xl:w-3/4 lg:w-4/5 md:w-11/12 py-10"
            style={{ minWidth: "350px" }} >
            {/* Title Bar of the Todo Application */}
            <AppTitleBar />

            {/* Container for Todo Input and Filter */}
            <div className="flex flex-wrap flex-row justify-between rounded-xl text-black w-full pb-10">
                {/* Input field for adding new todos */}
                <TodoInput />
                {/* Filter dropdown to filter todos based on their status */}
                <TodoFilter />
            </div>
            
            {/* List of todos based on current filter */}
            <TodoList />
        </div>
    );
}

export default TodoAppContainer;