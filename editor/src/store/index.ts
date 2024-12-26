//

import { configureStore } from "@reduxjs/toolkit";
import { clipsSlice } from "./slices/clips/clips";

export const store = configureStore({
  reducer: {
    [clipsSlice.reducerPath]: clipsSlice.reducer,
  }
});

store.subscribe(() => {
  console.log("subscribe() " + Date.now());
});
