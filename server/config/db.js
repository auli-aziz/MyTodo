import mongoose from "mongoose";

export const connectDatabase = async () => {
  const URI = "mongodb+srv://auliaanugrahaziz:wRG1FlvuVLzTHhhe@cluster0.gexghhr.mongodb.net/Modul9SBD";

  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((err) => {
      console.log("Message: " + err.message);
    });
};
