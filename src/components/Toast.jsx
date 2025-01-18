import {useState, useEffect, useRef} from 'react';
import useGlobal from "../core/discordStore.js";


const Toast = () => {
    const [toast, setToast] = useState({visible: false, message: ''});
    const messages = useGlobal((state) => state.messages);
    const initialMessages = useRef(messages);
    const showToast = (message) => {
        setToast({visible: true, message});
        setTimeout(() => {
            setToast({visible: false, message: ''});
        }, 3000);
    };

    useEffect(() => {
        console.log("Current messages state:", messages);
        console.log("Initial messages state:", initialMessages.current);
        if (initialMessages.current !== messages) {
            showToast('New message arrived.');
        }
        
        
    }, [messages]);

    return (
        <div>
            {toast.visible && (<div class="toast">
                <div class="alert alert-info">
                    <span>New message arrived.</span>
                </div>
            </div>)}
        </div>
    );
}

export default Toast