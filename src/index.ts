'use strict';

import { Logger } from 'sitka';

export class Example {
	/* Private Instance Fields */

	private _logger: Logger;

	/* Constructor */

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	/* Public Instance Methods */

	public exampleMethod(param: string): string {
		this._logger.debug('Received: ' + param);
		return param;
	}
}
