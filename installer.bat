@echo off

SET PGUSER=maint
SET PGPASSWORD=admin
SET PGHOST=localhost
SET PGDATABSE=openitsm-dev
SET PGPORT=5432

psql -f "./setup.sql" "user=%PGUSER% password=%PGPASSWORD% dbname=%PGDATABSE%"



