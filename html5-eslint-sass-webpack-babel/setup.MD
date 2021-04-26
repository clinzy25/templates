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
