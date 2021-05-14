1. Create react app, replace 'my-app' with project name
   `npx create-react-app my-app`
2. Install airbnb base peer dependencies (eslint, eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y)
   `npx install-peerdeps --dev eslint-config-airbnb`

3. //order is important here, plugins like being installed at the end: 2. `npm i -D eslint-config-prettier eslint-plugin-styled-components-a11y eslint-plugin-jsdoc eslint-plugin-html`

4. Install react addons as needed

-   `npm i react-router-dom`
-   `npm i react-redux`
-   `npm i -D @babel/preset-react`
-   `npm i -D styled-components babel-plugin-styled-components`

5. Run `npm update`
   \*\*Eslint version may not be latest and will throw an error with react-scripts.

6. Restart VSCode

\*\*If eslint errors from throwing in the browser, create a .env file in the root folder with the flag ESLINT_NO_DEV_ERRORS=true. Add .env to .gitignore
