import { useRef } from "react";

function MindTest({ setPage }) {
    const imageRef = useRef();

    const handleClick = (event) => {
        const imageWidth = imageRef.current.width;
        const imageHeight = imageRef.current.height;

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        if (y >= imageHeight * 0.467 && y <= imageHeight * 0.577 && x >= imageWidth * 0.273 && x <= imageWidth * 0.714) {
            setPage("result")
        }

        if (y >= imageHeight * 0.592 && y <= imageHeight * 0.707 && x >= imageWidth * 0.273 && x <= imageWidth * 0.714) {
            setPage("result")
        }

        if (y >= imageHeight * 0.725 && y <= imageHeight * 0.834 && x >= imageWidth * 0.273 && x <= imageWidth * 0.714) {
            setPage("result")
        }

        if (y >= imageHeight * 0.852 && y <= imageHeight * 0.962 && x >= imageWidth * 0.273 && x <= imageWidth * 0.714) {
            setPage("result")
        }
    }

    return (
        <div className="App">
            <img
                src="mind_test_page.jpg"
                ref={imageRef}
                alt=""
                className="bg"
                onClick={handleClick}
            />
        </div>
    )
}

export default MindTest;