"use client";

type SettingsMenuProps = {
  activeTab: "account" | "appearance";
  setActiveTab: React.Dispatch<React.SetStateAction<"account" | "appearance">>;
};

const SettingsMenu = ({ activeTab, setActiveTab }: SettingsMenuProps) => {
  return (
    <div className="h-full flex flex-col border-r border-[#E4E4E4]">
      <div className="w-full border-b border-[#E4E4E4] px-6 py-3">
        <p className="font-semibold text-black/70">Settings</p>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <button
          onClick={() => setActiveTab("account")}
          className={`min-w-52 px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-200 text-left ${
            activeTab === "account"
              ? "bg-[#F2F2F2] text-[#1F1F1F]"
              : "text-[#7A7A7A] hover:bg-[#F2F2F2] hover:text-[#1F1F1F]"
          }`}
        >
          <p className="font-medium text-sm">Account</p>
        </button>

        <button
          onClick={() => setActiveTab("appearance")}
          className={`min-w-52 px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-200 text-left ${
            activeTab === "appearance"
              ? "bg-[#F2F2F2] text-[#1F1F1F]"
              : "text-[#7A7A7A] hover:bg-[#F2F2F2] hover:text-[#1F1F1F]"
          }`}
        >
          <p className="font-medium text-sm">Appearance</p>
        </button>
      </div>
    </div>
  );
};

export default SettingsMenu;
