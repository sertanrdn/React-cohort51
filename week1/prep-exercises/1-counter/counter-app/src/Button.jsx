import React from "react";

const Button = ({ setCount }) => {
    return <button onClick={() => setCount((prevCount) => prevCount + 1)}>Add 1!</button>;
}

export default Button;