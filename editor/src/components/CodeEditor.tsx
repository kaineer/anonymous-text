// src/components/CodeEditor.tsx
import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';

import AceEditor from 'react-ace';
import 'brace/mode/yaml';
import 'brace/mode/json';
import 'brace/mode/text';
import 'brace/theme/monokai';
import { clipsSlice } from "../store/slices/clips/clips";

export const CodeEditor: FC = () => {
  const { setCurrentValue } = clipsSlice.actions;
  const { getCurrentValue, getLanguage } = clipsSlice.selectors;

  const dispatch = useDispatch();

  const language = useSelector(getLanguage);
  const value = useSelector(getCurrentValue);

  const handleChange = (value: string) => {
    dispatch(setCurrentValue(value));
  }

  return (
    <AceEditor
      fontSize={ 24 }
      mode={ language }
      value={ value }
      showGutter={ false }
      tabSize={ 2 }
      style={{width: '100%', height: '100%'}}
      onChange={handleChange}
    />
  );
}
