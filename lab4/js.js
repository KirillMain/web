function main() {
  var el = document.getElementById("inp");
  console.log("main")

  var val = el.value;
  try {
    imgPaste("imgs/" + val + ".jpg", val);
  } catch {}

}


function imgPaste(path, id) {
  try {
    let qwe = document.getElementById('asd')
    qwe.remove();
  } catch (TypeError) { } //try чтобы предыдущие удалять
  const icon = document.createElement('img');
  icon.src = path;

  const container = document.querySelector('#icons-container');
  icon.classList.add('circle');
  icon.id = id;
  container.append(icon);
  icon.addEventListener('contextmenu', (event) => context(id, path), {once:true});
  // icon.removeEventListener('contextmenu', (event) => context(id, path));
  
  
}
// imgPaste("imgs/Harry Potter.jpg");


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

  // const win = document.querySelector(".triger");

  // win.addEventListener("click", targett);
  // win.removeEventListener("click", targett);
  
}

function targett() {
  let t = [0, 0];
  const el = document.querySelector("#image-container"); // ищем элемент, который будет следовать за курсором
  const el2 = document.querySelector('#track-container');
  const win = document.querySelector(".triger");
  
  console.log("targett")

  win.addEventListener('dblclick', e => qwe(e), {once:true})
  window.addEventListener('mousemove', e => asd(e, el, el2, t), true)
  // window.addEventListener('mousemove', e => )
  // window.removeEventListener("click", asd)
}
// target();

// const asd = aasd.bind(null);

function asd(e=0, el=0, el2=0, t=0) { // при движении курсора
  console.log("asd")
  
    
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
  const el = document.querySelector("#icons-container");
  el.style.transform = "translateY(-50%) translateX(-50%)";
  el.style.left = e.pageX + 'px'; // задаём элементу позиционирование слева
  el.style.top = e.pageY + 'px'; // задаём элементу позиционирование сверху
  console.log('qwe')

  let t = [0, 0];
  const el1 = document.querySelector("#image-container"); // ищем элемент, который будет следовать за курсором
  const el2 = document.querySelector('#track-container');
  window.removeEventListener('mousemove', e => asd(e, el1, el2, t), true)
}