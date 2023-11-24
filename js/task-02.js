const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let liElements = ingredients.map(ingredient => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  liElem.classList.add('item');
  return liElem;
});

const ingredientsElem = document.querySelector('#ingredients');
ingredientsElem.append(...liElements);
