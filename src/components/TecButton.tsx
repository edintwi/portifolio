import React from 'react';

type TecButtonProps = {
    title: string
}

export function TecButton(props : TecButtonProps) {
    return(
        <div className='TecButton'>
            <text>
                {props.title}
            </text>
        </div>
    );
}