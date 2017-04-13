import _ from 'lodash';

/**
 * function wait()
 * Accepts selector to wait and scroll to that position
 */
export const wait = (selector) => {
	browser.waitForExist(selector);
  browser.scroll(selector);
}

/**
 * function click()
 * Accepts selector i.e., element to click
 * Accepts index (default 0) to click on element if there is multiple in page.
 */
export const click = (selector, index = 0) => {
	wait(selector);
	$$(selector)[index].click();
}

/**
 * function setValue()
 * Set Value in any selector
 * Accepts selector
 * Accepts index (default 0) to click on element if there is multiple in page.
 * Accepts Value the value to be set in selector
 */
export const setValue = (selector, index = 0, value = '') => {
	wait(selector);
	$$(selector)[index].clearElement();
	$$(selector)[index].setValue(value);
}

/**
 * function waitForElementToGo()
 * Waits until element is not visible in DOM
 * Accepts selector
 * Accepts index (default 0) to click on element if there is multiple in page.
 */
export const waitForElementToGo = (selector, index = 0) => {
	browser.waitUntil(() => {
		if (!_.isEmpty($$(selector))) {
    	return $$(selector)[index] && !$$(selector)[index].isVisible();
		} else {
			return true;
		}
  }, 100000, `${selector} didnot go until timeout`);
}

/**
 * function findElementFromGroupWithText()
 * Finds the element that matches with text given from the set of elements
 * Accepts selector
 * Accepts textToSearch i.e., the text to be searched in elements
 */
export const findElementFromGroupWithText = (groupSelector, textToSearch) => {
	wait(groupSelector);
	const group = $$(groupSelector);
	console.log(group);
	for (let i = 0; i < group.length; i++) {
		const element = group[i];
		console.log(element);
		console.log(element.getText());
		console.log(element.getText().includes(textToSearch));
		if (element.getText().includes(textToSearch)) {
			return element;
		}
	}
}