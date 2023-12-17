import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TextInput({ coordinate, size }) {
    return (
        <input
            type="text"
            placeholder="請輸入聊天主題"
            style={{
                position: 'absolute',
                top: coordinate.y,
                left: coordinate.x,
                width: size.width,
                height: size.height,
                zIndex: 0,
                borderRadius: 10,
                borderColor: 'transparent',
                textIndent: 15,
            }}
            onMouseOver={(e) => {
                e.target.style.border = '1px solid #ccc';
            }}
            onMouseOut={(e) => {
                e.target.style.border = '1px solid transparent'; 
            }}
            
        />
    )
}

function ChatTopic({ setPage }) {
    const imageRef = useRef();
    const [imageSize, setImageSize] = useState({ width: 0, height: 0, offset: { x: 0, y: 0 }});
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleClick = (event) => {
        const imageWidth = imageRef.current.width;
        const imageHeight = imageRef.current.height;

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        if (y >= imageHeight * 0.514 && y <= imageHeight * 0.578 && x >= imageWidth * 0.322 && x <= imageWidth * 0.672) {
            setPage("chooseChat");
        }

        if (y >= imageHeight * 0.855) {
            navigate("special");
        }
    }

    const handleWindowResize = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const offset = {
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY
            };
            setImageSize({ width: imageRef.current.width, height: imageRef.current.height, offset });

        }
    };

    const handleImageLoad = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const offset = {
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY
            };
            setImageSize({ width: imageRef.current.width, height: imageRef.current.height, offset });
        }
    };

    return (
        <div>
            <img
                src="chatTopicPage.jpg"
                ref={imageRef}
                alt=""
                className="bg"
                onClick={handleClick}
                onLoad={handleImageLoad}
            />
            <TextInput
                coordinate={{ x: imageSize.width * 0.11 + imageSize.offset.x, y: imageSize.height * 0.376 + imageSize.offset.y }}
                size={{ width: imageSize.width * 0.777, height: imageSize.height * 0.079 }}
            />
        </div>
    )
}

export default ChatTopic;