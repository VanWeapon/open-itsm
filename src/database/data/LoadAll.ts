import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { loadCoreData } from "./LoadCoreData";
import { loadSystemData } from "./LoadSystemData";
import { loadItsmData } from "./LoadITSMData";
import { clearData } from "./ClearAll";
import { loadCMDBData } from "./LoadCMDBData";
import { DBUtil } from "../../util/DBUtil";
import { SystemUtil } from "../../util/SystemUtil";
const db = new DBUtil();
const su = new SystemUtil();
const start = async () => {
	await db.connect("warn");

	await clearData();
	su.info("ClearData finished");
	await loadSystemData();
	su.info("LoadSystemData finished");
	await loadCoreData();
	su.info("LoadCoreData finished");
	await loadCMDBData();
	su.info("LoadCMDBData finished");
	await loadItsmData();
	su.info("LoadItsmData finished");
	su.info("Finishing LoadAll and closing connection");

	await su.sleep(1500);
	su.info("Returning connection");
	await db.disconnect();
	return true;
};

start();
