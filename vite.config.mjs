import { resolve } from "path";
import { data } from "./data.js";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
      context: data,
    }),
  ],
};
