import React from 'react';
import "./assets/page-title.scss"

interface Props {
    readonly title: string
}

export function PageTitle({ title }: Props) {
    return (
        <h1 className="page-title">
            <span>{title}</span>
        </h1>
    );
}

