import React, { useState } from "react";
import Color from "./Color";

const BackgroundColorChanger = () => {
    const currColors = ["red", "blue", "black", "white", "orange"];
    const [colors, setColors] = useState(currColors);

    return (
        <>
            <h1>Background color changer ( TODO )</h1>
            <article className="colorChanger">
                <h2>Select one of the below colos to see the magic happen </h2>
                <section className="colors">
                    {colors &&
                        colors.map((color, key) => (
                            <Color color={color} key={key} />
                        ))}
                </section>
            </article>
        </>
    );
};

export default BackgroundColorChanger;
