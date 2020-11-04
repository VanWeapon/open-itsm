"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityGenerator = void 0;
const fs = require("fs");
class EntityGenerator {
    static validateJSON(newEntity) {
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
    static generateFromJSON(newEntity) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = `src/database/entity/${newEntity.label}.ts`;
            if (fs.existsSync(filePath)) {
                return false;
            }
            let extendsImport = `import { ${(_a = newEntity.extends) === null || _a === void 0 ? void 0 : _a.label} } from "./${(_b = newEntity.extends) === null || _b === void 0 ? void 0 : _b.label}";`;
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

@Entity("${newEntity.name}", {schema: "${newEntity.schema}"})
export class ${newEntity.label} extends ${((_c = newEntity.extends) === null || _c === void 0 ? void 0 : _c.label) || "Record"} {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "${newEntity.name}"
	}

	${columnStr}
}`;
            if (newEntity.extends) {
                scriptStr = extendsImport + scriptStr;
            }
            else {
                extendsImport = `import { Record } from "./Record";`;
                scriptStr = extendsImport + scriptStr;
            }
            let result = true;
            try {
                fs.writeFileSync(filePath, scriptStr);
            }
            catch (error) {
                result = false;
                console.log(error);
            }
            return result;
        });
    }
}
exports.EntityGenerator = EntityGenerator;
//# sourceMappingURL=EntityGenerator.js.map