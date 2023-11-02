const categoriesElem = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesElem.children.length}`);

const items = categoriesElem.querySelectorAll('.item');
items.forEach(item => {
    const title = item.querySelector('h2');
    console.log(`\nCategoty: ${title.textContent}`);
    const listElements = item.querySelectorAll('ul li');
    console.log(`Elements: ${listElements.length}`);
});