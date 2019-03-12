# minmax

## Usage

	sails console

## With `limit()`:

	sails> Minmax.find({ min: { '<': 10 } }).limit(2).then(console.log).catch(console.log)
	Promise {
	  _bitField: 0,
	  _fulfillmentHandler0: undefined,
	  _rejectionHandler0: undefined,
	  _promise0: undefined,
	  _receiver0: undefined }
	sails> []

## Without `limit()`:

	sails> Minmax.find({ min: { '<': 10 } }).then(console.log).catch(console.log)
	Promise {
	  _bitField: 0,
	  _fulfillmentHandler0: undefined,
	  _rejectionHandler0: undefined,
	  _promise0: undefined,
	  _receiver0: undefined }
	sails> { Error: Consistency violation: Encountered unexpected internal error when attempting to normalize/validate the provided criteria:
	```
	{ min: { '<': 10 } }
	```
	And here is the actual error itself:
	```
	Error: The `min` clause is no longer supported in Sails/Waterline.
	In previous versions, `min` could be provided in a criteria to perform an aggregation query.  But as of Sails v1.0/Waterline v0.13, the usage has changed.  Now, to calculate the minimum value of an attribute across multiple records, use the `.find()` model method.

	For example:
	```
	// Get the smallest account balance from amongst all account holders
	// between the ages of 35 and 45.
	BankAccount.find('balance').where({
	  ownerAge: { '>=': 35, '<=': 45 }
	})
	.limit(1)
	.select(['balance'])
	.sort('balance ASC')
	}).exec(function (err, relevantAccounts){
	  // ...
	  var minBalance;
	  if (relevantAccounts[0]) {
	    minBalance = relevantAccounts[0].balance;
	  }
	  else {
	    minBalance = null;
	  }
	});
	```
	For more info, see:
	http://sailsjs.com/docs/reference/waterline-orm/models/find
	    at normalizeCriteria (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/private/normalize-criteria.js:297:11)
	    at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:623:24)
	    at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	    at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	    at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	    at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	    at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	    at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	    at repl:1:35
	    at Script.runInThisContext (vm.js:96:20)
	    at REPLServer.defaultEval (repl.js:332:29)
	    at bound (domain.js:395:14)
	    at REPLServer.runBound [as eval] (domain.js:408:12)
	    at REPLServer.onLine (repl.js:639:10)
	    at REPLServer.emit (events.js:194:15)
	    at REPLServer.EventEmitter.emit (domain.js:441:20)
	    at REPLServer.Interface._onLine (readline.js:290:10)
	    at REPLServer.Interface._line (readline.js:638:8)
	    at REPLServer.Interface._ttyWrite (readline.js:919:14)
	    at REPLServer.self._ttyWrite (repl.js:712:7)
	    at ReadStream.onkeypress (readline.js:168:10)
	    at ReadStream.emit (events.js:189:13)
	```
	    at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:637:17)
	    at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	    at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	    at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	    at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	    at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	    at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	    at repl:1:35
	    at Script.runInThisContext (vm.js:96:20)
	    at REPLServer.defaultEval (repl.js:332:29)
	    at bound (domain.js:395:14)
	    at REPLServer.runBound [as eval] (domain.js:408:12)
	    at REPLServer.onLine (repl.js:639:10)
	    at REPLServer.emit (events.js:194:15)
	    at REPLServer.EventEmitter.emit (domain.js:441:20)
	    at REPLServer.Interface._onLine (readline.js:290:10)
	    at REPLServer.Interface._line (readline.js:638:8)
	    at REPLServer.Interface._ttyWrite (readline.js:919:14)
	    at REPLServer.self._ttyWrite (repl.js:712:7)
	    at ReadStream.onkeypress (readline.js:168:10)
	    at ReadStream.emit (events.js:189:13)
	    at ReadStream.EventEmitter.emit (domain.js:441:20)
	  cause:
	   Error: Consistency violation: Encountered unexpected internal error when attempting to normalize/validate the provided criteria:
	   ```
	   { min: { '<': 10 } }
	   ```
	   And here is the actual error itself:
	   ```
	   Error: The `min` clause is no longer supported in Sails/Waterline.
	   In previous versions, `min` could be provided in a criteria to perform an aggregation query.  But as of Sails v1.0/Waterline v0.13, the usage has changed.  Now, to calculate the minimum value of an attribute across multiple records, use the `.find()` model method.

	   For example:
	   ```
	   // Get the smallest account balance from amongst all account holders
	   // between the ages of 35 and 45.
	   BankAccount.find('balance').where({
	     ownerAge: { '>=': 35, '<=': 45 }
	   })
	   .limit(1)
	   .select(['balance'])
	   .sort('balance ASC')
	   }).exec(function (err, relevantAccounts){
	     // ...
	     var minBalance;
	     if (relevantAccounts[0]) {
	       minBalance = relevantAccounts[0].balance;
	     }
	     else {
	       minBalance = null;
	     }
	   });
	   ```
	   For more info, see:
	   http://sailsjs.com/docs/reference/waterline-orm/models/find
	       at normalizeCriteria (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/private/normalize-criteria.js:297:11)
	       at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:623:24)
	       at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	       at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	       at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	       at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	       at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	       at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	       at repl:1:35
	       at Script.runInThisContext (vm.js:96:20)
	       at REPLServer.defaultEval (repl.js:332:29)
	       at bound (domain.js:395:14)
	       at REPLServer.runBound [as eval] (domain.js:408:12)
	       at REPLServer.onLine (repl.js:639:10)
	       at REPLServer.emit (events.js:194:15)
	       at REPLServer.EventEmitter.emit (domain.js:441:20)
	       at REPLServer.Interface._onLine (readline.js:290:10)
	       at REPLServer.Interface._line (readline.js:638:8)
	       at REPLServer.Interface._ttyWrite (readline.js:919:14)
	       at REPLServer.self._ttyWrite (repl.js:712:7)
	       at ReadStream.onkeypress (readline.js:168:10)
	       at ReadStream.emit (events.js:189:13)
	   ```
	       at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:637:17)
	       at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	       at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	       at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	       at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	       at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	       at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	       at repl:1:35
	       at Script.runInThisContext (vm.js:96:20)
	       at REPLServer.defaultEval (repl.js:332:29)
	       at bound (domain.js:395:14)
	       at REPLServer.runBound [as eval] (domain.js:408:12)
	       at REPLServer.onLine (repl.js:639:10)
	       at REPLServer.emit (events.js:194:15)
	       at REPLServer.EventEmitter.emit (domain.js:441:20)
	       at REPLServer.Interface._onLine (readline.js:290:10)
	       at REPLServer.Interface._line (readline.js:638:8)
	       at REPLServer.Interface._ttyWrite (readline.js:919:14)
	       at REPLServer.self._ttyWrite (repl.js:712:7)
	       at ReadStream.onkeypress (readline.js:168:10)
	       at ReadStream.emit (events.js:189:13)
	       at ReadStream.EventEmitter.emit (domain.js:441:20),
	  isOperational: true }
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	WARNING: A function that was initially called over 15 seconds
	ago has still not actually been executed.  Any chance the
	source code is missing an "await"?

	 [?] For more help, visit https://sailsjs.com/support
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	sails> Minmax.find({ min: { '<': 10 } }).limit(2).then(console.log).catch(console.log)
	Promise {
	  _bitField: 0,
	  _fulfillmentHandler0: undefined,
	  _rejectionHandler0: undefined,
	  _promise0: undefined,
	  _receiver0: undefined }
	sails> []
	sails> Minmax.find({ min: { '<': 10 } }).then(console.log).catch(console.log)
	Promise {
	  _bitField: 0,
	  _fulfillmentHandler0: undefined,
	  _rejectionHandler0: undefined,
	  _promise0: undefined,
	  _receiver0: undefined }
	sails> { Error: Consistency violation: Encountered unexpected internal error when attempting to normalize/validate the provided criteria:
	```
	{ min: { '<': 10 } }
	```
	And here is the actual error itself:
	```
	Error: The `min` clause is no longer supported in Sails/Waterline.
	In previous versions, `min` could be provided in a criteria to perform an aggregation query.  But as of Sails v1.0/Waterline v0.13, the usage has changed.  Now, to calculate the minimum value of an attribute across multiple records, use the `.find()` model method.

	For example:
	```
	// Get the smallest account balance from amongst all account holders
	// between the ages of 35 and 45.
	BankAccount.find('balance').where({
	  ownerAge: { '>=': 35, '<=': 45 }
	})
	.limit(1)
	.select(['balance'])
	.sort('balance ASC')
	}).exec(function (err, relevantAccounts){
	  // ...
	  var minBalance;
	  if (relevantAccounts[0]) {
	    minBalance = relevantAccounts[0].balance;
	  }
	  else {
	    minBalance = null;
	  }
	});
	```
	For more info, see:
	http://sailsjs.com/docs/reference/waterline-orm/models/find
	    at normalizeCriteria (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/private/normalize-criteria.js:297:11)
	    at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:623:24)
	    at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	    at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	    at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	    at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	    at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	    at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	    at repl:1:35
	    at Script.runInThisContext (vm.js:96:20)
	    at REPLServer.defaultEval (repl.js:332:29)
	    at bound (domain.js:395:14)
	    at REPLServer.runBound [as eval] (domain.js:408:12)
	    at REPLServer.onLine (repl.js:639:10)
	    at REPLServer.emit (events.js:194:15)
	    at REPLServer.EventEmitter.emit (domain.js:441:20)
	    at REPLServer.Interface._onLine (readline.js:290:10)
	    at REPLServer.Interface._line (readline.js:638:8)
	    at REPLServer.Interface._ttyWrite (readline.js:919:14)
	    at REPLServer.self._ttyWrite (repl.js:712:7)
	    at ReadStream.onkeypress (readline.js:168:10)
	    at ReadStream.emit (events.js:189:13)
	```
	    at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:637:17)
	    at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	    at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	    at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	    at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	    at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	    at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	    at repl:1:35
	    at Script.runInThisContext (vm.js:96:20)
	    at REPLServer.defaultEval (repl.js:332:29)
	    at bound (domain.js:395:14)
	    at REPLServer.runBound [as eval] (domain.js:408:12)
	    at REPLServer.onLine (repl.js:639:10)
	    at REPLServer.emit (events.js:194:15)
	    at REPLServer.EventEmitter.emit (domain.js:441:20)
	    at REPLServer.Interface._onLine (readline.js:290:10)
	    at REPLServer.Interface._line (readline.js:638:8)
	    at REPLServer.Interface._ttyWrite (readline.js:919:14)
	    at REPLServer.self._ttyWrite (repl.js:712:7)
	    at ReadStream.onkeypress (readline.js:168:10)
	    at ReadStream.emit (events.js:189:13)
	    at ReadStream.EventEmitter.emit (domain.js:441:20)
	  cause:
	   Error: Consistency violation: Encountered unexpected internal error when attempting to normalize/validate the provided criteria:
	   ```
	   { min: { '<': 10 } }
	   ```
	   And here is the actual error itself:
	   ```
	   Error: The `min` clause is no longer supported in Sails/Waterline.
	   In previous versions, `min` could be provided in a criteria to perform an aggregation query.  But as of Sails v1.0/Waterline v0.13, the usage has changed.  Now, to calculate the minimum value of an attribute across multiple records, use the `.find()` model method.

	   For example:
	   ```
	   // Get the smallest account balance from amongst all account holders
	   // between the ages of 35 and 45.
	   BankAccount.find('balance').where({
	     ownerAge: { '>=': 35, '<=': 45 }
	   })
	   .limit(1)
	   .select(['balance'])
	   .sort('balance ASC')
	   }).exec(function (err, relevantAccounts){
	     // ...
	     var minBalance;
	     if (relevantAccounts[0]) {
	       minBalance = relevantAccounts[0].balance;
	     }
	     else {
	       minBalance = null;
	     }
	   });
	   ```
	   For more info, see:
	   http://sailsjs.com/docs/reference/waterline-orm/models/find
	       at normalizeCriteria (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/private/normalize-criteria.js:297:11)
	       at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:623:24)
	       at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	       at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	       at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	       at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	       at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	       at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	       at repl:1:35
	       at Script.runInThisContext (vm.js:96:20)
	       at REPLServer.defaultEval (repl.js:332:29)
	       at bound (domain.js:395:14)
	       at REPLServer.runBound [as eval] (domain.js:408:12)
	       at REPLServer.onLine (repl.js:639:10)
	       at REPLServer.emit (events.js:194:15)
	       at REPLServer.EventEmitter.emit (domain.js:441:20)
	       at REPLServer.Interface._onLine (readline.js:290:10)
	       at REPLServer.Interface._line (readline.js:638:8)
	       at REPLServer.Interface._ttyWrite (readline.js:919:14)
	       at REPLServer.self._ttyWrite (repl.js:712:7)
	       at ReadStream.onkeypress (readline.js:168:10)
	       at ReadStream.emit (events.js:189:13)
	   ```
	       at forgeStageTwoQuery (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/utils/query/forge-stage-two-query.js:637:17)
	       at Deferred._.extend._WLModel [as _handleExec] (/Users/user/workspaces/paygo/minmax/node_modules/waterline/lib/waterline/methods/find.js:180:9)
	       at Deferred.exec (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:286:10)
	       at Deferred.tryCatcher (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/util.js:11:23)
	       at ret (eval at makeNodePromisifiedEval (/Users/user/workspaces/paygo/minmax/node_modules/bluebird/js/release/promisify.js:184:12), <anonymous>:14:23)
	       at Deferred.toPromise (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:572:19)
	       at Deferred.then (/Users/user/workspaces/paygo/minmax/node_modules/parley/lib/private/Deferred.js:431:22)
	       at repl:1:35
	       at Script.runInThisContext (vm.js:96:20)
	       at REPLServer.defaultEval (repl.js:332:29)
	       at bound (domain.js:395:14)
	       at REPLServer.runBound [as eval] (domain.js:408:12)
	       at REPLServer.onLine (repl.js:639:10)
	       at REPLServer.emit (events.js:194:15)
	       at REPLServer.EventEmitter.emit (domain.js:441:20)
	       at REPLServer.Interface._onLine (readline.js:290:10)
	       at REPLServer.Interface._line (readline.js:638:8)
	       at REPLServer.Interface._ttyWrite (readline.js:919:14)
	       at REPLServer.self._ttyWrite (repl.js:712:7)
	       at ReadStream.onkeypress (readline.js:168:10)
	       at ReadStream.emit (events.js:189:13)
	       at ReadStream.EventEmitter.emit (domain.js:441:20),
	  isOperational: true }
