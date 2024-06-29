import { memo } from "react";

const Button = ({ onClick, children }) => {
    console.log('Button rendered');
    return <button onClick={onClick}>{children}</button>;
};

export default memo(Button);