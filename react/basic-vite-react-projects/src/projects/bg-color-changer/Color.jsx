function Color({ color }) {
    const styles = {
        display: "inline-block",
        margin: "10px",
        border: "1px solid round",
        padding: "0px 20px",
        backgroundColor: color,
        color: "",
    };

    return <button style={styles}>{color}</button>;
}

export default Color;
