SET RELPATH=%~dp0

dropdb -U postgres openitsm-dev
dropdb -U postgres openitsm-test
dropdb -U postgres openitsm

psql -c "DROP ROLE maint" -U postgres

