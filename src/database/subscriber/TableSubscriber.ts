import {
	EventSubscriber,
	EntitySubscriberInterface,
	InsertEvent,
} from "typeorm";
import { Table } from "../entity/system/Table";

@EventSubscriber()
export class TableSubscriber implements EntitySubscriberInterface<Table> {
	listenTo() {
		return Table;
	}

	afterInsert(event: InsertEvent<Table>) {
		event.entity.createDefaultDictionaries();
	}
}
