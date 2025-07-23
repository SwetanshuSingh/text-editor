"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import DocPage from "./doc-page";
import ChatSidebar from "./chat-sidebar";

const DocEditor = () => {
  const [showChat, setShowChat] = useState(true);

  return (
    <motion.main
      layout
      className="w-full min-h-screen h-screen bg-[#F8F8F8] flex"
    >
      <motion.section
        layout
        className={`relative h-full flex justify-center items-center p-5 ${
          showChat ? "w-8/12" : "w-full"
        }`}
      >
        <DocPage
          data={{
            id: "23",
            title: "Hello",
            summary: "",
            content: "",
            existingDoc: false,
          }}
        />
        <button
          onClick={() => setShowChat(!showChat)}
          className="absolute bottom-4 right-4 w-10 h-10 bg-slate-200 rounded-full border border-slate-300"
        ></button>
      </motion.section>

      <AnimatePresence>
        <ChatSidebar showChat={showChat} />
      </AnimatePresence>
    </motion.main>
  );
};

export default DocEditor;
