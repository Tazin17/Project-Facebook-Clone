import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";

// import React, { useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import PostComments from "./PostComments";
// import { formateDate } from "@/lib/utils";

const PostCard = ({ post }) => {
  return (
    <motion.div
      key={post?._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Avatar>
                <AvatarImage />
                <AvatarFallback className="dark:bg-gray-400">T</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold dark:text-white">Nusrat Tazin</p>
                <p className="font-sm text-gray-500">20-05-2024</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="bg-white hover:bg-gray-200 dark:bg-[rgb(39,39,39)] dark:hover:bg-gray-600"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <p className="mb-4">{post?.content}</p>
          {post?.mediaUrl && post.mediaType === "image" && (
            <img
              src={post?.mediaUrl}
              alt="post_image"
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          {post?.mediaUrl && post.mediaType === "image" && (
            <video controls className="w-full h-[500px] rounded-lg mb-4">
              <source src={post?.mediaUrl} type="video/mp4" />
              Your browser does not support the Video tag
            </video>
          )}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500 hover:border-b-2 border-gray-400 cursor-pointer">
              2 likes
            </span>
            <div className="flex gap-3 ">
              <span className="text-sm text-gray-500 hover:border-b-2 border-gray-400 cursor-pointer">
                3 comments
              </span>
              <span className="text-sm text-gray-500 hover:border-b-2 border-gray-400 cursor-pointer">
                5 shares
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
