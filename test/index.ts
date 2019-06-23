'use strict';

import { expect } from 'chai';
import { Example } from '../dist/index';

describe('Example class', () => {
	it('should create an instance using its constructor', () => {
		const example: Example = new Example();
		expect(example, 'example should exist').to.exist; // tslint:disable-line:no-unused-expression
	});
	it('should return whatever is passed to exampleMethod()', () => {
		const example: Example = new Example();
		const param: string = 'This is my param.';
		const returnValue: string = example.exampleMethod(param);
		expect(returnValue).to.equal(param, 'returns the value passed as a parameter');
	});
});
