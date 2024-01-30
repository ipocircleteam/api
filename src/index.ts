import dotenv from "dotenv";
import { app } from "./app";
import connectDb from "./db";

dotenv.config({
  path: "../.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server startup failed! \n ${err}`);
  });
