import React from 'react';
import Header from '../Header/index';
import Animation from '../Animation';

export default function Home() {
    return (
        <>
            <div className="w-full h-screen flex flex-col overflow-y-auto">
                <Header />
                <div className="w-full h-[50rem] md:h-[35rem] flex justify-start items-center flex-col bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                    <Animation />
                </div>
            </div>
        </>
    );
}
