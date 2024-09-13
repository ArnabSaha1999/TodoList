import { TodoProvider } from './contexts/TodoContext';
import { ThemeProvider } from './contexts/ThemeContext';
import TodoAppContainer from './components/TodoAppContainer';

const App = () => {

  return (

    <TodoProvider> {/* Provides Todo context to the components */}
      <ThemeProvider> {/* Provides Theme context to the components */}
        {/* Main app container with background and text color based on theme */}
        <div className='bg-white w-screen min-h-screen h-full dark:bg-gray-900 text-black dark:text-white'>
          <TodoAppContainer /> {/* Main component of the todo application */}
        </div>
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App
