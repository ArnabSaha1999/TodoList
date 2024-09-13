import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

const AppTitleBar = () => {
    // Access theme mode and toggle function from the ThemeContext
    const { themeMode, toggleTheme } = useTheme();
    return (
        <div
            className="flex flex-row flex-wrap justify-between items-center text-4xl pb-10">
            {/* Main title of the application */}
            <h1 className="">Todo List</h1>
            {/* Toggle theme icon based on the current theme mode */}
            {themeMode === "light" ? (
                <MdDarkMode onClick={toggleTheme} />
            ) : (
                <FaSun onClick={toggleTheme} />
            )}
        </div>
    );
}

export default AppTitleBar;