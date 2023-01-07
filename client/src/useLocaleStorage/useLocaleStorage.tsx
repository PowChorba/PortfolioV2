import { useState } from "react";

export function useLocalStorage (key:any, initialValue:any) {
    const [storedValue, setStoredValue] = useState(() =>{
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value:any) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}