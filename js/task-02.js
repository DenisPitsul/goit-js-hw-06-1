const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let liElements = [];
ingredients.forEach(ingredient => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  liElem.classList.add('item');
  liElements.push(liElem);
});

const ingredientsElem = document.querySelector('#ingredients');
ingredientsElem.append(...liElements);
