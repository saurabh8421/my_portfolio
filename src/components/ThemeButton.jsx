import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Ensure you have these icons imported
import useTheme from '../context/theme';

function ThemeButton() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = () => {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <button
            onClick={onChangeBtn}
            className={`flex items-center justify-center 
                transition duration-300 ease-in-out 
                shadow-lg m-1
                text-gray-800'} 
                hover:scale-105 hover:shadow-xl`}
            aria-label="Toggle theme"
        >
            {themeMode === 'dark' ? (
                <FaSun className="text-white text-lg" />
            ) : (
                <FaMoon className="text-gray-800 text-lg" />
            )}
        </button>
    );
}

export default ThemeButton;
