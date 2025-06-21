import React, {createContext, useCallback, useContext, useState} from 'react';

const MessageContext = createContext();

export const MessageProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const TIMEOUT = 3000; // 3 seconds

    const addMessage = useCallback((text, type = 'info') => {
        const id = Date.now(); // Simple unique ID
        const newMessage = {id, text, type};
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        setTimeout(() => {
            setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
        }, TIMEOUT);
    }, []);

    const removeMessage = useCallback((id) => {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    }, []);

    return (
        <MessageContext.Provider value={{addMessage, removeMessage}}>
            {children}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px'
                }}
            >
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className="message-enter"
                        style={{
                            padding: '10px 20px',
                            margin: '10px 0',
                            borderRadius: '5px',
                            color: 'white',
                            backgroundColor:
                                msg.type === 'success'
                                    ? '##1E3A89'
                                    : msg.type === 'error'
                                        ? '#f44336'
                                        : msg.type === 'warning'
                                            ? '#ff9800'
                                            : '#1E3A89',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            cursor: 'pointer',
                        }}
                        onClick={() => removeMessage(msg.id)}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
        </MessageContext.Provider>
    );
};

export const useMessage = () => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMessage must be used within a MessageProvider');
    }
    return context;
};
