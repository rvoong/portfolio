import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [ 
            `Hi, I'm ${pageInfo?.name}`
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img 
                className="relative rounded-full h-32 w-32 mx-auto rounded object-cover"
                src= {urlFor(pageInfo?.heroImage).url()} 
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    {pageInfo?.role}
                </h2>

                <h1>
                    <span className="text-5xl lg:text6xl font-semibold px-10 ">{text}</span> 
                    <Cursor cursorColor = "#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                    <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                    <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skillList">
                    <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}