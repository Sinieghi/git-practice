import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        "please provide valid email",
      ],
    },
    password: {
      type: String,
    },
    passwordToken: {
      type: String,
    },
    passwordTokenExpirationDate: {
      type: Date,
    },
    verificationToken: String,
    send_email_attempt: { type: Number, default: 0 },
    role: {
      type: String,
      enum: ["admin", "user", "caminhoneiro", "empresario"],
      default: "caminhoneiro",
    },
    checkoutId: {
      type: String,
      default: "",
    },
    signaturePlan: {
      type: String,
      enum: ["basic", "advanced", "premium", "freeAccount"],
      default: "freeAccount",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    subscriptionID: {
      type: mongoose.Types.ObjectId,
      ref: "Signature",
    },
    adminCredentials: [
      {
        session: String,
        //admin loga e esse valo persiste 30min true
        isValidSsesion: {
          type: Boolean,
          default: false,
        },
      },
    ],
    verified: Date,
    isDeletede: { type: Boolean, default: false },
    reasons: String,
    deletedeAt: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  //caso buggar colocar o await aqui
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET
  );
};

// userSchema.methods.planAndRole = async function (req) {
//   const myUser = await this.model.findOne(this.getQuery());
//   console.log(req.signature);
//   console.log(myUser);
// };
userSchema.methods.checkPassword = async function (userPassword, key) {
  let isMatch;
  isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", userSchema);
