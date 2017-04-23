import { load, click, setValue } from 'wdio-helpers';

describe ('Google', () => {
	it('Navigate to gooole', () => {
		load('https://www.google.com');
		click('#lst-ib');
		setValue('#lst-ib', 0, 'wdio-helpers');
	})
})