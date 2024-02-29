export function initDropdown() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    function handleClick(event) {
        event.preventDefault()
        this.classList.toggle('active')
    }

    dropdownMenus.forEach((menu) => {
        menu.addEventListener('touchstart', handleClick)
        menu.addEventListener('click', handleClick)
    })
}