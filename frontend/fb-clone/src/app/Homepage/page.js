"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
// import StorySection from "../story/StorySection";
import StorySection from "@/app/story/StorySection";
import PostCard from "../posts/PostCard";
import NewPostForm from "../posts/NewPostForm";

// "use client"
// import React, { useEffect, useState } from "react";
// import LeftSideBar from "../components/LeftSideBar";
// import RightSideBar from "../components/RightSideBar";
// import StorySection from "@/app/story/StorySection";
// import NewPostForm from "../posts/NewPostForm";
// import PostCard from "../posts/PostCard";
// import { usePostStore } from "@/store/usePostStore";
// import toast from "react-hot-toast";

const HomePage = () => {
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);
  const posts = [
    {
      _id: 1,
      content: "hello world",
      mediaUrl: "https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg",
      mediaType: "image",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-background text-background">
      <Header />
      {/* <LeftSideBar/> */}
      <main className="flex flex-1 pt-16">
        <LeftSideBar />
        <div className="flex-1 px-4 py-6 md:ml-64 lg:mr-64 lg:max-w-2xl xl:max-w-3xl mx-auto">
          <div className="lg:ml-2 xl:ml-28">
            <StorySection />
            <NewPostForm
              isPostFormOpen={isPostFormOpen}
              setIsPostFormOpen={setIsPostFormOpen}
            
            />
            <div className="mt-6 space-y-6">
              {posts.map((post) => (
                <PostCard key={post._id} 
                  post={post}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-64 xl:w-80 fixed right-0 top-16 bottom-0 overflow-y-auto p-4">
          <RightSideBar />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
