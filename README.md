# EJS-to-static-template

A simple script/template to turn your ejs project into static HTML.

Put your files in the views folder, mention them in the compile() function in main.js and it's ready to go.
Upon running keeps watching the folder and rebuilds every time there's a change.

## Warnings

This only keeps track of ejs files, you have to keep track of pictures, css, js etc. manually. Might sort that out later.

You also probably want to wipe ./public and rebuild it once again before shipping, just so you don't ship some dirty files on accident.

*Be careful so you don't wipe your precious css and other assets as well!*

## TLDR;

```bash
git clone https://github.com/maze42d/ejs-to-static-template
npm i
npm start run
```

If you deleted yours on accident, here's how compile is supposed to look like:
```js
const compile = () => {
  const funnyNumber = 21
  e2h({
    path: d+'/index.ejs',
    options: {funnyNumber}
  })
}
```
Path is an absolute path to the file you want to compile.

Options are optional.



## Eventually / sort of roadmap

- [ ] subfolders
- [ ] external assets
- [ ] dynamic output folder
- [ ] add `--watch / yarn run watch` just so it doesn't watch by default every time
- [ ] scss
- [ ] sligtly improved warning system
