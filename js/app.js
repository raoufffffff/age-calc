let year = document.querySelector(".year")
let manth = document.querySelector(".manth")
let day = document.querySelector(".day")
let inpDay = document.querySelector(".inpday")
let inpManth = document.querySelector(".inpmanth")
let inpYear = document.querySelector(".inpyear")
let btn = document.querySelector(".btn")
let a = document.querySelectorAll(".a")
let p = document.querySelectorAll(".p")
let contanet = document.querySelector(".contanet")
let af = document.querySelectorAll(".o .a")


btn.addEventListener("click", () => {
    if (inpYear.value && inpDay.value && inpManth.value) {
        if (inpYear.value > 2023 || inpDay.value > 31 || inpManth.value > 30) {
            t()
            vall()
            addred()
            rCd()
            addC()
            year.innerHTML = "--"
            manth.innerHTML = "--"
            day.innerHTML = "--"
            return;
        }
        console.log(inpYear.value + "-" + inpManth.value + "-" + inpDay.value);
        var date = new Date();
        var d2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var y2 = date.getFullYear();
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (inpDay.value > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if (inpManth.value > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let y = y2 - inpYear.value
        let m = m2 - inpManth.value
        let d = d2 - inpDay.value
        year.innerHTML = y
        manth.innerHTML = m
        day.innerHTML = d
        f()
        vall()
        removered()
        rCd()
    } else {
        addred()
        vall()
        addD()
        year.innerHTML = "--"
        manth.innerHTML = "--"
        day.innerHTML = "--"
    }
})

function removered() {
    a.forEach((e) => {
        e.classList.remove("red")
    })
    btn.classList.remove("red")
}

function addD() {
    af.forEach((e) => {
        e.classList.add("d")
    })
}

function addC() {
    af.forEach((e) => {
        e.classList.add("c")
    })
}

function rCd() {
    af.forEach((e) => {
        e.classList.remove("c")
        e.classList.remove("d")
    })
}

function addred() {
    a.forEach((e) => {
        e.classList.add("red")
    })
    btn.classList.add("red")
}

function t() {
    p.forEach((e) => {
        e.classList.add("show")
    })
}

function f() {
    p.forEach((e) => {
        e.classList.remove("show")
    })
}

function vall() {
    inpDay.value = ""
    inpManth.value = ""
    inpYear.value = ""
}


// d = new Date(d).getTime()
// let Dae = new Date().getTime()
// let op = Dae - d
// op = op / 1000 / 60 / 60 / 24
// y = op / 30 / 12
// y = Math.floor(y)
// m = op / 30
// m = Math.floor(m % 12)
// d = Math.floor(op % 30)