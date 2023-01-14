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

Exercise.pre("save", async function () {
  this.createdOn = this.createdOn.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
});

module.exports = mongoose.model("Exercise", Exercise);
