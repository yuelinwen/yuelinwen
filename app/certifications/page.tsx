import React from 'react';
import { prefix } from '@/util/prefix';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Certifications = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">CompTIA Network+</h3>
                <ul className="flex flex-col gap-1">
                    <li className='flex flex-row'>
                        <div className='w-full sm:w-1/2'>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={`${prefix}/image/comptia.png`} fill sizes="(max-width: 640px) 100vw, 50vw" alt="CompTIA Network+ certificate" className="rounded-md object-contain" />
                            </AspectRatio>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Certifications;
