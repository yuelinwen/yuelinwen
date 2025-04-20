import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">My first blog </h3>
                <p className="italic">personal blog</p>
                <p>This is a personal website that I built myself. I plan to use it as a demonstration of my work, and also as a space to share blogs about my experiences and interests. It's a work in progress—more content coming soon!</p>
            </div>
        </div>
    );
}

export default Page;
