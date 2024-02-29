import { outsideClick } from "./outside-click"

export function initDropdown() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    
    dropdownMenus.forEach((menu) => {
        menu.addEventListener('touchstart', handleClick)
        menu.addEventListener('click', handleClick)
    })

    function handleClick(event) {
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this, ['click', 'touchstart'], () => {
            this.classList.remove('active')
        })
    }
}

