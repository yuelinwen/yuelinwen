import React from 'react';
import { prefix } from '@/util/prefix';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Certifications = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Comptia Network+ </h3>
                <ul className="gap-1">
                    <li className='flex flex-row'>
                        <AspectRatio ratio={16 / 9}>
                            <Image src={`${prefix}/image/comptia.png`} width={480} height={1} alt="CloudVaut home page" className="rounded-md object-cover" />
                        </AspectRatio>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Certifications;
