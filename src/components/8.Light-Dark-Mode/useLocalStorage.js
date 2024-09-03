import { useEffect, useState } from "react";


export default function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
        } catch (error) {
            console.log("Error reading localStorage key", error);
            return defaultValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))   
    }, [key, value])

    return [value, setValue];
}

