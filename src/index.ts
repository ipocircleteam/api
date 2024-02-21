import dotenv from "dotenv";
import { app } from "./app";

dotenv.config({
  path: "../.env",
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
