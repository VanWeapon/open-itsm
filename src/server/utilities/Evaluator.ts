import { getConnection } from "typeorm";
import { Record } from "../../database/entity/system/Record";
import { parse, eval } from "expression-eval";
export class Evaluator {
	private variables: [{ name: string; value: any }];
	private table: string;
	private targetID: string;
	private script: string;
	private result: any;
	constructor(table: string, target: string) {
		this.table = table;
		this.targetID = target;

		getConnection(process.env.NODE_ENV)
			.getRepository<Record>(this.table)
			.findOne(this.targetID)
			.then((record) => {
				if (record) {
					this.variables.push({ name: "target", value: record });
					return this;
				} else {
					return null;
				}
			})
			.catch((error) => {
				console.log(error);
				return null;
			});
	}

	public setScript(script: string) {
		this.script = script;
	}

	public putVariable(name: string, value: any) {
		this.variables.push({ name, value });
	}

	public getVariable(name: string) {
		return this.variables.find((variable) => variable.name === name);
	}

	public evaluateScript() {
		let result;
		const scriptString = this.script;

		const tree = parse(scriptString);
		const context: { [index: string]: {} } = {};

		this.variables.forEach((v) => {
			context[v.name] = v.value;
		});

		// tslint:disable-next-line: no-eval
		result = eval(tree, context);
		this.result = result;
		return result;
	}

	public async evaluateAsync() {
		return new Promise((resolve, reject) => {
			try {
				this.evaluateScript();
				resolve(this.result);
			} catch (error) {
				reject(error);
			}
		});
	}
}
