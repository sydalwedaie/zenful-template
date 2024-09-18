import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      context: {
        title: "Hello, world!",
        list: ["foo", "bar", "baz"],
      },
    }),
  ],
};
