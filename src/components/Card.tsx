import { ReactNode } from "react";

type CardProps = {
    title?: string,
    children?: ReactNode
}
export function Card(props : CardProps){
    return (
        <div className='card'>
            <h1>
                {props.title}
            </h1>
            <div className='card-children'>
                {props.children}
            </div>
            
        </div>
    );
};