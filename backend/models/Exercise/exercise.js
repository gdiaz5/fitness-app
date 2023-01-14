const mongoose = require("mongoose");

const Exercise = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "please provide user"],
  },
  workload: {
    type: Array,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Exercise", Exercise);
