import React from 'react';

type HeaderTitleProps = {
    title?: string,
    seeMore?: false | true,
    gitHubLink?: string
}

export function HeaderTitle(props: HeaderTitleProps){
    return(
        <div className="header-title">
            <h1>{props.title}</h1>
            {props.seeMore ? <a href={props.gitHubLink} target="_blank" rel="noreferrer"> Veja Mais</a> : false}
        </div>
    )
}