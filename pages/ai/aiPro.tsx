import Link from "next/link";
import React, { useState, useEffect } from 'react';

interface Message {
    text: string;
    from: string;
}

const AIPage = () => {
    const [inputText, setInputText] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
    const [selectedYear, setSelectedYear] = useState<string>('Year 1');

    useEffect(() => {
        setMessages([{ text: `Welcome to Learning+ AI Chat! Enter your first question about ${selectedSubject} for ${selectedYear}.`, from: 'ai' }]);
    }, [selectedSubject, selectedYear]);

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { text: inputText, from: 'user' }]);
            setTimeout(() => {
                const response = generateResponse(inputText);
                setMessages(messages => [...messages, { text: response, from: 'ai' }]);
            }, 500);
            setInputText('');
        }
    };

    const generateResponse = (inputText: string): string => {
        if (inputText.toLowerCase().includes("pythagorean theorem")) {
            return "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.";
        } else if (inputText.toLowerCase().includes("covalent bond")) {
            return "A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.";
        } else if (inputText.toLowerCase().includes("vietnam war")) {
            return "Having rebuilt their forces and upgraded their logistics system, North Vietnamese forces triggered a major offensive in the Central Highlands in March 1975. On April 30, 1975, NVA tanks rolled through the gate of the Presidential Palace in Saigon, effectively ending the war.";
        }
        return "This is a simulated response.";
    };

    const selectSubject = (subject: string) => {
        if (subject !== selectedSubject) {
            setMessages([{ text: `You have selected ${subject} for ${selectedYear}. Enter your questions!`, from: 'ai' }]);
            setSelectedSubject(subject);
        }
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
        setMessages([{ text: `You have changed to ${event.target.value}. Please ask your questions about ${selectedSubject}.`, from: 'ai' }]);
    };

    const subjects = [
        'Mathematics', 'English', 'Science (Basic)', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology', 'Programming', 'Arts'
    ];

    const years = [
        'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6',
        'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Kindergarten'
    ];

    return (
        <div className="ai-page">
            <div className="subjects-list">
                <nav className="px-12 py-5">
                    <Link href="">
                        <img src="/4.png" alt="Logo" className="h-12 cursor-pointer" />
                    </Link>
                    <nav className="header-nav">
                        <Link href="/home">SIGN OUT</Link>
                    </nav>
                    <nav className="header-nav">
                        <Link href="/course">MANAGE SUBSCRIPTION</Link>
                    </nav>
                </nav>
                <ul>
                    {subjects.map(subject => (
                        <li key={subject} onClick={() => selectSubject(subject)} className={subject === selectedSubject ? 'selected' : ''}>
                            {subject}
                        </li>
                    ))}
                </ul>
                <select value={selectedYear} onChange={handleYearChange}>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="chat-container">
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.from}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            <style jsx>{`
                .ai-page {
                    display: flex;
                    height: 100vh;
                    background-color: #FF287C;
                }
                .subjects-list {
                    flex: 1;
                    background: #FF287C;
                    color: #FFF;
                    padding: 20px;
                }
                .subjects-list ul {
                    list-style: none;
                    padding: 0;
                }
                .subjects-list ul li {
                    margin-bottom: 10px;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                }
                .subjects-list ul li.selected {
                    background-color: #FFF;
                    color: #FF287C;
                    padding: 10px;
                    border-radius: 5px;
                }
                .subjects-list select {
                    padding: 8px;
                    border-radius: 4px;
                    background: #FFFFFF;
                    color: #333;
                }
                .chat-container {
                    flex: 3;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                }
                .chat-messages {
                    flex: 1;
                    overflow-y: auto;
                    background: #FFF;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .message {
                    margin-bottom: 10px;
                    padding: 10px;
                    border-radius: 4px;
                    color: #FFF;
                    background-color: #3498DB;
                }
                .message.ai {
                    background-color: #9B59B6;
                    align-self: flex-start;
                }
                .message.user {
                    align-self: flex-end;
                    background-color: #2ECC71;
                }
                .chat-input {
                    display: flex;
                }
                .chat-input input {
                    flex: 1;
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid #ccc;
                }
                .chat-input button {
                    padding: 10px 20px;
                    background-color: #3498DB;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    margin-left: 10px;
                }
                .chat-input button:hover {
                    background-color: #2980B9;
                }
            `}</style>
        </div>
    );
};

export default AIPage;
