const userName = document.getElementById('Username');
const passWord = document.getElementById('Password');
const btn = document.getElementById('Btn');
const users = [
  {
    name: 'Sasha',
    sign: '12345'
  },
  {
    name: 'Pasha',
    sign: '54321'
  }
];

const authorizationFun = () => {
  users.find(({name, sign}) => name === userName.value && sign === passWord.value)?
    window.location = 'calculator.html':
    alert ('Error. Login or password is incorrect.'); 
}

btn.onclick = () => {
  authorizationFun();
}
