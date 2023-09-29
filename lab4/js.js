function main() {
  var el = document.getElementById("inp");
  console.log("main")

  var val = el.value;
  var txt = "imgs/" + val + ".jpg";
  // try {
    
  //   imgPaste(txt, val);
  // } catch {}
  const qwe = document.querySelector('.triger')
  qwe.addEventListener('click', e => imgPaste(txt, val, e))
}


function imgPaste(path, id, e) {
  // try {
  //   let qwe = document.getElementById('asd')
  //   qwe.remove();
  // } catch (TypeError) { } //try чтобы предыдущие удалять

  const icon = document.createElement('img');
  icon.src = path;

  const container = document.querySelector('#icons-container');
  icon.classList.add('circle');
  icon.id = id;

  icon.style.transform = "translateY(-50%) translateX(-50%)";
  icon.style.left = e.pageX + 'px'; // задаём элементу позиционирование слева
  icon.style.top = e.pageY + 'px';

  container.append(icon);

  icon.addEventListener('contextmenu', (event) => context(id, path), {once:true});
}


function context(id, path) {
  const icon = document.getElementById(id);
  // icon.classList.add('hide');

  const img = document.createElement('img');
  img.src = path;
  const container = document.querySelector('#image-container');
  img.classList.add('circle');
  img.id = id;
  container.append(img);

  console.log("context")
  targett()
}


function targett() {
  let t = [0, 0];
  const el = document.querySelector("#image-container"); // ищем элемент, который будет следовать за курсором
  const el2 = document.querySelector('#track-container');
  const win = document.querySelector(".triger");
  
  console.log("targett")
  bool = true;

  win.addEventListener('dblclick', e => qwe(e), {once:true})
  window.addEventListener('mousemove', e => asd(e, el, el2, t), true)
}


var bool = true;

function asd(e, el, el2, t) { // при движении курсора
  console.log("asd")
  
  if (!bool) {
    return
  }
    
  const target = e.target; // определяем, где находится курсор
  if (!target) return
  
  if (target.closest('.image')) { // если курсор наведён на фото
    el.classList.add('follow-cursor_active'); // элементу добавляем активный класс
    el.classList.remove('hide');

    el2.classList.remove('hide');

    if ((e.pageX - t[0]) ** 2 + (e.pageY - t[1]) ** 2 >= 20000) {
      t[0] = e.pageX, t[1] = e.pageY;

      const img = document.createElement('img');
      img.src = "track.png";

      const container = document.querySelector('#track-container');
      img.classList.add('track');
      img.style.left = e.pageX + 'px';
      img.style.top = e.pageY + 'px';

      container.append(img);
      setTimeout(() => img.remove(), 1000);
    }
  }
  else {
    el.classList.remove('follow-cursor_active'); // удаляем активный класс
    el.classList.add('hide');

    t = [0, 0];
  }

  el.style.left = e.pageX + 'px'; // задаём элементу позиционирование слева
  el.style.top = e.pageY + 'px'; // задаём элементу позиционирование сверху
}

function qwe(e) {
  const el1 = document.querySelector("#icons-container");
  el1.style.transform = "translateY(-50%) translateX(-50%)";
  el1.style.left = e.pageX + 'px'; // задаём элементу позиционирование слева
  el1.style.top = e.pageY + 'px'; // задаём элементу позиционирование сверху
  console.log('qwe')
  bool = false;
}

function dbclick() {
  var el = document.querySelector('.triger');
  if (el.classList.contains('hiden')) {
    el.classList.remove('hiden');
  }
  else {
    el.classList.add('hiden');
  }
}