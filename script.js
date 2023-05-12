const card = document.querySelectorAll('.card');

card.forEach( el => {
    el.addEventListener('mousemove', e => {
        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardW = elRect.width / 2;
        let midCardH = elRect.height / 2;

        let angleY = -(x - midCardW) / 8;
        let angleX = (y - midCardH) / 8;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    })
    el.addEventListener('mouseleave', e => {
        el.children[0].style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    })
    })