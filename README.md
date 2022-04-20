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
