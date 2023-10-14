import mongoose from "mongoose";
import {
  BODYWORKCLOSED,
  BODYWORKOPEN,
  BODYWORKSPECIAL,
  DESTINY,
  HEAVY,
  LIGHT,
  MEDIUM,
  SORT_STATUS,
} from "../utils/constUtils.js";

const freteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      maxlength: 100,
    },
    phone: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
    },
    text: {
      type: String,
      maxlength: 500,
    },
    city: {
      type: String,
    },
    toCity: {
      type: String,
    },
    sortStatus: {
      type: String,
      default: SORT_STATUS.DEFAULT,
      enum: Object.values(SORT_STATUS),
    },
    destiny: {
      type: String,
      default: DESTINY.DEFAULT,
      enum: Object.values(DESTINY),
    },
    heavy: {
      type: String,
      default: HEAVY.DEFAULT,
      enum: Object.values(HEAVY),
    },
    medium: {
      type: String,
      default: MEDIUM.DEFAULT,
      enum: Object.values(MEDIUM),
    },
    light: {
      type: String,
      default: LIGHT.DEFAULT,
      enum: Object.values(LIGHT),
    },
    loadType: {
      type: String,
    },
    canvas: {
      type: String,
    },
    colectDate: {
      type: Date,
    },
    bodyworkOpen: {
      type: String,
      default: BODYWORKOPEN.DEFAULT,
      enum: Object.values(BODYWORKOPEN),
    },
    bodyworkClosed: {
      type: String,
      default: BODYWORKCLOSED.DEFAULT,
      enum: Object.values(BODYWORKCLOSED),
    },
    bodyworkSpecial: {
      type: String,
      default: BODYWORKSPECIAL.DEFAULT,
      enum: Object.values(BODYWORKSPECIAL),
    },
    isUserDeletede: {
      type: Boolean,
      default: false,
    },
    reasons: String,
    //isso aqui não esta funcionando
    deletedeAt: Date,
    isConcluded: {
      type: Boolean,
      default: false,
    },
    update_at: {
      type: Number,
    },
    historicBy: {
      type: mongoose.Types.ObjectId,
      ref: "Historic",
    },
    isDeleteStatus: {
      type: Boolean,
      default: false,
    },
    numberOfUpdatesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// freteSchema.pre("findOneAndUpdate", async function (next) {
//   const checkTheUpdate = await this.model.findOne(this.getQuery());
//   try {
//     if (checkTheUpdate.numberOfUpdatesCount >= 10) {
//       return next(this.error);
//     }
//     checkTheUpdate.numberOfUpdatesCount++;
//     checkTheUpdate.save();
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });
export default mongoose.model("Frete", freteSchema);
