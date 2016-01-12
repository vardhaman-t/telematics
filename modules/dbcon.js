var DB_SESSION = "gts";
var log = new Log();
var getDatabase = function() {
	var db = application.getDatabase(DB_SESSION);
	try{
		db = new Database("gts");
		application.put(DB_SESSION, db);
	} catch(e){
		log.error(e);
	}
	return db;
};