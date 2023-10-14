import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/userSlice/userSlice";
import freteSlice from "./feature/freteSlice/freteSlice";
import allFreteSlice from "./feature/allFreteSlice/allFreteSlice";
import userDataSlice from "./feature/userFromDataSlice/userDataSlice";
import singleFreteSlice from "./feature/sigleFreteSlice/singleFreteSlice";
import historicSlice from "./feature/historic/historicSlice";
import subscriptionSlice from "./feature/subscription/subscriptionSlice";
import adminSlice from "./feature/admin/adminSlice";
import messageSlice from "./feature/message/messageSlice";
import supportSlice from "./feature/support/support";
export const store = configureStore({
  reducer: {
    user: userSlice,
    frete: freteSlice,
    allFretes: allFreteSlice,
    userData: userDataSlice,
    singleFrete: singleFreteSlice,
    historic: historicSlice,
    subscription: subscriptionSlice,
    support: supportSlice,
    admin: adminSlice,
    message: messageSlice,
  },
});
