const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy;

module.exports = [
	{
		"name": "development",
		"type": "postgres",
		"host": "localhost",
		"port": 5432,
		"username": "maint",
		"database": "openitsm-dev",
		"synchronize": false,
		"logging": true,
		"entities": ["build/database/entity/**/*.js"],
		"migrations": ["build/database/migration/**/*.js"],
		"subscribers": ["build/database/subscriber/**/*.js"],
		"namingStrategy": new SnakeNamingStrategy(),
		"cli": {
			"entitiesDir": "src/database/entity",
			"migrationsDir": "src/database/migration",
			"subscribersDir": "src/database/subscriber"
		}
	},
	{
		"name": "test",
		"type": "postgres",
		"host": "localhost",
		"port": 5432,
		"username": "maint",
		"database": "openitsm-test",
		"synchronize": false,
		"dropSchema": false,
		"logging": ["warn", "error"],
		"entities": ["build/database/entity/**/*.js"],
		"migrations": ["build/database/migration/**/*.js"],
		"subscribers": ["build/database/subscriber/**/*.js"],
		"namingStrategy": new SnakeNamingStrategy(),

		"cli": {
			"entitiesDir": "src/database/entity",
			"migrationsDir": "src/database/migration",
			"subscribersDir": "src/database/subscriber"
		}
	},
	{
		"name": "production",
		"type": "postgres",
		"host": "localhost",
		"port": 5432,
		"username": "maint",
		"database": "openitsm",
		"synchronize": false,
		"dropSchema": false,
		"logging": true,
		"entities": ["build/database/entity/**/*.js"],
		"migrations": ["build/database/migration/**/*.js"],
		"subscribers": ["build/database/subscriber/**/*.js"],
		"namingStrategy": new SnakeNamingStrategy(),

		"cli": {
			"entitiesDir": "src/database/entity",
			"migrationsDir": "src/database/migration",
			"subscribersDir": "src/database/subscriber"
		}
	}
]
