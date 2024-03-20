function createButton(text) {
    function element() {
      const buttonElement = document.createElement('button');
      buttonElement.innerText = text;
      return buttonElement;
    }
    return {
      element: element,
      text: text,
    }
  }
  
  const comprarBtn = createButton('Comprar')

