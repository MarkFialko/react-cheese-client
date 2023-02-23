/**
 *  Добавляет и убирает overflow для body,
 *  если нужно запретить или разрешить скролл при открытых модальных окнах, меню
 * @param isVisible буллевое значение, открыто модальное окно или меню
 */
export default (isVisible: boolean) => {
    if (isVisible) {
        document.body.classList.add("overflow-hidden")
        document.querySelector("html")!.style.overflowY = 'hidden'
    } else {
        document.body.classList.remove("overflow-hidden")
        document.querySelector("html")!.style.overflowY = ''
    }
}