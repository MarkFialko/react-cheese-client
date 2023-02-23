/**
 * Проверяет нажатую клавишу на Escape
 * @param event событие с клавиатуры
 */
export default (event: KeyboardEvent) => {
    return event.key == "Escape"
}