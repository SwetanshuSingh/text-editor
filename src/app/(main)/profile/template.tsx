"use client";

import AnimatedPageWrapper from "@/components/animated-page-wrapper";

const ProfileTemplate = ({ children }: { children: React.ReactNode }) => {
  return <AnimatedPageWrapper>{children}</AnimatedPageWrapper>;
};

export default ProfileTemplate;
