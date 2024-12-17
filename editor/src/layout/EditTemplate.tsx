//

import { FC } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { ListKeys } from "../components/ListKeys";

export const EditTemplate: FC = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center h-screen bg-nord-6">
        <div className="w-1/2 h-full bg-white">
          <CodeEditor />
        </div>
        <div className="w-1/2 h-full bg-nord-4">
          <ListKeys />
        </div>
      </div>
    </div>
  );
}
