// src/components/CodeEditor.tsx
import { FC } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { clipsSlice } from "../store/slices/clips/clips";

import AceEditor from 'react-ace';
import 'brace/mode/yaml';
import 'brace/mode/json';
import 'brace/mode/text';
import 'brace/theme/monokai';

export const CodeEditor: FC = () => {
  const {
    actions: { setCurrentValue },
    selectors: {
      getCurrentValue,
      getLanguage,
    }
  } = clipsSlice;

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
      focus={ true }
      showGutter={ false }
      tabSize={ 2 }
      style={{width: '100%', height: '100%'}}
      onChange={handleChange}
    />
  );
}
