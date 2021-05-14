### Note

I prefer to intall typescript locally, this changes the commands a bit. To run the transpiler, use `npx tsc`, instead of `tsc file-name.ts`.
The output file has been set to `./dist` and the input to `./src` in tsconfig.json.

1. `npm init -y`

2. `git init`

3. `npm i -D eslint eslint-plugin-jsdoc eslint-plugin-html eslint-config-prettier @typescript-eslint/eslint-plugin typescript @typescript-eslint/parser `

4. Install airbnb base peer dependencies (eslint eslint-plugin-import)
   `npx install-peerdeps --dev eslint-config-airbnb-base`
5. `npm i -D typescript`

6. Restart vscode.

7. If error 'failed to load config airbnb base', run `npm install` and restart vscode

8. Run the typescript transpiler and check for the following error in the console:
   `src/script.ts:3:22 - error TS2339: Property 'foo' does not exist on type '"1"'. console.log('aaa', a.foo());`

9. Run live server

10. Run `npm update prune`
