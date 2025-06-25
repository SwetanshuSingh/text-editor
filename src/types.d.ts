type Page = {
  idx: number;
  id: string;
  title: string;
  content: string;
};

type ResType = "session" | "validation" | "query" | "mutation";

type ServerActionResponse = {
  status: "success" | "error";
  type: ResType;
  message: string;
};
