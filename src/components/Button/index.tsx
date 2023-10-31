import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    text: string
}
export default function Button () {
    return <button></button>
}