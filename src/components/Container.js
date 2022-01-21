import React from 'react'
import { Title, Link, Meta } from 'react-head';

function Container({ children }) {
    return (
        <div className="w-screen h-screen overflow-y-hidden mx-0 md:mx-auto px-0 sm:px-6 lg:px-8">
            <Title>Animal Crossing Ambience</Title>
            {children}
        </div>
	)
}

export default Container