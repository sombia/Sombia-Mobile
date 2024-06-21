import { useState } from 'react';
import '../styles/components/Navigation.scss';
import { FaHome, FaPlus } from 'react-icons/fa';
import { BiConversation } from 'react-icons/bi';

interface NavigationProps {
    callback: (arg0: string) => void;
    active: string;
}

function Navigation({ callback, active }: NavigationProps) {
    return (
        <div className="navigation">
            <ul>
                <li className={`empty ${active == "empty" ? " active" : ""}`}>
                    <a href="#">
                        <span className="icon"><i></i></span>
                        <span className="text"></span>
                    </a>
                </li>
                <li className={`create ${active == "create" ? " active" : ""}`} onClick={() => callback("create")}>
                    <a href="#">
                        <span className="icon"><FaPlus /></span>
                        <span className="text">Upload</span>
                    </a>
                </li>
                <li className={`start ${active == "start" ? " active" : ""}`} onClick={() => callback("start")}>
                    <a href="#">
                        <span className="icon"><FaHome /></span>
                        <span className="text">Start</span>
                    </a>
                </li>
                <li className={`chat ${active == "chat" ? " active" : ""}`} onClick={() => callback("chat")}>
                    <a href="#">
                        <span className="icon"><BiConversation /></span>
                        <span className="text">Chat</span>
                    </a>
                </li>
                <li className={`empty ${active == "empty" ? " active" : ""}`}>
                    <a href="#">
                        <span className="icon"><i></i></span>
                        <span className="text"></span>
                    </a>
                </li>
                <div className="bubble"></div>
            </ul>
        </div>
    )
}

export default Navigation;