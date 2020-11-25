import { DBUtil } from "../../util/DBUtil";
import { SystemUtil } from "../../util/SystemUtil";
import { clearData } from "./ClearAll";
const db = new DBUtil();
const sys = new SystemUtil();
(async () => {
	await db.connect("warn");
	sys.info("Clearing instance data from " + process.env.NODE_ENV);
	await clearData();
	sys.info("Data cleared, disconnecting");
	await db.disconnect();
})();
