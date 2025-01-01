import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator} from '@/components/ui/dropdown-menu';

import { Search, Home, User, Video, Users, Menu, Bell, MessageCircle, LogOut, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
const LeftSideBar = () => {
    // console.log('LeftSideBar rendered');
  return (
    <aside className={'fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0'}>
      <div className='flex flex-col h-full overflow-y-auto'>
          {/* navigation menu */}
          <nav className='space=y-4 flex-grow'>
            <div className='flex items-center space-x-2 cursor-pointer'>
             <Avatar className="h-10 w-10">
               <AvatarImage/>
               <AvatarFallback className="bg-gray-200">T</AvatarFallback>
              </Avatar>
               <span>Nusrat Tazin</span>
       
            </div>

                <Button
                 variant="ghost"
                 className="full justify-start"

                >
                  <Home className='mr-4'/>Home
                </Button>
                <Button
                 variant="ghost"
                 className="full justify-start"

                >
                  <Users className='mr-4'/>Friends
                </Button>
                <Button
                 variant="ghost"
                 className="full justify-start"

                >
                  <Video className='mr-4'/>Video
                </Button>
                <Button
                 variant="ghost"
                 className="full justify-start"

                >
                  <MessageCircle className='mr-4'/>Messages
                </Button>
                <Button
                 variant="ghost"
                 className="full justify-start"

                >
                  <User className='mr-4'/>Profile
                </Button>
            
                <Button
                 variant="ghost"
                 className="full justify-start"

                >
                  <Bell className='mr-4'/>Notification
                </Button>
 
          </nav>
      </div>
    </aside>
    // <div className="text-black">LeftSideBar</div>

  )
}

export default LeftSideBar