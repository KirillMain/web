function main() {
  var el = document.getElementById("inp");
  console.log("main")

  var val = el.value;
  var txt = "imgs/" + val + ".jpg";


  const icon = document.createElement('img');
  icon.src = txt;

  const container = document.querySelector('#icons-container');
  icon.classList.add('circle');
  icon.id = val;

  container.append(icon);

  icon.addEventListener('contextmenu', (event) => context(val, txt)); //, {once:true}
}




function context(id, path) {
  const icon = document.getElementById(id);
  icon.remove();

  try {
    const tr = document.querySelector('.cont');
    tr.remove();
  } catch {}

  const img = document.createElement('img');
  img.src = path;
  const container = document.querySelector('#image-container');
  img.classList.add('circle');
  img.classList.add('cont');
  img.id = id;
  container.append(img);

  console.log("context");
  targett();
}


function targett() {
  console.log("targett");

  let t = [0, 0];
  const el = document.querySelector("#image-container"); 
  const el2 = document.querySelector('#track-container');

  if (bool) return
  bool = true;

  window.addEventListener('mousemove', e => asd(e, el, el2, t), true);
}


var bool = false;

function asd(e, el, el2, t) { // при движении курсора
  console.log("asd");
  window.removeEventListener('mousemove', e => asd(e, el, el2, t), true);
  
  if (!bool) {
    return window.removeEventListener('mousemove', asd(e, el, el2, t), true);
  }
    
  const target = e.target; // определяем, где находится курсор
  if (!target) return
  
  if (target.closest('.image')) { // если курсор наведён на фото
    el.classList.add('follow-cursor_active');
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
    el.classList.remove('follow-cursor_active');
    el.classList.add('hide');

    t = [0, 0];
  }

  el.style.left = e.pageX + 'px'; 
  el.style.top = e.pageY + 'px';
}

function dbclick() {
  var el = document.querySelector('.triger');
  var track = document.getElementById('track-container')
  var image = document.getElementById('image-container')
  if (el.classList.contains('hiden')) {
    el.classList.remove('hiden');
    track.classList.remove('hide');
    // image.classList.remove('hide');
  }
  else {
    el.classList.add('hiden');
    track.classList.add('hide');
    // image.classList.add('hide');
  }
}