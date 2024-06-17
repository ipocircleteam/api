import { ZodSchema } from "zod";
import { IpoPostRequestSchema } from "../zod/ipo.schema";

const schema: { [key: string]: ZodSchema } = {
  "ipo-postRequest": IpoPostRequestSchema,
};

const getZodSchema = (
  baseUrl: string,
  method: "POST" | "GET" | "PATCH" | "DELETE" | "PUT"
) => {
  const schemaType =
    baseUrl.split("/api/v1/")[1] + "-" + method.toLowerCase() + "Request";
  if (schema[schemaType] !== undefined)
    return { isSchemaFound: true, schema: schema[schemaType] };
  else return { isSchemaFound: false };
};

export default getZodSchema;
