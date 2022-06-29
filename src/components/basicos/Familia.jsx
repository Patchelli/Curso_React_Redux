// import React from "react";
import { React, cloneElement, Children } from "react"
// import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        // <div>
        //     <FamiliaMembro nome="Patrick" sobrenome={props.sobrenome} />
        //     <FamiliaMembro nome="Veronica" {...props} />
        //     <FamiliaMembro nome="Gabriel " sobrenome="Arrombado" />
        // </div>

        <div>
            {/* {cloneElement(props.children, { ...props })} */}
            {props.children.map((child, i) => {
                return cloneElement(child, { key: i })
            })}


        </div>

    )
}