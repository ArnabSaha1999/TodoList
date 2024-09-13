import image from '../assets/emptyTodos.jpg'

const EmptyTodo = () => {
    return (
        <div className="w-full text-center flex flex-col justify-center items-center">
            {/* Display the image indicating no todos available */}
            <img
                className='w-1/2 rounded-full'
                src={image} alt="" />
            {/* Display a message prompting the user to add their first todo */}
            <h2 className='mt-5 text-3xl'>No tasks available. Add your first Todo!</h2>
        </div>
    );
}

export default EmptyTodo;