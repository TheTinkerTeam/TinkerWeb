# Tinker Web

Follow the Instructions below to build & run Tinker Web in your local environment.

## Clone
Clone this repository to your home directory ~
`git clone https://github.com/TheTinkerTeam/TinkerWeb.git ~/TinkerWeb`

Move to the directory you just cloned (~/TinkerWeb)
`cd ~/TinkerWeb`

## Build

### `npm install` the Backend

Move to the sub-directory called 'backend' (~/TinkerWeb/backend)
`cd ~/TinkerWeb/backend`

Install npm dependencies inside the backend folder
`npm install`

### `npm install` the Frontend

Move to the sub-directory called frontend (~/TinkerWeb/frontend)
`cd ~/TinkerWeb/frontend`

Install npm dependencies inside the frontend folder
`npm install`

### Add .env file to the backend

Move to the sub-directory called 'backend' (~/TinkerWeb/backend)
`cd ~/TinkerWeb/backend`

Create the .env file in the backend folder
`touch .env`

Edit the `.env` file in your favorite editor by adding these variables:
`NODE_ENV=dev`

`DEV_DB_HOST=<YOUR_DB_HOST>`

`DEV_APP_PORT=5000`

`DB_USER=<YOUR_DB_USER>`
`DB_PASS=<YOUR_DB_PASSWORD>`

`JWT_SECRET=<YOUR_JWT_SECRET>`

**Replace all <PLACE_HOLDERS> with your variables

**OR Move your exesting `.env` file to the backend folder**
`mv <your-.env-file-path> ~/TinkerWeb/backend`

## Run

### `npm start` the Backend (Server)

Move to the sub-directory called 'backend' (~/TinkerWeb/backend)
`cd ~/TinkerWeb/backend`

Start the server inside the backend folder
`npm start`
**--> NOW THE SERVER IS RUNNING IN THE BACKGROUND OF THE TERMINAL <--**

### `npm start` the Frontend (Client)

**--> IMPORTANT! OPEN A NEW TERMINAL TO RUN THE FRONTEND <--**

Move to the sub-directory called frontend (~/TinkerWeb/frontend)
`cd ~/TinkerWeb/frontend`

Start the client inside the frontend folder
`npm start`

## THAT'S IT
YOU SHOULD SEE THE APPLICATION BY GOING TO `http://localhost:3000` ON YOUR BROWSER

## Additional Info For Developers

### HOSTS & PORTS
By default the server is running on localhost:5000, to change this modify your .env file

### The app symlink trick

There are many approaches outlined and discussed at length by the community in the great gist [Better local require() paths for Node.js](https://gist.github.com/branneman/8048520). I may soon decide to prefer either "just deal with lots of ../../../.." or use the [requireFrom](https://github.com/DSKrepps/requireFrom) modlue. However, at the moment, I've been using the symlink trick detailed below.

So one way to avoid intra-project requires with annoying relative paths like `require("../../../config")` is to use the following trick:

* create a symlink under node_modules for your src folder
  * cd node_modules && ln -nsf ../src
* add **just the node_modules/app symlink itself**, not the entire node_modules folder, to git
  * git add -f node_modules/src
  * and you can not ignore it in your .gitignore file by adding:
    * /node_modules/*
    * !node_modules/src
  * Yes, you should still have "node_modules" in your `.gitignore` file
  * No, you should not put "node_modules" into your git repository. Some people will recommend you do this. They are incorrect.
* Now you can require intra-project modules using this prefix
  * `var config = require("app/config");`
  * `var DealModel = require("app/deals/deal-model");`
* Basically, this makes intra-project requires work very similarly to requires for external npm modules.
* Sorry, Windows users, you need to stick with parent directory relative paths.