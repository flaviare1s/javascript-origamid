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

    function outsideClick(element, events, callback) {
        const html = document.documentElement
        const outside = 'data-outside'

        if(!element.hasAttribute(outside)) {
            events.forEach(userEvent => {
                html.addEventListener(userEvent, handleOutsideClick)
            })
            element.removeAttribute(outside, '')
        }
        
        function handleOutsideClick(event) {
            if(!element.contains(event.target)) {
                element.removeAttribute(outside)
                events.forEach(userEvent => {
                    html.removeEventListener(userEvent, handleOutsideClick)
                })
                callback()
            }
        }
    }
}