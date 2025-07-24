"use client";

import { useState } from "react";
import SettingsMenu from "./settings-menu";

type ActiveTab = "account" | "appearance";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("account");

  return (
    <div className="h-full flex">
      <SettingsMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full h-full bg-[#F5F5F5]">
        {activeTab === "account" && (
          <div className="py-3 px-5">
            <h3 className="font-semibold text-black/70 tracking-tight text-lg leading-6">
              Swetanshu Singh
            </h3>
            <p className="text-sm font-medium text-[#8C8C8C] tracking-tight">
              Basic Plan
            </p>
          </div>
        )}
        {activeTab === "appearance" && (
          <div className="h-full flex justify-center items-center">
            <p className="text-[#8C8C8C] font-semibold">
              feature not yet available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
