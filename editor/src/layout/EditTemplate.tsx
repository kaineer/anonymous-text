//
import { FC } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { ListKeys } from "../components/ListKeys";
import { TemplateTitle } from "../components/TemplateTitle";

import { bem } from "../shared/utils/bem";
import { clipsSlice } from "../store/slices/clips/clips";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const element = (name?: string) => {
  return bem("edit-template", name).toString();
}

export const EditTemplate: FC = () => {
  const {
    actions: { setCurrentKey },
    selectors: { getCurrentKey }
  } = clipsSlice;
  const currentKey = useSelector(getCurrentKey);
  const dispatch = useDispatch();

  const { name = "main" } = useParams();

  if (currentKey !== name) {
    dispatch(setCurrentKey(name));
  }

  return (
    <>
      <div className={ element() }>
        <div className={ element("left") }>
          <TemplateTitle />
          <CodeEditor />
        </div>
        <div className={ element("right") }>
          <ListKeys />
        </div>
      </div>
    </>
  );
}
