These templates work on Windows using npm, I have not tested on any other OS or package manager.

Each directory contains the minimal config files for the setup in the directory name. Following commands in setup.txt will allow you to set up your dev environment will all the necessary dependencies quickly and reliably every time. I have made minimal changes to the configs.

Files may have small amounts of code that is used to check if things are working.

I will add a React template soon.

If you have never used Eslint, you may need to add this line to your VScode settings.json:

"eslint.validate": [ "javascript", "javascriptreact", "html", "typescriptreact" ],

\*I don't actually have a typescript or react guide here but might as well cover the bases in case you use them later.

---

// html5-eslint

This directory has Eslint with airbnb-base (non-React) config and all the nessecary dependencies and config files.

Check package.json devDependencies for details.

1. npm init -y

2. git init (optional)

3. npm i -D eslint eslint-plugin-jsdoc eslit-plugin-html eslint-config-prettier

4. npx install-peerdeps --dev eslint-config-airbnb-base

5. If failed to load config airbnb base, npm install and restart vscode

6. run live server, test

---

// html5-eslint-sass

This directory builds on the last with Sass and PostCSS. It contains a typical directory structure for Sass modules.

Check package.json devDependencies for details.

1. npm init -y

2. git init (optional)

3. npm i -D eslint eslint-plugin-jsdoc eslit-plugin-html eslint-config-prettier postcss postcss-preset-env

4. npx install-peerdeps --dev eslint-config-airbnb-base

5. If failed to load config airbnb base, npm install and restart vscode

6. run live sass compiler extention

7. check styles folder for index.css and index.css.map - check index.css.map for postcss prefixes

8. browser should display variable color

9. clean test functions and scss

10. clean package.json

11. npm prune

---

// html5-eslint-sass-webpack-babel

This directory has webpack and babel installed. Webpack will handle Sass compilation and the dev-server will substitute live-server. The default 'dist' directory will be created on build, and you will manually move the index.html file into that folder.

Check package.json devDependencies for details.

1.  npm init -y

2.  git init (optional)

3.  npm i -D eslint eslint-plugin-jsdoc eslit-plugin-html eslint-config-prettier

4.  npx install-peerdeps --dev eslint-config-airbnb-base

5.  npm i --D webpack webpack-dev-server webpack-cli

6.  restart vscode

7.  check src/index.js and confirm

    - eslint working
    - prettier working
    - eslint jsdocs extention working

8.  npm i -D babel-loader @babel/core @babel/preset-env

9.  confirm

    - babel.config.js
    - webpack.config has babel-loader

10. npm i -D css-loader mini-css-extract-plugin postcss postcss-preset-env postcss-loader sass sass-loader

11. restart vscode for good luck

12. npm run build

13. check dist for main.js. confirm babel functions

14. move index.html into dist

15. npm start

16. check browser and confirm

    - 'test' \<h1> visible
    - scss var background color correct
    - in console
      - test objects visible
      - live reloading enabled
      - hot reloading enabled
    - in sources
      - main.js shows source-map
      - index.js shows normal source code

17. clean package.json

18. clean test fns from index.js and test scss

19. npm prune
