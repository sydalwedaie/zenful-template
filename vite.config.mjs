import { resolve } from "path";
import { data } from "./src/data/index.js";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/layouts"),
        resolve(__dirname, "src/components"),
      ],
      context: data,
    }),
  ],
};
