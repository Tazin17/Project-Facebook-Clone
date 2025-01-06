"use cilent";
// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ImageIcon, Laugh, Plus, Video, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import React, { useRef, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTrigger,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import { ImageIcon, Laugh, Plus, Video, X } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";
// import { AnimatePresence } from "framer-motion";
// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
// import userStore from "@/store/userStore";
// import { usePostStore } from "@/store/usePostStore";

const NewPostForm = ({ isPostFormOpen, setIsPostFormOpen }) => {
  const [isMounted, setIsMounted] = useState(false);
  const[filePreview, setFilePreview] = useState(null)
  useEffect(() => {
    setIsMounted(true); // Ensures components like Dialog are rendered only after hydration
  }, []);

  if (!isMounted) return null; // Avoid rendering on the server

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="dark:bg-gray-300">T</AvatarFallback>
          </Avatar>
          <Dialog open={isPostFormOpen} onOpenChange={setIsPostFormOpen}>
            <DialogTrigger asChild>
              <div className="w-full">
                <Input
                  placeholder={`What's on your mind, Nusrat Tazin?`}
                  readOnly
                  className="cursor-pointer rounded-full h-12 dark:bg-[rgb(58,59,60)] placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Separator className="my-2 dark:bg-slate-400" />
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    className=" flex items-center justify-center"
                  >
                    <ImageIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-black dark:text-slate-100">
                      Photo
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    <Video className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-black dark:text-slate-100">
                      Video
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    <Laugh className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="text-black dark:text-slate-100">
                      Feelings
                    </span>
                  </Button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] max-h-[80vh] overflow-y-auto">
              {/* Add a DialogTitle for accessibility */}
              <DialogHeader>
                <DialogTitle className="text-center">Create Post</DialogTitle>
              </DialogHeader>
              <Separator />
              <div className="flex items-center space-x-2 py-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage />
                  <AvatarFallback className="dark: bg-gray-300">
                    T
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Nusrat Tazin</p>
                </div>
              </div>
              <Textarea
                placeholder={`What's on your mind? Nusrat Tazin`}
                className="min-h-[100px] text-lg"
              />
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity:0, height: 0 }}
                  className="relative mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center"
                >
                  <Button
                    variant= "ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                  >
                      <X className="h-4 w-4"/>
                  </Button>
                  {filePreview ?(
                    fileType.startWith("image") ? (
                      <img/>
                    ):(
                      <video/>
                    )
                  ):(<>
                  <Plus className="h-12 w-12 text-gray-400 mb-2 cursor-pointer"/>
                  <p className="text-center text-gray-500">Add Photos/Videos</p>
                  </>)}
                      <input
                      type="file" accept="image/*,video/*" className="hidden"
                      
                      />

                </motion.div>
              </AnimatePresence>
              <div className="bg-gray-200 dark:bg-muted p-4 rounded-lg mt-4">
                <P className="font-semibold mb-2"
                >Add Your Post</P>

              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};
export default NewPostForm