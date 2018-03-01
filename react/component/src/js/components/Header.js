import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component{
    //demo1 =========================
    // render(){
    //     return (
    //         <div>
    //             <Title />
    //         </div>
    //     );
    // }

    //demo2 =========================
    render(){
        const Titles = [
            <Title key={1} />,
            <Title key={2} />,
            <Title key={3} />            
        ];
        return (
            <div>
                {Titles}
            </div>
        );
    }
}