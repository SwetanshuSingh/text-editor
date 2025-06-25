"use client";

import AnimatedPageWrapper from "@/components/animated-page-wrapper";

const DocsTemplate = ({ children }: { children: React.ReactNode }) => {
  return <AnimatedPageWrapper>{children}</AnimatedPageWrapper>;
};

export default DocsTemplate;
