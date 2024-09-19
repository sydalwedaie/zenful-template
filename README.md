# Zenful Template, Using Vite, Tailwind CSS, and Handlbars

## What is This?

I wanted to have a template for my practice projects. Specifically, I needed a way to practice Tailwind CSS, but it is tedious to do in a vanilla setting due to the repetitive nature of the unitily classes. Handlebars enables simple templating such as iterators and reusable components. As a bonus, handlebars also helps with seperating data from view, and provides a means of creating reusable layouts.

## The Stack

- [Vite](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/). I modifed the guide from [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite) to use it in a vanila project.
- [Handlebars](https://handlebarsjs.com/). I used [vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars) which eliminates the need to manually complile handlebar elements. It lets you to just write handlebars in the `.html` or `.hbs` files.

## Syntax Highlighting

Use the following VS Code extension: [Handlebars Syntax Highlighter](https://marketplace.visualstudio.com/items?itemName=CarlSaqui.handlebars-syntax-highlighter)

## Installation

Run

```sh
git clone git@github.com:sydalwedaie/zenful-template.git
cd zenful-template
npm install
npm run dev
```

## Usage

- Your data lives in `src/data/index.js`. It is a JavaScript object that is available to handlebars through the global context set in `vite.config.mjs`. Use `{{[key]}}` to reference the data.
- The components are handlebars _partials_ in the `src/components` directory. Use `{{> [componentName]}}` to reference them.
- Layouts are handlebars _partial blocks_ in the `src/layouts` directory. To create a layout, use `{{> @partial-block}}` to act as a placeholder. To use a layout, use `{{#> layout}} content {{/layout}}`[^1].
- You can pass _partial parameters_ to partials in the form of `{{> [partialName] partialParams=[partialParams]}}`.

[^1]: I learned about this behavior in this [post](https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/).
