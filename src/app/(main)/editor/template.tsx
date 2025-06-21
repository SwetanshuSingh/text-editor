"use client";

import AnimatedPageWrapper from "@/components/animated-page-wrapper";

const EditorTemplate = ({ children }: { children: React.ReactNode }) => {
  return <AnimatedPageWrapper>{children}</AnimatedPageWrapper>;
};

export default EditorTemplate;
