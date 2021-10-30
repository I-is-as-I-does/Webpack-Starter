// import Something from 'somethingPackage';

function component() {
    const element = document.createElement('div');
    element.innerHTML = "bob"
    return element;
  }
  
  document.body.appendChild(component());