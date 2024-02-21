import dotenv from "dotenv";
import { app } from "./app";
import { ErrorHandler } from "./middlewares";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT || 8080

//@ts-ignore //TODO to be fixed later on
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
