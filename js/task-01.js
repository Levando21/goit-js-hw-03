/** @format */

function slugify(title) {
	let resultTitle = title.toLowerCase();
	let arrArr = resultTitle.split(" ");
	let strTitle = arrArr.join("-");
	return strTitle;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-
