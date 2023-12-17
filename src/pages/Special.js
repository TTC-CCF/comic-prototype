import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

function Intro({ setIntro, position }) {
    return (
        <div
            className="intro-panel"
            style={{
                left: position,
            }}
        >
            <div
                style={{
                    alignSelf: "flex-end",
                    margin: 10,
                }}
                onClick={() => setIntro(false)}
            >
                <FaTimes />

            </div>

            <p className="intro-title animated-text">《須知》</p>

            <p className="intro-text animated-text">閱讀月刊作品點封面文字</p>
            <p className="intro-text animated-text">閱讀驕傲月特企請下滑</p>
        </div>
    )
}

export default function Special() {
    const imageRef = useRef();
    const [intro, setIntro] = useState(true);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    const handleWindowResize = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = rect.left + rect.width * 0.45 / 2 + window.scrollX;
            setPosition(x);
        }
    }

    const handleOnClick = (event) => {
        const imageWidth = imageRef.current.width;
        const imageHeight = imageRef.current.height;

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        if (y >= imageHeight * 0.783 && y <= imageHeight * 0.859 && x >= imageWidth * 0.426 && x <= imageWidth * 0.997) {
            window.open("https://comics.beanfun.com/130/005", "_blank");
        }

        if (y >= imageHeight * 0.379 && y <= imageHeight * 0.457 && x >= imageWidth * 0.063 && x <= imageWidth * 0.464) {
            window.open("https://comics.beanfun.com/42/004", "_blank");
        }

        if (y >= imageHeight * 0.302 && y <= imageHeight * 0.388 && x >= imageWidth * 0.537 && x <= imageWidth * 0.881) {
            window.open("https://comics.beanfun.com/124/005", "_blank");
        }

    }

    const handleImageLoad = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = rect.left + rect.width * 0.45 / 2 + window.scrollX;
            setPosition(x);
        }
    }

    return (
        <div className="App">
            <div style={{ maxWidth: 600 }}>
                {intro && <Intro setIntro={setIntro} position={position} />}
                <img
                    src="special_index1.jpg"
                    className="bg-special"
                    ref={imageRef}
                    alt=""
                    onClick={handleOnClick}
                    onLoad={handleImageLoad}
                />
                <img
                    src="special_index2.jpg"
                    className="bg-special"
                    alt=""
                />
                <img
                    src="special_index3.jpg"
                    className="bg-special"
                    alt=""
                />
            </div>

        </div>
    )
}