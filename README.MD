I made these for myself to make project setup a bit quicker and more reliable. They might be of use to someone.

These templates work on Windows using npm, I have not tested on any other OS or package manager.

Each directory contains the minimal config files for the setup in the directory name. Following commands in setup.MD will allow you to set up your dev environment will all the necessary dependencies quickly and reliably every time. I have made some preferential changes to the configs. While you could just download the package.json and run `npm install`, it's good to step through the process, checking for errors along the way.

If you have never used Eslint, you may need to add this line to your VScode settings.json:

`"eslint.validate": [ "javascript", "javascriptreact", "html", "typescriptreact" ],`

\*I don't actually have a typescript or react guide here but might as well cover the bases in case you use them later.

---

## html5-eslint

This directory has Eslint with airbnb-base (non-React) config and all the nessecary dependencies and config files.

Check package.json devDependencies for details.

1. `npm init -y`

2. `git init`

3. `npm i -D eslint eslint-plugin-jsdoc eslint-plugin-html eslint-config-prettier`

4. Install airbnb base peer dependencies (eslint eslint-plugin-import)
   `npx install-peerdeps --dev eslint-config-airbnb-base`

5. If error 'failed to load config airbnb base', run `npm install` and restart vscode

6. Run live server
7. Run `npm update prune`

---

## html5-eslint-sass

This directory builds on the last with Sass and PostCSS. It contains a typical directory structure for Sass modules.

Check package.json devDependencies for details.

1. `npm init -y`

2. `git init`

3. Install ESLint and PostCSS
   `npm i -D eslint eslint-plugin-jsdoc eslint-plugin-html eslint-config-prettier postcss postcss-preset-env`

4. Install airbnb base peer dependencies (eslint eslint-plugin-import)
   `npx install-peerdeps --dev eslint-config-airbnb-base`

5. If error 'failed to load config airbnb base', run `npm install` and restart vscode

6. Run Live Sass Compiler extention from the VSCode marketplace

7. Check styles folder for index.css and index.css.map

   - Check index.css.map for postcss prefixes

8. Browser should display variable color

9. Clean test functions and scss
10. Run `npm update prune`

---

## html5-eslint-sass-webpack-babel

This directory has webpack and babel installed. Webpack will handle Sass compilation and the dev-server will substitute live-server. The default 'dist' directory will be created on build, and you will manually move the index.html file into that folder.

Check package.json devDependencies for details.

1. `npm init -y`

2. `git init`

3. `npm i -D eslint eslint-plugin-jsdoc eslit-plugin-html eslint-config-prettier`

4. Install airbnb base peer dependencies (eslint eslint-plugin-import)
   `npx install-peerdeps --dev eslint-config-airbnb-base`

5. `npm i --D webpack webpack-dev-server webpack-cli`

6. Restart vscode

7. Check src/index.js and confirm

   - eslint working
   - prettier working
   - eslint jsdocs extention working

8. `npm i -D babel-loader @babel/core @babel/preset-env`

9. Confirm webpack.config has babel-loader

10. Install webpack loaders
    `npm i -D css-loader mini-css-extract-plugin postcss postcss-preset-env postcss-loader sass sass-loader`

11. Restart vscode for good luck

12. Test build command
    `npm run build`

13. Check ./dist for main.js. Check for babel functions

14. Move index.html into ./dist

15. Run `npm start`
16. Open localhost:8080 in browser

17. Check browser and confirm

    - 'test' \<h1> visible
    - scss var background color correct
    - in console
      - test objects visible
      - live reloading enabled
      - hot reloading enabled
    - in sources
      - main.js shows source-map
      - index.js shows normal source code
    - make edits in index.html, an scss file, and index.js to check for live-reload

18. clean test fns from index.js and test scss

19. Run `npm update prune`

## React

1. Create react app, replace 'my-app' with project name
   `npx create-react-app my-app`
2. Install airbnb peer dependencies (eslint, eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y)
   `npx install-peerdeps --dev eslint-config-airbnb`

3. `npm i -D eslint-config-prettier eslint-plugin-styled-components-a11y eslint-plugin-jsdoc eslint-plugin-html`
   \*\*order is important here, plugins like being installed at the end

4. Run `npm update`
   \*\*Eslint version may not be latest and will throw an error with react-scripts.

5. Restart VSCode

\*\*If eslint errors from throwing in the browser, create a .env file in the root folder with the flag ESLINT_NO_DEV_ERRORS=true. Add .env to .gitignore
