import { configureStore } from "@reduxjs/toolkit";
import { poolReducer } from "@nftvillage/farms-sdk";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    pools: poolReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
