let a = document.getElementById("one");
let b = document.getElementById("two");
let c = document.getElementById("three");
let d = document.getElementById("four");
let e = document.getElementById("five");

setInterval(function next() {
    if (a.getAttribute("checked") == "") {
        a.removeAttribute("checked");
        b.setAttribute("checked", "");
    }
    else if (b.getAttribute("checked") == "") {
        b.removeAttribute("checked");
        c.setAttribute("checked", "");
    }
    else if (c.getAttribute("checked") == "") {
        c.removeAttribute("checked");
        d.setAttribute("checked", "");
    }
    else if (d.getAttribute("checked") == "") {
        d.removeAttribute("checked");
        e.setAttribute("checked", "");
    }
    else if (e.getAttribute("checked") == "") {
        e.removeAttribute("checked");
        a.setAttribute("checked", "");
    }
    else {
        a.setAttribute("checked", "");
    }
}, 5000);


function nextButton() {
    if (a.getAttribute("checked") == "") {
        a.removeAttribute("checked");
        b.setAttribute("checked", "");
    }
    else if (b.getAttribute("checked") == "") {
        b.removeAttribute("checked");
        c.setAttribute("checked", "");
    }
    else if (c.getAttribute("checked") == "") {
        c.removeAttribute("checked");
        d.setAttribute("checked", "");
    }
    else if (d.getAttribute("checked") == "") {
        d.removeAttribute("checked");
        e.setAttribute("checked", "");
    }
    else{
        e.setAttribute("checked","");
    }
}

function prev() {
    if (e.getAttribute("checked") == "") {
        e.removeAttribute("checked");
        d.setAttribute("checked", "");
    }
    else if (d.getAttribute("checked") == "") {
        d.removeAttribute("checked");
        c.setAttribute("checked", "");
    }
    else if (c.getAttribute("checked") == "") {
        c.removeAttribute("checked");
        b.setAttribute("checked", "");
    }
    else if (b.getAttribute("checked") == "") {
        b.removeAttribute("checked");
        a.setAttribute("checked", "");
    }
    else {
        a.setAttribute("checked", "");
    }
}

