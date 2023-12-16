import React, { useRef } from "react";

function Result({ setPage }) {
    const imageRef = useRef();

    const handleClick = (event) => {
        const imageWidth = imageRef.current.width;
        const imageHeight = imageRef.current.height;

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        if (y >= imageHeight * 0.786 && y <= imageHeight * 0.846 && x >= imageWidth * 0.387 && x <= imageWidth * 0.639) {
            window.open("https://comics.beanfun.com/130", "_blank");
        }

        if (y >= imageHeight * 0.878 && y <= imageHeight * 0.94 && x >= imageWidth * 0.387 && x <= imageWidth * 0.639) {
            window.open("https://comics.beanfun.com/86", "_blank");
        }

        if (y >= imageHeight * 0.845 && y <= imageHeight * 0.891 && x >= imageWidth * 0.765 && x <= imageWidth * 0.998) {
            setPage("chatTopic")
        }
    }

    return (
        <div className="App">
            <img
                src="result.jpg"
                ref={imageRef}
                alt=""
                className="bg"
                onClick={handleClick}
            />
        </div>
    )
}

export default Result;