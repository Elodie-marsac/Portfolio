import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxBubble = () => {
    return (
        <Parallax speed={-10}>
            <div className="parallax-bubble"></div>
        </Parallax>
    );
};

export default ParallaxBubble;
