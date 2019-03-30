## Modern Health Coding Challenge
This is Logan's submission for Modern Health's coding challenge. Backend created using NodeJS and Express. Database is Postgres. Frontend uses React.

## Table of contents
* [Quickstart](#quickstart)
* [Installing](#installing)
* [Preparing the database](#preparing-the-database)
* [Installing NPM dependencies](#installing-npm-dependencies)
* [Cleaning and building bundle](#cleaning-and-building-bundle)
* [Running](#running)

### Quickstart
Because sometimes you just want to see it work
```
# Clone the project
git clone https://github.com/logansZeroes/modernHealth.git [PROJECT_NAME]
cd [PROJECT_NAME]

# Reset the git history and remote repo
rm -rf .git
git init
git add . && git commit -m "Initial Commit"
git remote add origin git@github.com:[USERNAME]/[REPO]

# Build and setup the database
brew services start postgresql
psql -d modern_health_api -f src/server/data/db/migrations/add_tables.sql
psql -d modern_health_api -f src/server/data/db/seeds/add_seed.sql

# Build npm dependencies
npm install
npm run build

# Run it
npm run dev [IF RUNNING NODEMON IN DEV]
npm start [IF RUNNING IN PROD]
```

Now go to [http://localhost:3000/][localhost] in your favorite browser. Huzzah!

### Installing
You should install [PostgreSQL][postgres] to your local machine if you haven't already done so. If you have a Mac and Homebrew installed, you can just do the following:
```
brew install postgres
```

Then start it:
```
brew services start postgresql
```

### Preparing the database
You need to create the modern_health_api database to run the app against. Run the following to create the database:
```
psql postgres
CREATE DATABASE modern_health_api;
```

Verify that the database has been created:
```
\list
```

If you see modern_health_api listed, congrats on successfully creating the database! Let's create the user now:
```
CREATE USER modern WITH PASSWORD 'health';
```

 Then terminate the command line sesson:
```
\q
```

Now you can migrate the tables over to your new database:
```
psql -d modern_health_api -f src/server/data/db/migrations/add_tables.sql
```

Finally, seed the tables with some fixture data:
```
psql -d modern_health_api -f src/server/data/db/seeds/add_seed.sql
```

### Installing NPM dependencies
To install the few packages using the Node Package Manager, just run:
```
npm install
```

### Cleaning and building bundle
To use webpack to build bundle, just run:
```
npm run build
```

### Running
Once you've installed PostgreSQL, prepared the database, added the dependencies, and created the bundle, you're ready to run the app:
```
npm run dev
```

You may instead run in prod like so (you won't be running nodemon which automatically reloads on code changes):
```
npm start
```

[localhost]: http://localhost:3000/
[postgres]: https://www.postgresql.org/docs/9.3/tutorial-install.html
