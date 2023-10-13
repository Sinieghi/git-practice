import Frete from "../models/Frete.js";
import { setTimeout } from "timers/promises";
import Historic from "../models/Historic.js";
import User from "../models/User.js";
import Signature from "../models/Signature.js";
import Messages from "../models/Messages.js";

export const Timer = () => {
  const startDelete = async ({ id, ms, eventType }) => {
    console.log(id, ms, eventType);
    try {
      const resp = await setTimeout(ms, { id, ms, eventType });
      const frete = await Frete.findOne({ _id: resp?.id });
      console.log(resp);

      switch (resp.eventType) {
        case "delte frete":
          if (Date.now() - frete?.updatedAt < ms - 300) return;
          await frete.deleteOne();
          break;
        // case "concluded status":
        //   if (Date.now() - frete?.update_at < ms - 300) return;
        //   await Historic.findByIdAndDelete(frete?._id);
        //   await frete?.deleteOne();
        //   break;
        case "soft delete user":
          const user = await User.findById(resp?.id);
          console.log("user first log", user);
          console.log("User before check update", user);
          if (Date.now() - user?.updatedAt < ms - 300) {
            user.isUserDeletede = false;
            return;
          } else {
            await Frete.deleteMany({ createdBy: user?._id });
            await Historic.deleteMany({ user: user?._id });
            await Signature.findById(user.subscriptionID);
            await user?.deleteOne();
          }
          break;
        default:
          console.log("something went wrong");
          break;
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  const cooldownSupportTicket = async ({ id, ms }) => {
    console.log(id);
    try {
      const resp = await setTimeout(ms, { id });
      const queryObj = {
        adminCredentials: [
          {
            session: "",
            isValidSsesion: false,
          },
        ],
      };
      await User.findByIdAndUpdate(resp.id, queryObj);
    } catch (error) {
      throw new Error(error);
    }
  };
  const cooldownMessages = async ({ id, ms }) => {
    try {
      const resp = await setTimeout(ms, { id });
      await Messages.findByIdAndUpdate(resp.id, {
        userIp: null,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  return { startDelete, cooldownSupportTicket, cooldownMessages };
};
