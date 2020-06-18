module.exports = mongoose => {
  const Player = mongoose.model(
  "player",
  mongoose.Schema(
  {
    name: String,
    position: String,
    overall: Number,
    nationality: String,
    club: String
  },
  { timestamps: true }
  )
  );
  
  return Player;
};
