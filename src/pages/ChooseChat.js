import React, { useEffect, useRef, useState } from "react";

function ChatBlock({ img, position }) {

    return (
        <img
            src={img}
            alt=""
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: position.width,
                height: position.height,
                zIndex: 0,
                borderRadius: 10,
                border: 'none',
            }}
        />
    );
}

function ChooseChat({ setPage, setChat }) {
    const imageRef = useRef();
    const [isNoticed, setIsNoticed] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0, offset: { x: 0, y: 0 } });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsNoticed(true);

        }, 3000);

        window.addEventListener("resize", handleWindowResize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleClick = (title, head) => {
        setPage('chating');
        setChat({title, head});
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
                src="chooseChat.jpg"
                ref={imageRef}
                alt=""
                className="bg"
                onLoad={handleImageLoad}
            />
            {isNoticed && (
                <>
                    <ChatBlock
                        img={"chatblock1-noticed.jpg"}
                        position={{
                            x: 0.103 * imageSize.width + imageSize.offset.x,
                            y: 0.092 * imageSize.height + imageSize.offset.y,
                            width: 0.804 * imageSize.width,
                            height: 0.130 * imageSize.height,
                        }}
                    />
                    <div className="img-button-container">
                        <img
                            src="chatblock1-confirmButton.jpg"
                            onClick={() => handleClick("今天我生日", "head1.jpg")}
                            style={{
                                position: 'absolute',
                                top: 0.144 * imageSize.height + imageSize.offset.y,
                                left: 0.694 * imageSize.width + imageSize.offset.x,
                                width: 0.13 * imageSize.width,
                                height: 0.04 * imageSize.height,
                                borderRadius: 10,
                                border: 'none',
                            }}
                            alt=""
                            className="img-button"
                        />

                    </div>

                    <div style={{
                        position: 'absolute',
                        top: 0.219 * imageSize.height + imageSize.offset.y,
                        left: 0.138 * imageSize.width + imageSize.offset.x,
                        width: 0.725 * imageSize.width,
                        height: 0.004 * imageSize.height,
                    }}>
                        <div className={"notice-bar"}
                            style={{
                                width: 0,
                                height: 0.004 * imageSize.height,
                                backgroundColor: '#933C5E',
                                borderRadius: 2,
                            }}
                        ></div>
                    </div>
                </>
            )}
        </div>
    )
}




export default ChooseChat;