import Handlebars from "handlebars";

const source = document.getElementById("template").innerHTML;
const template = Handlebars.compile(source);

const data = {
  list: ["Item 1", "Item 2", "Item 3"],
};

document.getElementById("list").innerHTML = template(data);
