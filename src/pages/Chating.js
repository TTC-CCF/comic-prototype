import { useEffect, useRef, useState } from "react";

function Header({ title, setPage, head, size }) {
    return (
        <div style={{
            width: size.width,
            height: size.height * 0.1,
            backgroundColor: '#fff',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,

        }}>

            <img
                src="goback.jpg"
                alt=""
                style={{
                    maxHeight: "100%",
                }}
                onClick={() => {
                    setPage('chooseChat');
                }}
            />

            <img
                src={head}
                alt=""
                style={{
                    margin: 20,
                    maxHeight: "80%",

                }}
            />
            <div style={{
                height: "100%",
                fontSize: 30,
                color: '#946A8E',
                fontWeight: 'bolder',
                display: 'flex',
                alignItems: 'center',
            }}>
                {title}
            </div>

            <img
                src="info.jpg"
                alt=""
                style={{
                    maxHeight: "100%",
                    marginLeft: 'auto',
                    marginRight: 20,
                }}
            />
        </div>
    );
}

function ChatBox({ text, isMine }) {
    return (
        <div style={{
            backgroundColor: isMine ? '#946A8E' : '#F3F3F3',
            borderRadius: 20,
            padding: 10,
            margin: 10,
            maxWidth: '80%',
            alignSelf: isMine ? 'flex-end' : 'flex-start',
            textAlign: 'left'
        }}>
            <div style={{
                fontSize: 20,
                color: isMine ? '#fff' : '#000',
            }}>
                {text}
            </div>
        </div>
    );
}

function TextInput({ setMessages, size }) {
    const input = useRef(null);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: size.width,
            height: size.height * 0.1,
        }}>

            <input
                type="text"
                ref={input}
                style={{
                    width: window.innerWidth * 0.8,
                    height: '60%',
                    fontSize: 20,
                    borderRadius: 100,
                    border: '1px solid #ccc',
                    borderColor: '#000',
                    textIndent: 15,
                }}
            />
            <img
                src="submit.jpg"
                alt=""
                style={{
                    maxHeight: "100%",
                    marginLeft: 20,
                }}
                onClick={() => {
                    if (input.current.value === '')
                        return;

                    const textObj = { text: input.current.value, isMine: true };
                    setMessages((messages) => [...messages, textObj]);
                    input.current.value = '';

                    const picked = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
                    for (let i = 0; i < picked.length; i++) {
                        setTimeout(() => {
                            const textObj = { text: picked[i], isMine: false };
                            setMessages((messages) => [...messages, textObj]);
                        }, 1000 * (i + 1));
                    }
                }}
            />
        </div>
    );
}



function Chating({ chat, setPage }) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handleResize);

        const picked = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];

        for (let i = 0; i < picked.length; i++) {
            setTimeout(() => {
                const textObj = { text: picked[i], isMine: false };
                setMessages((messages) => [...messages, textObj]);
            }, 1000 * (i + 1));
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    return (
        <div>
            <Header title={chat.title} head={chat.head} setPage={setPage} size={size} />

            <div
                ref={chatContainerRef}
                onLoad={scrollToBottom}
                style={{
                    position: 'fixed',
                    backgroundImage: 'url("chatingBackground.jpg")',
                    backgroundSize: 'cover',
                    top: size.height * 0.1,
                    left: 0,
                    width: size.width,
                    height: size.height * 0.8,
                    overflowY: 'scroll',

                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}
                >
                    {messages.map((message, index) => (
                        <ChatBox key={index} text={message.text} isMine={message.isMine} />
                    ))}
                </div>

            </div>

            <TextInput size={size} setMessages={setMessages} />
        </div>
    )
}


const fakeMessages = [
    ["你好!", "我也是這部漫畫的愛好者😅"],
    ["我很喜歡Beanfun這個平台🥹", "他們提供的漫畫都很好看😍😍"],
    ["是喔", "我也是欸😵‍💫😵‍💫😵‍💫😵‍💫!", "我最喜歡的漫畫是《叛逆玩家》"],
    ["你知道他們最近在辦一個活動嗎?", "我覺得很有趣😂😂😂😂"],
    ["就是那個心理測驗!", "我覺得很酷欸", "你有做過嗎?😗"],
    ["我抽到的角色是「叛逆玩家」的「林慕」🤣🤣", "你呢?"],
]

export default Chating;