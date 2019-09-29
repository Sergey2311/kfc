console.log('KFC');


const cheeseburger = {
    id: '2382',
    name: 'Чизбургер Де Люкс',
    avatarUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=250',
};

const hotdog = {
    id: '2382',
    name: 'Хот-дог куриный',
    avatarUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=250',
};

const avatarE1 = document.getElementById('avatar1'); 
const avatarE2 = document.getElementById('avatar2');
avatarE1.src = cheeseburger.avatarUrl;
avatarE2.src = hotdog.avatarUrl;


const authorNameE1 = document.getElementById('author-name1');
authorNameE1.textContent = cheeseburger.name;

const authorNameE2 = document.getElementById('author-name2');
authorNameE2.textContent = hotdog.name;