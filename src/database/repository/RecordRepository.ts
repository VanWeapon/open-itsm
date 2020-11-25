import { AbstractRepository, Repository } from "typeorm";
import { Record } from "../entity/system/Record";

export class RecordRepository extends AbstractRepository<Record> {
	private record: Record | undefined;
	private table: string;
	private specificRepository: Repository<any> | undefined;
	/**
	 * Initialises a new record with default values
	 * @param tableName the name of the table to create the new record on
	 */
	public newRecord(tableName: string) {
		this.specificRepository = this.manager.getRepository(tableName);
		this.record = this.specificRepository.create() as Record;
		if (this.record) {
			this.table = tableName;
		} else {
			this.throwInvalidTable();
			return;
		}
	}

	public setValue(fieldName: string, value: any) {
		if (!this.record) {
			this.throwNoRecord();
			return;
		}

		this.record[fieldName] = value;
	}

	public isValidField(fieldName: string) {
		if (!this.record || !this.specificRepository) {
			this.throwNoRecord();
			return;
		}
		const test = this.specificRepository.metadata.columns.find(
			(column) => column.propertyName === fieldName
		);
		return test !== undefined;
	}

	public getTableName() {
		return this.table;
	}

	private throwNoRecord() {
		throw new Error("Record has not been initalised");
	}

	private throwInvalidTable() {
		throw new Error("Table name not valid");
	}
}
