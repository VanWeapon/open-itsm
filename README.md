# Open ITSM version 0

This project is an experiment to see if an ITSM product to rival corporate giants ServiceNow and Remedy is possible using the humble webdev toolkit

I will continue to add more schemas (tables) to the application.

## Languages & Technologies

This project will be written in TypeScript with some supporting platforms to be decided.
Database will be postgreSQL.
ORM is TypeORM so that there is minimal direct db maintenance required
Events will be API driven to support cross platform use.

UI will be created using web technologies, the plan is:

-   Browser Based
-   Desktop UI via Electron
-   Mobile UI TBC, PWA probably
-   CLI via NodeJS or Deno maybe

This way, all source code for UI Rendering is shareable to some extent across all platforms.

## The plan

-   [x] Prove that it's possible to run an ITSM ticketing tool in-memory using just runtime data and local JSON files for persistent storage
-   [x] Connect to a fully functional database solution, locally hosted alongside the client to begin with
-   [ ] Separate Server and Client so that the OpenITSM database (postgres) can sit in the cloud and accessed via any client (web/mobile/cli/desktop)

# Install and Use

### PostgreSQL

You will need to have PostgreSQL installed on the machine you are running this.

Then you can create 3 databases, named `openitsm-dev`, `openitsm-test` and `openitsm` to start using this. Create a user named `maint` and give it full access to these databases.

Create 3 schemas for each database `core`, `system`, and `itsm`. Public can be left alone.

I am working on SQL files to do this part automatically but not much is there yet. You will still need to create the `maint` user manually.

#### PGPass File

You need a `pgpass.conf` (windows) or `.pgpass` (unix) file which will store the username/password combos for the maint user. See the docs for this

Make sure to update the `.env` file with the appropriate settings once done, you decide your own credentials.

### OpenITSM API Server

This repo contains the API server with a connector for directly querying the postgres database.

The `openitsm` database inside of postgres will be where all the data is stored.

```bash
#download the repo
git clone https://github.com/VanWeapon/open-itsm.git
#change directory to the repo
cd open-itsm
#install the dependencies
npm install
#Launch the API server
npm run start
```

### API reference

```sh
# RECORDs
# GET all records for a table
http://localhost:3000/api/record/{tableName}
# GET a single record
http://localhost:3000/api/record/{tableName}/{recordID}

# UI Elements
# GET all UI elements for a table
http://localhost:3000/api/ui/{tableName}
# GET form elements for a table
http://localhost:3000/api/ui/{tableName}/form
# GET list elements for a table
http://localhost:3000/api/ui/{tableName}/list
# GET button elements for a table
http://localhost:3000/api/ui/{tableName}/actions

# SCHEMA details
# GET table column metadata
http://localhost:3000/api/schema/{tableName}
# GET single column metadata
http://localhost:3000/api/schema/{tableName}/{columnName}
```

# Feature list

In no particular order, here are some of the specific features to come for the project

-   [ ] A Record API for CRUD operations on table data
-   [ ] A Schema API for reading and modifying table and field definitions
-   [ ] A UI API for client applications to query and retreive information about how to render forms, lists and the ability to cache this information client-side for better performance
-   [ ] A field definitions table that will store information about all fields on all tables
-   [ ] A table definitions table that will store information about all tables
-   [ ] A task table as simple data record
-   [ ] A table for storing buttons that trigger server-side actions from the ui
-   [x] A table for storing users
-   [x] A table for storing access rights
-   [ ] A table for storing groups
