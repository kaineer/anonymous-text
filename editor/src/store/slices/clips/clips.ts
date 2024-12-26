import { createSelector, createSlice } from "@reduxjs/toolkit";
import { configureLocalStorage } from "../../../shared/utils/local-storage";

type ClipsHash = {[key: string]: string};

const reducerKey = "clips";

interface ClipsSliceData {
  clips: ClipsHash;
  current: string;
}

const { load, store } =
  configureLocalStorage<ClipsHash>(reducerKey, {});

const initialState = (): ClipsSliceData => {
  const clips = load();

  return {
    clips,
    current: "main"
  };
}

const getClips = (state: ClipsSliceData) => state.clips;

const languageTests = [
  { language: "json", test: (value: string) => value.startsWith('[') },
  { language: "yaml", test: (value: string) => value.startsWith('-') },
];

const getCurrentValue = (state: ClipsSliceData): string => {
  return state.clips[state.current] || "";
}

const checkLanguage = (value: string = ""): string => {
  const trimmedValue = value.trimStart();
  const { language = "text" } =
    languageTests.find(({test}) => test(trimmedValue)) || {};

  return language;
}

const fetchTemplateKeys = (value: string): string[] => {
  const keyRE = /\{\s*(\w+(\.\w+)*)\s*\}/g;
  return [...value.matchAll(keyRE)].map((md) => md[1])
}

export const clipsSlice = createSlice({
  name: reducerKey,
  initialState,
  reducers: {
    setCurrentValue(state, action) {
      state.clips[state.current] = action.payload;
      store(state.clips);
    },
    removeKey(state, action) {
      const key = action.payload;
      delete state.clips[key];
      store(state.clips);
    },
    setCurrentKey(state, action) {
      state.current = action.payload;
    },
  },
  selectors: {
    getCurrentKey(state) {
      return state.current;
    },
    getCurrentValue,
    getKeys: createSelector(
      getClips,
      Object.keys
    ),
    getCurrentKeys: createSelector(
      getCurrentValue,
      fetchTemplateKeys
    ),
    getLanguage: createSelector(
      getCurrentValue,
      checkLanguage
    ),
  }
});
