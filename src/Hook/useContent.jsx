import { useEffect, useState } from "react";

export const useContent = () => {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    return { text, setText, tasks, setTasks }
}

