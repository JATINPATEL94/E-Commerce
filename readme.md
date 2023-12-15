<!-- ******** Front_end ******** -->

<!-- Creating a React app -->

npx create-react-app styleblend

<!-- State Management & Routing -->

npm install redux react-router-dom

<!-- Tailwind css Installation -->

npx tailwindcss init
npm install -D tailwindcss

<!-- ******** Back_end ******** -->

<!-- creact backend set-up-->

npm init

<!-- auto run server -->

npm i -D nodemon

<!-- change in package.json file -->

"scripts": {
"start": "nodemon src/index.js"
},

<!-- Opinionated Code Formatter -->

npm i -D prettier

<!-- create a file -->

.prettierrc
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"trailingComma": "es5",
"semi": true
}

.prettierignore
/.vscode
/node_modules
./dist
.env
.env
.env.\*

<!-- creact folder in src -->

mkdir controllers db middlewares models routes utils

<!-- install -->

npm install express mongoose

<!-- Storing configuration in the environment, separate from code is based -->

npm i dotenv

<!-- its middleware used to extract data from the request body -->

npm i body-parser

<!-- Cross-Origin Resource Sharing (CORS)  -->

npm i cors

<!-- for aggregation query -->

npm i mongoose-aggregate-paginate-v2

<!-- encrypt(hash) password  -->

npm i bcryptjs

<!-- secret Or PrivateKey -->

npm i jsonwebtoken
