1. Create react app, replace 'my-app' with project name
   `npx create-react-app my-app`
2. `npx install-peerdeps --dev eslint-config-airbnb`

//order is important here, plugins like being installed at the end: 2. `npm i -D eslint-config-prettier eslint-plugin-styled-components-a11y eslint-plugin-jsdoc eslint-plugin-html`

3. Run `npm update`
   \*\*Eslint version may not be latest and will throw an error with react-scripts.

4. Restart VSCode

\*\*If eslint errors from throwing in the browser, create a .env file in the root folder with the flag ESLINT_NO_DEV_ERRORS=true. Add .env to .gitignore
