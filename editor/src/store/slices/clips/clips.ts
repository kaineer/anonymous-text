import { createSelector, createSlice } from "@reduxjs/toolkit";

interface ClipsSliceData {
  clips: {[key: string]: string}; // key-value storage
  current: string;                // current key
}

const initialState: ClipsSliceData = {
  clips: {},
  current: 'main'
}

const name = "clips";

const getClips = (state: ClipsSliceData) => state.clips;

const languageTests = [
  { language: "json", test: (value) => value.startsWith('[') },
  { language: "yaml", test: (value) => value.startsWith('-') },
];

const checkLanguage = (value: string = "") => {
  const trimmedValue = value.trimStart();
  const { language = "text" } =
    languageTests.find(({test}) => test(trimmedValue)) || {};

  return language;
}

const getCurrentValue = (state: ClipsSliceData): string => {
  return state.clips[state.current] || "";
}

export const clipsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentValue(state, action) {
      state.clips[state.current] = action.payload;
    },
    setCurrentKey(state, action) {
      state.current = action.payload;
    },
  },
  selectors: {
    getCurrentKey(state) {
      return state.current;
    },
    getKeys: createSelector(
      getClips,
      (clips) => Object.keys(clips)
    ),
    getCurrentKeys: createSelector(
      getCurrentValue,
      (value) => [...value
        .matchAll(/\{\s*(\w+(\.\w+)*)\s*\}/g)]
        .map(([_, key]) => key)
    ),
    getCurrentValue,
    getLanguage: createSelector(
      getCurrentValue,
      checkLanguage
    ),
  }
});
