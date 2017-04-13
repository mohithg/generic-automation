export const wait = (selector, index) => {
	browser.waitForExist(selector);
  browser.scroll(selector);
}

export const click = (selector, index = 0) => {
	wait(selector, index);
	$$(selector)[index].click();
}
