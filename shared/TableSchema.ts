export type SchemaBody = {
	name: string; //the name of the table
	label: string; // The friendly name for the table
	extends?: string; //the name of the table this table extends
	fields?: SchemaField[]; //An array of fields to add to the table
	number?: {
		prefix: string;
		digits: number;
	}; //
};

export type SchemaField = {
	name: string; //the name of the field
	label: string; //friendly name of the field
	type: FieldType; // a valid field type string
	reference?: string; //mandatory for reference fields, the name of the table it links to
};

export enum FieldType {
	STRING = "string",
	GUID = "guid",
	REFERENCE = "reference",
	DATE = "date",
	DATETIME = "datetime",
	TIME = "time",
}
