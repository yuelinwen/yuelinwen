import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';
import { prefix } from '@/util/prefix';

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-4 w-full md:fixed md:top-[64px] md:left-0 md:w-1/4 md:h-[calc(100vh-64px)] md:overflow-y-auto md:z-40 bg-background border-b md:border-b-0 p-8 text-center md:text-left">

            <div className="flex justify-center md:justify-start md:pl-28">
                <Avatar className="h-60 w-60 border"> {/* Fixed size: 128px */}
                    <AvatarImage
                        src={`${prefix}/image/yuelin-avatar.png`}
                        className="object-cover"
                    />
                    <AvatarFallback>YW</AvatarFallback>
                </Avatar>
            </div>

            <div className="md:pl-28">
                <h1 className="text-xl font-bold">Yuelin Wen</h1>
                <p className="text-muted-foreground text-sm">he/him</p>
            </div>

            <div className='md:pl-28 space-y-4'>
                <p className="text-sm leading-relaxed">
                    Concordia University | Programmer | Computer | Network | IT
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span>📍</span> Montreal, QC, Canada
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span>🏫</span> Concordia University
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span>📧</span> <a href="mailto:wenyuelinca@gmail.com" className="hover:underline text-primary">wenyuelinca@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span>🔗</span> <a href="https://github.com/yuelinwen" target="_blank" className="hover:underline text-primary">github.com/yuelinwen</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
