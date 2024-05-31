const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    color = e.target.id;
    
    
    switch (color) {
      case 'grey':
        body.style.backgroundColor = color;
        break;
      case 'yellow':
        body.style.backgroundColor = color;
        break;
      case 'white':
        body.style.backgroundColor = color;
        break;
      case 'blue':
        body.style.backgroundColor = color;
        break;
  }
    
    
  });
});
