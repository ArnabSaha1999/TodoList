import image from '../assets/emptyPendingTodos.jpg';

const EmptyPendingTodo = () => {
    return (
        <div className="w-full text-center flex flex-col justify-center items-center">
            {/* Display the image indicating no pending todos */}
            <img
                className='w-1/2 rounded-full'
                src={image} alt="" />
            {/* Display a message indicating all pending tasks are completed */}
            <h2 className='my-5 text-3xl'>Great job! You've completed all pending tasks!</h2>
        </div>
    );
}

export default EmptyPendingTodo;