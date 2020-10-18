SET RELPATH=%~dp0

@echo off
SET /p pgport="Enter the port number for your PSQL database:"
SET /p MAINTPW="Please enter the new password for the OpenITSM maint user:"

@REM Create the 'maint' user who will be used for all openITSM db admin functions
psql -c "CREATE ROLE maint WITH SUPERUSER LOGIN PASSWORD '%MAINTPW%';" -U postgres -p %pgport%
@ECHO on 

@REM Create a dev, test and production database for OpenITSM and assign them to maint for ownership
createdb -p %pgport% -U postgres -O maint "openitsm-dev" "Development database for OpenITSM"
createdb -p %pgport% -U postgres -O maint "openitsm-test" "Testing database for OpenITSM"
createdb -p %pgport% -U postgres -O maint "openitsm" "Production database for OpenITSM"

@REM Run inital database setup via SQL to create default schemas
psql -f "./setup.sql" -d openitsm-dev -p %pgport% -U maint
psql -f "./setup.sql" -d openitsm-test -p %pgport% -U maint
psql -f "./setup.sql" -d openitsm -p %pgport% -U maint

@REM Clean up the migrations folder
DEL /F /Q %RELPATH%src\database\migration\*
DEL /F /Q %RELPATH%dist\*


@REM Compile and run migrations

CALL typeorm migration:generate -c development -n "init"
CALL tsc 

CALL typeorm migration:run -c development
CALL typeorm migration:run -c test
CALL typeorm migration:run -c production


SET NODE_ENV=development
CALL ts-node ./src/database/data/LoadSystemData.ts

SET NODE_ENV=test
CALL ts-node ./src/database/data/LoadSystemData.ts

SET NODE_ENV=production
CALL node ./dist/database/data/LoadSystemData.ts

