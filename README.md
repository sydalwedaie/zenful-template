# Zenful Template, Using Vite, Tailwind CSS, and Handlbars

## What is This?

I wanted to create a template that I can use in my practice projects. Specifically, I wanted a way to practice Tailwind CSS, but it is tedious to do in a vanilla setting due to the repetitive nature of Tailwind CSS. This template uses the handlebars template engine to eliminate the repetition. It does not provide a full templating experience, but it is good enough for practice.

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- Tailwind CSS, via [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- Handlebars, via [vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars)

## Syntax Highlighting

Use the following VS Code extension:
Name: Handlebars Syntax Highlighter
[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=CarlSaqui.handlebars-syntax-highlighter)

## Installation

Run

```sh
git clone git@github.com:sydalwedaie/zenful-template.git
cd zenful-template
npm install
npm run dev
```

## Usage

- Your data lives in `src/data`. It is a JavaScript object that is available to handlebars through the global context set in `vite.config.mjs`. Use `{{[key]}}` to reference the data.
- The components are handlebars partial files with the `.hbs` extension in the `src/components` directory. Use `{{> [partialName]}}` to reference them.
- I used handlebars' _Partial Blocks_ concept to create a pseudo-layout behavior. To create a layout, use `{{> @partial-block}}` to act as a placeholder in a template file with the `.hbs` extension in the `src/layouts` directory. To use a layout, use the partial block sytanx as per the following:

```html
{{#> layout}} content {{/layout}}
```

**Note:** I learned about this behavior in this [post](https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/).

- You can pass _partial parameters_ to partials in the form of `{{> [partialName] partialParams=[partialParams]}}`.
