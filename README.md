# Open ITSM version 0

This project is an experiment to see if an ITSM product to rival Corporate Giants ServiceNow and Remedy is possible using the humble webdev toolkit

I will continue to add more schemas (tables) to the application.

## Languages & Technologies

This project will be written in TypeScript with some supporting platforms to be decided.
Database will be something open source, tossing up between postgres and mariadb, havent had enough time to decide.
For prototyping data will be stored as JSON inside local .db files.
Events will be API driven to support cross platform use.

UI will be created using web technologies, the plan is:

-   Browser Based first
-   Desktop UI via Electron
-   Mobile UI TBC, PWA probably
-   CLI via NodeJS or Deno maybe

This way, all source code for UI Rendering is shareable to some extent across all platforms.

## The plan

1. Prove that it's possible to run an ITSM ticketing tool in-memory using just runtime data and local JSON files for persistent storage
2. Connect to a fully functional database solution, locally hosted alongside the client to begin with
3. Separate Server and Client so that the OpenITSM database (mariadb/postgres) can sit in the cloud and accessed via any client (web/mobile/cli/desktop)

# Install and Use

### PostgreSQL

You will need to have PostgreSQL installed on the machine you are running this.

Then you can create a database named `openitsm` to start using this.

Use the `CreateDB.sql` and `Schema.sql` files to kick-start this if you want, but right now there isnt much there.

Make sure to update the `.env` file with the appropriate settings once done, you decide your own credentials.

### OpenITSM API Server

This repo contains the API server with a connector for directly querying the postgres database.

The `openitsm` database inside of postgres will be where all the data is stored.

```bash
#download the repo
git clone https://github.com/VanWeapon/open-itsm.git
#install the dependencies
npm install
#change directory to the repo
cd open-itsm
#Launch the API server
npm run start
```
