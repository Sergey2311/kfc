console.log('KFC');

const cheeseburger = {
    id: '2382',
    name: 'Чизбургер Де Люкс',
    photoUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=400',
    structure: 'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.',
    options: '226 Г   193 Ккал   Б:12.6г Ж:6.6г У:20.7г',
};

const hotdog = {
    id: '2382',
    name: 'Хот-дог куриный',
    photoUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=400',
    structure: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    options: '124 Г   226 Ккал   Б:9.6г Ж:10.1г У:24.3г',
};

const photoE1 = document.getElementById('photo1'); 
photoE1.src = cheeseburger.photoUrl;
const photoE2 = document.getElementById('photo2');
photoE2.src = hotdog.photoUrl;
const foodNameE1 = document.getElementById('food-name1');
foodNameE1.textContent = cheeseburger.name;
const foodNameE2 = document.getElementById('food-name2');
foodNameE2.textContent = hotdog.name;
const foodStructureE1 = document.getElementById('food-structure1');
foodStructureE1.textContent = cheeseburger.structure;
const foodStructureE2 = document.getElementById('food-structure2');
foodStructureE2.textContent = hotdog.structure;
const foodOptionsE1 = document.getElementById('food-options1');
foodOptionsE1.textContent = cheeseburger.options;
const foodOptionsE2 = document.getElementById('food-options2');
foodOptionsE2.textContent = hotdog.options;