import { ColumnType } from "typeorm/driver/types/ColumnTypes";
import * as fs from "fs";
export type EntityJSON = {
	name: string;
	label: string;
	extends?: {
		label: string;
		name: string;
	};
	columns?: ColumnJSON[];
};
export type ColumnJSON = {
	type: ColumnType;
	name: string;
	length?: number;
};

export class EntityGenerator {
	public static validateJSON(newEntity: EntityJSON): boolean {
		const e = newEntity;
		if (!e || !e.name || !e.label) {
			return false;
		}

		if (e.columns) {
			if (!Array.isArray(e.columns)) {
				return false;
			}
			let validColumnJson = true;
			for (const c of e.columns) {
				if (!c.name || !c.type) {
					validColumnJson = false;
					break;
				}
				if (typeof c.length !== "number") {
					validColumnJson = false;
					break;
				}
			}
			if (!validColumnJson) {
				return false;
			}
		}

		return true;
	}

	public static async generateFromJSON(newEntity: EntityJSON) {
		const filePath = `src/database/entity/${newEntity.label}.ts`;

		if (fs.existsSync(filePath)) {
			return false;
		}

		let extendsImport = `import { ${newEntity.extends?.label} } from "./${newEntity.extends?.label}";`;

		let columnStr = "";
		if (newEntity.columns) {
			for (const column of newEntity.columns) {
				const name = column.name;
				let decorator = "";
				let JStype = "";
				switch (column.type) {
					case "uuid":
						decorator = `@Column("uuid")`;
						JStype = "string";
						break;
					case "text":
						decorator = `@Column("text")`;
						JStype = "string";
						break;
					case "varchar":
						decorator = `@Column("varchar", {length: ${column.length}})`;
						JStype = "string";
						break;
					case "int":
						decorator = `@Column("int")`;
						JStype = "number";
						break;
					default:
						break;
				}
				columnStr += `${decorator} ${name}: ${JStype};`;
			}
		}

		let scriptStr = `import { Entity, Column, BeforeInsert } from "typeorm";

		@Entity("${newEntity.name}")
		export class ${newEntity.label} extends ${
			newEntity.extends?.label || "Record"
		} {
			@BeforeInsert()
			setClassName(): void {
				this.class_name = "${newEntity.name}"
			}

			${columnStr}
		}`;

		if (newEntity.extends) {
			scriptStr = extendsImport + scriptStr;
		} else {
			extendsImport = `import { Record } from "./Record";`;
			scriptStr = extendsImport + scriptStr;
		}

		let result = true;
		try {
			fs.writeFileSync(filePath, scriptStr);
		} catch (error) {
			result = false;
			console.log(error);
		}

		return result;
	}
}
