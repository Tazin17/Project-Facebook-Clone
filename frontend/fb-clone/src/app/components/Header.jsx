"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

// import { Search } from 'lucide-react'
import { Search, Home, Video, Users, Menu, Bell, MessageCircle, LogOut, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";
import Image from 'next/image';
// import React from 'react'

const Header = () => {
  const [isSearchOpen,setIsSearchOpen] = useState(false)
  const {theme,setTheme} = useTheme()
  return (
    <header className='bg-white dark:bg-[rgb(36,37,38)] for text-foreground shadow-md h-16 fixed top-0 left-0 right-0 z-50 p-2'>
        <div className='mx-auto flex justify-between items-center p-2'>
            <div className='flex items-center gap-2 md:gap-4'>
                <Image
                  src='/Images/Facebook-Logo.png'
                  width={68}
                  height={38}
                  alt='facebook-logo'
                />
                <div className='relative '>
                  <form>
                    <div className='relative'>
                        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                  <Input
                    className="pl-8 w-40 md:w-64 h-10 bg-gray-100 dark:bg-[rgb(58,59,60)] rounded-full"
                    placeholder="search facebook.."
                 />
                    </div>
                    {isSearchOpen && (
                      <div className='absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg mt-1 z-50'>
                        <div className='p-2'>
                          <div className='flex items-center space-x-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer '>
                          <Search className='absolute text-sm text-gray-400'/>
                          <div className='flex items-center gap-2'>
                            <Avatar>
                              <AvatarImage/>
                              <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <span>Nusrat Tazin</span>
                          </div>
                          </div>

                        </div>
                      </div>
                    )

                    }
                  </form>

                </div>
            </div>
            <nav className='hidden md:flex justify-around w-[40%] max-w-md'>
                    {[
                      {icon: Home, path: "/", name:"home"},
                      {icon: Video, path: "/video-feed", name:"video"},
                      {icon: Users, path: "/friends-list", name:"friends"},
                    ].map(({icon: Icon,path,name}) =>(
                      <Button
                             key={name}
                      variant="ghost"
                      size="icon"
                      className={`relative text-gray-600 dark:texy-gray-400 hover:text-blue-600 hover:bg-transparent`}
                      >
                        <Icon/>
                      </Button>
               
                    ))}
            </nav>
            {/* user profile menu */}
            <div className="flex space-x-2 md:space-x-4 items-center">
              {/* <Button variant="ghost" size="icon" className="md:hidden text-gray-600"> */}
              <Button variant="ghost" size="icon" className="text-gray-600  hover:text-blue-600 hover:bg-transparent">
                  <Menu />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:block text-gray-600 pl-2">
                  <Bell />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:block text-gray-600 pl-2">
                  <MessageCircle />
              </Button>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar>
                              <AvatarImage/>
                              <AvatarFallback className="dark:bg-gray-400">T</AvatarFallback>
                            </Avatar>
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 z-50" align="end">
                      <DropdownMenuLabel className="font-normal"> 
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage/>
                              <AvatarFallback className="dark:bg-gray-400">T</AvatarFallback>
                            </Avatar>
                            <div className="">
                              <p className="text-sm font-medium leadning-none">Nusrat Tazin</p>
                              <p className="text-xs mt-2 leadning-none">nusrattazin71111@gmail.com</p>
                            </div>
                        </div>

                      </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator/>
                      <DropdownMenuItem className="cursor-pointer">
                        <Users/><span className="ml-2">Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <MessageCircle/><span className="ml-2">Messages</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator/>
                      <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
                          {theme === 'light' ?(
                            <>
                             <Moon className="mr-2"/>
                             <span>Dark Mode</span>
                            </>
                          ):(
                            <>
                            <Sun className="mr-2"/>
                            <span>Light Mode</span>
                           </>
                          )}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <LogOut/><span className="ml-2">LogOut</span>
                      </DropdownMenuItem>
                  </DropdownMenuContent>
            
              </DropdownMenu>
            </div>
        </div>

    </header>
  )
}

export default Header