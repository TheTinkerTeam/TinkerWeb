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

```
`NODE_ENV=dev`
DEV_DB_HOST=<YOUR_DB_HOST>
DEV_APP_PORT=5000
DB_USER=<YOUR_DB_USER>
DB_PASS=<YOUR_DB_PASSWORD>
JWT_SECRET=<YOUR_JWT_SECRET>
```

\*\*Replace all <PLACE_HOLDERS> with your variables

**OR Move your exesting `.env` file to the backend folder**

`mv <your-.env-file-path> ~/TinkerWeb/backend`

## Run

### `npm start` the Backend (Server)

Move to the sub-directory called 'backend' (~/TinkerWeb/backend)

`cd ~/TinkerWeb/backend`

Start the server inside the backend folder

`npm start`

**--> NOW THE SERVER IS RUNNING IN THE TERMINAL <--**

### `npm start` the Frontend (Client)

**--> OPEN A NEW TERMINAL TO RUN THE FRONTEND <--**

Move to the sub-directory called frontend (~/TinkerWeb/frontend)

`cd ~/TinkerWeb/frontend`

Start the client inside the frontend folder

`npm start`

## THAT'S IT

YOU SHOULD SEE THE APPLICATION BY GOING TO `http://localhost:3000` ON YOUR BROWSER

## Additional Info For Developers

### HOSTS & PORTS

By default the server is running on localhost:5000, to change this modify your .env file
