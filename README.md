<h1>Abount</h1>

Actions Invest is a small project made by me to help investors in startups and stock exchange. It was made with React, Next and Typescript.

<h1>How to run</h1>

You should have some dependencies, just install `Postgresql 14.0.0^` & `pgAdmin4`.

<h2>First Step</h2>

Clone repository in your Desktop's folder, open a terminal inside it and type `code .` (case if you have VSCode, otherwise, choose a source code editor by your preference)

<h2>Second Step</h2>

Open two terminals, one inside of 'front' folder and another inside of 'back' folder, after that type `npm i`

<h2>Third Step</h2>

Create a `.env` file inside root back folder with these fields and fill out with your informations:

```
//API
PORT="4000"

//DB
DB_PORT="5432"
DB_HOST="localhost"
DB_USER=""
DB_PASSWORD=""
DB_NAME=""
```

<h2>Fourth Step</h2>

Open **pgAdmin 4**, connect to database, open a query and paste this line `CREATE TABLE startups (id serial primary key, name varchar, description, varchar, email varchar, websitevarchar);` and run.

<h2>Fifth Step<h2>

Run `npm start' in terminal that you created inside back's folder and `npm run dev` inside front's folder. Access website in `http://localhost:3000` and the api `http://localhost:4000`


