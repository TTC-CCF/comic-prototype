import './App.css';
import React, { useState } from 'react';
import MindTest from './pages/MindTest';
import Result from './pages/Result';
import ChatTopic from './pages/ChatTopic';
import ChooseChat from './pages/ChooseChat';
import Chating from './pages/Chating';

function App() {
    const [page, setPage] = useState("mind_test");
    const [chat, setChat] = useState({title: '', head: ''});

    return (
        <div className="App">
            {page === "mind_test" && <MindTest setPage={setPage} />}
            {page === "result" && <Result setPage={setPage} />}
            {page === "chatTopic" && <ChatTopic setPage={setPage} />}
            {page === "chooseChat" && <ChooseChat setPage={setPage} setChat={setChat}/>}
            {page === "chating" && <Chating chat={chat} setPage={setPage}/>}
        </div>
    );
}

export default App;
