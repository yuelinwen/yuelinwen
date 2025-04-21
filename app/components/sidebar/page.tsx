import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';
import { prefix } from '@/util/prefix';

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-2 w-full md:fixed md:top-[64px] md:left-0 md:w-1/4 md:h-[calc(100vh-64px)] md:overflow-y-auto md:z-40 bg-background border-b md:border-b-0 p-8 md:text-left text-center">
            <Avatar className='items-center w-full h-auto'>
                <AvatarImage src={`${prefix}/image/yuelin-avatar.png`} />
                <AvatarFallback>Yuelin Wen</AvatarFallback>
            </Avatar>

            <div className="text-lg font-semibold mb-4 md:pl-28">Yuelin Wen</div>
            <div className='md:pl-28'>
                <p>he/him</p>
                Software engineering | Network | IT | Computer | McMaster university Alumni
            </div>

            <ul className="space-y-2 text-sm md:pl-28">
                <li>📍 Toronto, ON, Canada</li>
                <li>🏫 McMaster University</li>
                <li>📧 Email: <a href="mailto:wenyuelinca@gmail.com">wenyuelinca@gmail.com</a></li>
                <li>🔗 GitHub: <a href="https://github.com/yuelinwen">github.com/yuelinwen</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
