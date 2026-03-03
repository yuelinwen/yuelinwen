import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';
import { prefix } from '@/util/prefix';

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-2 w-full lg:fixed lg:top-[64px] lg:left-0 lg:w-1/4 lg:h-[calc(100vh-64px)] lg:overflow-y-auto lg:z-40 bg-background border-b lg:border-b-0 p-8 lg:text-left text-center">
                <div className="flex justify-center">
                    <Avatar className="h-50 w-50">
                        <AvatarImage
                            src={`${prefix}/image/yuelin-avatar.png`}
                            className="object-cover"
                        />
                        <AvatarFallback>YW</AvatarFallback>
                    </Avatar>
                </div>

            <div className="text-lg font-semibold mb-4 lg:pl-28">Yuelin Wen</div>
            <div className='lg:pl-28'>
                <p>he/him</p>
                Concordia University | Programmer | Computer | Network | IT
            </div>

            <ul className="space-y-2 text-sm lg:pl-28">
                <li>📍 Montreal, QC, Canada</li>
                <li>🏫 Concordia University</li>
                <li>📧 Email: <a href="mailto:wenyuelinca@gmail.com">wenyuelinca@gmail.com</a></li>
                <li>🔗 GitHub: <a href="https://github.com/yuelinwen">github.com/yuelinwen</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
