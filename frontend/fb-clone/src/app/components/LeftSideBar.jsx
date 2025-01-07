import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";

import {
  Search,
  Home,
  User,
  Video,
  Users,
  Menu,
  Bell,
  MessageCircle,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useSidebarStore from '@/store/sidebarStore';

const LeftSideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  // console.log('LeftSideBar rendered');
  return (
    <aside
      className={
        `fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ${
          isSidebarOpen
           ? "translate-x-0 bg-white dark:bg-[rgb(36,37,38)] shadow-lg"
             : "-translate-x-full"
            }  md:bg-transparent md:shadow-none`
      }
      // `fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ${
      //   isSidebarOpen
      //     ? "translate-x-0 bg-white dark:bg-[rgb(36,37,38)] shadow-lg "
      //     : " -translate-x-full"
      // } ${isSidebarOpen ? "md:hidden" : ""} md:bg-transparent md:shadow-none`
    >
      <div className="flex flex-col h-full overflow-y-auto">
        {/* navigation menu */}
        <nav className="space=y-4 flex-grow">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar className="h-10 w-10">
              <AvatarImage />
              <AvatarFallback className="bg-gray-200">T</AvatarFallback>
            </Avatar>
            <span>Nusrat Tazin</span>
          </div>

          <Button variant="ghost" className="full justify-start">
            <Home className="mr-4" />
            Home
          </Button>
          <Button variant="ghost" className="full justify-start">
            <Users className="mr-4" />
            Friends
          </Button>
          <Button variant="ghost" className="full justify-start">
            <Video className="mr-4" />
            Video
          </Button>
          <Button variant="ghost" className="full justify-start">
            <MessageCircle className="mr-4" />
            Messages
          </Button>
          <Button variant="ghost" className="full justify-start">
            <User className="mr-4" />
            Profile
          </Button>

          <Button variant="ghost" className="full justify-start">
            <Bell className="mr-4" />
            Notification
          </Button>
        </nav>

        {/* footer section */}
        <div className="mb-16 ">
          <separator className="my-4" />
          <div className="flex items-center space-x-2 mb-4 cursor-pointer">
            <Avatar className="h-10 w-10">
              <AvatarImage />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <span>Nusrat Tazin</span>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Privacy · Terms · Advertising ·</p>
            <p>· Meta © 2024</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSideBar




// import { Menu } from "lucide-react"; // Ensure you import the Menu icon
// import { Button } from "@/components/ui/button";
// import useSidebarStore from "@/store/sidebarStore";

// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";

// import {
//   Search,
//   Home,
//   User,
//   Video,
//   Users,
//   Menu,
//   Bell,
//   MessageCircle,
//   LogOut,
//   Moon,
//   Sun,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import useSidebarStore from '@/store/sidebarStore';
// const LeftSideBar = () => {
//   const { isSidebarOpen, toggleSidebar } = useSidebarStore();

//   return (
//     <>
//       {/* Menu Icon (only visible on smaller screens) */}
//       <div className="fixed top-4 left-4 md:hidden z-50">
//         <Button variant="ghost" onClick={toggleSidebar}>
//           <Menu className="w-6 h-6" />
//         </Button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ${
//           isSidebarOpen
//             ? "translate-x-0 bg-white dark:bg-[rgb(36,37,38)] shadow-lg"
//             : "-translate-x-full"
//         } md:bg-transparent md:shadow-none`}
//       >
//         <div className="flex flex-col h-full overflow-y-auto">
//           {/* Navigation Menu */}
//           <nav className="space-y-4 flex-grow">
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <Avatar className="h-10 w-10">
//                 <AvatarImage />
//                 <AvatarFallback className="bg-gray-200">T</AvatarFallback>
//               </Avatar>
//               <span>Nusrat Tazin</span>
//             </div>

//             <Button variant="ghost" className="w-full justify-start">
//               <Home className="mr-4" />
//               Home
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Users className="mr-4" />
//               Friends
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Video className="mr-4" />
//               Video
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <MessageCircle className="mr-4" />
//               Messages
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <User className="mr-4" />
//               Profile
//             </Button>

//             <Button variant="ghost" className="w-full justify-start">
//               <Bell className="mr-4" />
//               Notification
//             </Button>
//           </nav>

//           {/* Footer Section */}
//           <div className="mb-16">
//             <div className="my-4 border-t" />
//             <div className="flex items-center space-x-2 mb-4 cursor-pointer">
//               <Avatar className="h-10 w-10">
//                 <AvatarImage />
//                 <AvatarFallback>T</AvatarFallback>
//               </Avatar>
//               <span>Nusrat Tazin</span>
//             </div>
//             <div className="text-xs text-muted-foreground space-y-1">
//               <p>Privacy · Terms · Advertising ·</p>
//               <p>· Meta © 2024</p>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default LeftSideBar;
