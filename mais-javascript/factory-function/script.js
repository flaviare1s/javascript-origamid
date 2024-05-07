function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements)

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none'
    })
    return $$(selectedElements) //ou return this
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial'
    })
    return $$(selectedElements) //ou return this
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback)
    })
    return $$(selectedElements) //ou return this
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    return $$(selectedElements) //ou return this
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    })
    return $$(selectedElements) //ou return this
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass, 
    removeClass,
  }
}

const btns = $$('button')

console.log(btns.hide().show().elements)

function handleClick(event) {
  console.log(event.target)
}

btns.on('click', handleClick)

btns.addClass('active')



// function createButton(text) {
//     function element() {
//       const buttonElement = document.createElement('button');
//       buttonElement.innerText = text;
//       return buttonElement;
//     }
//     return {
//       element: element,
//       text: text,
//     }
//   }
  
//   const comprarBtn = createButton('Comprar')

