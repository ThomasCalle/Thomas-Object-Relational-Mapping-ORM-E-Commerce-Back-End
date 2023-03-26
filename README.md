# Thomas' Object Relational Mapping ORM E-Commerce Back End.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
The back-end database has been purposed towards e-commerce websites using Express.js API and Sequelize to connect to the MySQL database. The back-end database allows users to create a development database, seed it with test data, and sync Sequelize models to MySQL database. User's have the ability to use GET, POST, PUT, and DELETE routes to display and manipulate data in the users database. Give it a try and see how it helps your company power up to the next level!

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The Challenge:
This challenge requires the creation of an e-commerce back-end site that meets specific user requirements. These requirements include the ability to connect to a MySQL database using Sequelize, create a development database that is seeded with test data, sync Sequelize models to the MySQL database, and display data from categories, products, and tags in a formatted JSON. The application should also be able to create, update, and delete data in the database.
## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## GIF:
### Figure .1 GIF

The following animation demonstrates the application functionality:
![A user clicks on slots on the color-coded calendar and edits the events.](/public/assets/images/Express-JS-Note-Taker.GIF)

## Usage Instructions
1. Click here to open the [Deployed Application Link:](https://e-js-note.herokuapp.com/)
2. Click "Get Started" to open the note taker.
3. Enter text into the 'title' and 'text' fields 
4. Click the save icon (top right) to save the note.
5. Click the + icon (top right) to add another note.
6. Additional: Click the trash icon to delete saved notes.


1. Connect to the database, ensure that the environment variable file is updated with the correct database name, MySQL username, and MySQL password. 
2. Generate a development database with test data, use the schema and seed commands.
3. Use Insomnia to test API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.

## Deployed Application Link:
[Deployed Application Link:](https://e-js-note.herokuapp.com/)

## YouTube Walkthrough Video:
[Click Here to Watch](https://youtu.be/hGVJLTGqPgk)

## Screenshots:
### Figure 1. Screenshot
![](/public/assets/images/Screenshot.png) 

## Installation Process
1. Clone the Repository from GitHub 
2. (or) Download Zip Folder from Repository from GitHub
3. Open the cloned (or downloaded) repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Built With
- Saiyan Pride
- JSON:[ JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Node.js: [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Node MySql2: [2.3.3](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.29.3](https://www.npmjs.com/package/sequelize)
- Insomnia: [by Kong](https://insomnia.rest/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned:
1. How to use Express.js to create a functional back end for an e-commerce website.
2. How to connect to a MySQL database using Sequelize and update environment variable files accordingly.
3. How to generate a development database with test data using schema and seed commands.

### Continued Development:
1. Implement the latest technologies, such as Express.js, MySQL, and Sequelize to create a functional back end for the e-commerce website.
2. Ensure that the environment variable file is updated with the database name, MySQL username, and MySQL password to connect to the database using Sequelize.
3. Create schema and seed commands to generate a development database with test data, allowing for a smooth testing process.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023 Thomas Calle
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

Follow me on Github at [Thomas Calle](https://github.com/ThomasCalle)! Additional questions or concerns? feel free to contact me at thomas.calle@outlook.com.

Until next, adios!

© 2023 [Thomas Calle](https://github.com/ThomasCalle). Confidential and Proprietary. All Rights Reserved.