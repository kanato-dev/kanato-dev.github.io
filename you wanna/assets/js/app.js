let btnYes = document.getElementById('btn-yes');
let btnNot = document.getElementById('btn-not');


var countOfNotClicks = 0;

btnYes.addEventListener('click', () => {
    alert('Gracia, sabia que aceptarias, besos en esas nalgas :)');
});

btnNot.addEventListener('mousemove', () => {
    let randomX = Math.round(Math.random() * 60);
    let randomY = Math.round(Math.random() * 90);

    btnNot.style.left = randomX + "%";
    btnNot.style.top  = randomY + "%";
    
    countOfNotClicks++;


    if (countOfNotClicks >= 20) {
        btnNot.style.display = 'none';
        alert('Y ahora que tal!')
    }
});