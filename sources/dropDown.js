let historyDrop = document.querySelector('#history');
historyDrop.onclick = () => {
    let ph = document.getElementById('name-history');
    let p1 = document.getElementById('p1');
    ph.classList.toggle('display-block');
    p1.classList.toggle('rotate');
    console.log('Niggers')
}


let more = document.querySelector('#more-tog');
more.onclick = () => {
    let m = document.getElementById('more');
    let p2 = document.getElementById('p2');
    m.classList.toggle('display-block');
    p2.classList.toggle('rotate');
    console.log('Niggers')
}


// function pageScroll() {
//     window.scrollBy(0, window.innerHeight);
//     scrolldelay = setTimeout(pageScroll, 1);



// }



document.getElementById('call-to-1').onclick = () => {
    window.scroll({
        top: document.querySelector('.sec').offsetHeight + 80,
        behavior: 'smooth'
    })
}
 
