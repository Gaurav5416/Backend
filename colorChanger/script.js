const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button.id);
  button.addEventListener('click', (e) => {
    color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
    }
  });
});
