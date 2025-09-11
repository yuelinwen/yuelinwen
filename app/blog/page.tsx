import React from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import { prefix } from '@/util/prefix';

const Page = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">My first blog </h3>
                <p className="italic">personal blog - May,1,2025</p>
                <p>This is a personal website that I built myself. I plan to use it as a demonstration of my work, and also as a space to share blogs about my experiences and interests. It's a work in progress—more content coming soon!</p>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">First week in Montreal!</h3>
                <p className="italic">montreal exploring - Aug,10,2025</p>
                <p>This is my first week living in Montreal. Although the past week was exhausting because of moving, I have finally arrived and started exploring the city.</p>
                <p>When I got here, there happened to be a comic expo. As a huge fan of Genshin Impact, I enjoyed attending the expo. Afterward, me and my friend visited the Old Port, China town and a charming European-style street, which had a very relaxing and pleasant atmosphere.</p>
                <ul className='flex flex-row gap-1'>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/ghishen.jpg`} width={300} height={1} alt="expo-card" className="rounded-md object-cover" />
                    </li>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/mtl-oldport.jpg`} width={300} height={1} alt="mtl oldport aisle" className="rounded-md object-cover" />
                    </li>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/mtl-oldport1.jpg`} width={300} height={1} alt="city hall" className="rounded-md object-cover" />
                    </li>
                </ul>
                <ul className='flex flex-row gap-1'>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/mtl-oldport2.jpg`} width={300} height={1} alt="china town" className="rounded-md object-cover" />
                    </li>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/mtl-oldport3.jpg`} width={300} height={1} alt="expo ghishen" className="rounded-md object-cover" />
                    </li>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/comic-expo.jpg`} width={300} height={1} alt="expo ghishen" className="rounded-md object-cover" />
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Meteor shower</h3>
                <p className="italic">meteor shower - Aug,15,2025</p>
                <p>First time to have a chance to see meteor shower, full of star~</p>
                <ul className='flex flex-row gap-1'>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/star1.jpeg`} width={300} height={1} alt="meteor shower" className="rounded-md object-cover" />
                    </li>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/star2.jpeg`} width={300} height={1} alt="meteor shower" className="rounded-md object-cover" />
                    </li>
                    <li>
                        <Image src={`${prefix}/image/blog/mtl/star3.jpeg`} width={300} height={1} alt="meteor shower" className="rounded-md object-cover" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Page;
