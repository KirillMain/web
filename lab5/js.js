function remove() {
    // el.classList.remove(txt1)
    
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function qwe(e) {
    
    var txt = "#" + e.target.id;
    console.log(txt)
    bool[parseInt(txt[txt.length-1], 10)-1] = true;
    
    const el = document.querySelector(txt);

    for (var i=1; i<=els.length; i++) {
        
        console.log(txt, parseInt(txt[txt.length-1], 10)-1)
        console.log(bool[parseInt(txt[txt.length-1], 10)-1])

        if (!bool[parseInt(txt[txt.length-1], 10)-1]) {
            return;
        }

        var txt1 = 'font' + i
        el.classList.add(txt1);
        await remove();
        el.classList.remove(txt1);
        console.log(i)
    }
    if (bool[parseInt(txt[txt.length-1], 10)-1]) {
        qwe(e);
    }
    else {
        return;
    }

}

function asd(e) {
    var txt = "#" + e.target.id;
    const el = document.querySelector(txt);
    bool[parseInt(txt[txt.length-1], 10)-1] = false;
    
    for (var i=1; i<=els.length; i++) {
        try {
            el.classList.remove("font" + i);
        }
        catch {}
    }
}


var bool = [];
const els = document.querySelectorAll(".li");
console.log(els.length)
for (var i=0; i<els.length; i++) {
    bool.push(true);

    els[i].addEventListener("mouseover", e=> qwe(e));
    els[i].addEventListener("mouseout", e=> asd(e));
}

