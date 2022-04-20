# fwd-image-processing-api-project

## Description

A simple API builded to manage the user to resize the images based on URL parameters values.

### Project build depended on

1. [TypeScript] (https://www.typescriptlang.org/docs/)
2. [Node.JS] (https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express] (https://expressjs.com/)
4. [fs-extra] (https://www.npmjs.com/package/fs-extra)
5. [Sharp] (https://www.npmjs.com/package/sharp)

### For Fixing and Formatting Code

2. [Prettier] (https://prettier.io/docs/en/index.html)
1. [ESLint] (https://eslint.org/docs/user-guide/getting-started)

### For Unit testing

1. [Jasmine] (https://jasmine.github.io/)
2. [supertest] (https://www.npmjs.com/package/supertest)

### Project Structure and Project Tree

Some Description of the folders:
- `assets`: Images to be processed by the API
- `spec`: Jasmine Configuration
- `controllers`: API Handlers
- `routes`: API Routers

```
+---assets
|   \---images
|       \---src
+---spec
|   \---support    
\---src
    |   index.ts
    |
    +---controllers    
    +---routes
    |   \---images
    |           
    +---tests         
  ```
# Initialize The project

## start the server

1. Install all dependencies
   `npm i`

2. Build the project from TypeScript to JavaScript
   `npm run build`

3. Start the Server
   `npm start`

### The server will start on port: the user environment port, or the default host is on: http://localhost:3000.

4. Run the Tests
   `npm run test`

5. Run Prettier and ESLint
   `npm run prettier`
   `npm run lint`

<h2 class="code-line" data-line-start=9 data-line-end=10 ><a id="USAGE_9"></a>USAGE</h2>
<p class="has-line-data" data-line-start="10" data-line-end="12">PATH: <code>/api/images/:imageName</code><br>
Method: GET</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Parameter</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>Yes</td>
</tr>
<tr>
<td>height</td>
<td>No (default height = width)</td>
</tr>
<tr>
<td>ext</td>
<td>No (default jpg)</td>
</tr>
</tbody>
</table>

<p class="has-line-data" data-line-start="18" data-line-end="20">Example:<br>
<code>/api/images/fjord&amp;width=200&amp;height=300</code></p>

### NPM-run Scripts

- `dev`: `nodemon ./src/index.t`
- `test`: `tsc && jasmine`
- `build`: `npm run clean && tsc`
- `start`: `npm run build && nodemon build/index.js`
- `format:src`: `prettier --write src/**/*.ts`
- `eslint`: `eslint . --ext .ts`
- `clean`: `rimraf ./build`
- `clean:thumbs`: `rimraf ./assets/images/build`
- `jasmine`: `jasmine`
