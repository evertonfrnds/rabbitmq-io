import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://dbUser:qwe123@cluster0.siff3.mongodb.net/newdatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
