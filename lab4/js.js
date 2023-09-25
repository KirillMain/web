document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
    const el2 = document.querySelector('.follow-cursor2')

    window.addEventListener('mousemove', e => { // при движении курсора
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('.image')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        el.classList.remove('hide')

        el2.classList.add('track_active')
        el2.classList.remove('hide')
      } 
      else { 
        el.classList.remove('follow-cursor_active') // удаляем активный класс
        el.classList.add('hide');

        el2.classList.remove('track_active')
        el2.classList.add('hide');
      }

      el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху

      el2.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el2.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
  }

  followCursor() // вызываем функцию followCursor

})