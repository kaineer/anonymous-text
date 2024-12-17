//
import { FC } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { ListKeys } from "../components/ListKeys";
import { TemplateTitle } from "../components/TemplateTitle";

export const EditTemplate: FC = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center h-screen bg-nord-6">
        <div className="w-1/2 h-full bg-white">
          <TemplateTitle />
          <CodeEditor />
        </div>
        <div className="w-1/2 h-full bg-nord-4 text-black">
          <ListKeys />
        </div>
      </div>
    </div>
  );
}
