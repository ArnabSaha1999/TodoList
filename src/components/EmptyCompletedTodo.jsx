import image from '../assets/emptyCompletedTodos.jpg'

const EmptyCompletedTodo = () => {
    return (
        <div className="w-full text-center flex flex-col justify-center items-center">
            {/* Display the image indicating no completed todos */}
            <img
                className='w-1/2 rounded-full'
                src={image} alt="" />
            {/* Display a message indicating there are no completed tasks yet */}
            <h2 className='mt-5 text-3xl'>No completed tasks yet. Start checking off your list!</h2>
        </div>
    );
}

export default EmptyCompletedTodo;