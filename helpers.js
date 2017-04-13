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
	wait(selector, index);
	$$(selector)[index].click();
}
