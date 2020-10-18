import {
	EventSubscriber,
	EntitySubscriberInterface,
	InsertEvent,
} from "typeorm";
import { Dictionary } from "../entity/system/Dictionary";

@EventSubscriber()
export class DictionarySubscriber
	implements EntitySubscriberInterface<Dictionary> {
	listenTo() {
		return Dictionary;
	}
	afterInsert(event: InsertEvent<Dictionary>) {
		event.entity.createDefaultLabel();
	}
}
