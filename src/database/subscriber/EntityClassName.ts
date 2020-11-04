import {
	EventSubscriber,
	EntitySubscriberInterface,
	InsertEvent,
} from "typeorm";
import { Record } from "../entity/system/Record";

@EventSubscriber()
export class DictionarySubscriber implements EntitySubscriberInterface<Record> {
	beforeInsert(event: InsertEvent<Record>) {
		if (!event.entity) return;
		try {
			event.entity.class_name = event.metadata.tableName;
			event.entity.scope = event.metadata.schema!;
		} catch (error) {
			console.error(error);
			console.error(
				"Entity data: " +
					event.entity.guid +
					" " +
					event.metadata.tableName
			);
		}
	}
}
