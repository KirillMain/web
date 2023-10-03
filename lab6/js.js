


function show() {
    const name = document.getElementById('name').value;
    document.getElementById('name_mark').innerHTML += "<b>" + name + "</b>";

    const vsxod = document.getElementById('vsxod').value;
    document.getElementById('vsxod_mark').innerHTML += "<b>" + vsxod + "</b>";

    const cvet = document.getElementById('cvet').value;
    document.getElementById('cvet_mark').innerHTML += "<b>" + cvet + "</b>";

    const harvest = document.getElementById('harvest').value;
    document.getElementById('harvest_mark').innerHTML += "<b>" + harvest + "</b>";


    const el = document.querySelector('.mark');
    el.classList.remove('hide');
}

function mark() {
    const el = document.getElementById('input_text');
    el.classList.remove('hide');
}

function send() {
    var data = document.getElementById('date').value; 
    //12.12.2012 00:00
    data = data.replaceAll('.', ' ').replaceAll(':', ' ').split(' ') 
    // ['12', '12', '12', '00', '00']

    // new Date(year, month, date, hours, minutes, seconds, ms)
    // var date = new Date(data[2], data[1], data[0], data[3], data[4])
    // console.log(date)

    var time = document.getElementById('vsxod').value;
    const vsxod_res = document.getElementById('vsxod_res');
    var date = new Date(data[2], data[1], data[0], data[3]+time, data[4])
    date = date.toString().replace(' GMT+0400 (Самарское стандартное время)', '');
    vsxod_res.innerHTML += date;

    var time = document.getElementById('cvet').value;
    const cvet_res = document.getElementById('cvet_res');
    var date = new Date(data[2], data[1], data[0], data[3]+time, data[4])
    date = date.toString().replace(' GMT+0400 (Самарское стандартное время)', '');
    cvet_res.innerHTML += date;


    var time = document.getElementById('harvest').value;
    const harvest_res = document.getElementById('harvest_res');
    var date = new Date(data[2], data[1], data[0], data[3]+time, data[4])
    date = date.toString().replace(' GMT+0400 (Самарское стандартное время)', '');
    harvest_res.innerHTML += date;


    const els = document.getElementsByClassName('res');
    for (var i=0; i<els.length; i++) {
        els[i].classList.remove('hide');
    }
}


    