import mongoose from "mongoose";

//esse schema aqui é perigoso, pois o empresario e talvez o caminhoneiro vai conseguir spamar ele, eu preciso bolar alguma coisa que depois de agum tempo esse data seja excluido

const historicSchema = new mongoose.Schema(
  {
    concluded: {
      type: Boolean,
      default: false,
    },
    driverMan: {
      type: String,
    },
    //quanto tempo levou
    timeSpectative: {
      type: String,
    },
    //descrição do serviço
    description: {
      type: String,
    },
    //quantas paradas
    stops: {
      type: Boolean,
      default: false,
    },
    howMany: {
      type: Number,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Precisa estar registrado"],
    },
    frete: {
      type: mongoose.Types.ObjectId,
      ref: "Frete",
      required: [true, "Precisa estar registrado"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Historic", historicSchema);
