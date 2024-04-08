const textcontainer = document.querySelector('div[class="text-container"]');
const nextbutton = document.querySelector('button[name="continue"]');
const readbutton = document.querySelector('button[name="read"]');

readbutton.style.display = 'none';
readbutton.style.margin = '0 auto';

// Если useragent содержит Android или iPhone, то добавляем класс mobile к body, иначе добавляем обработчики событий mousemove и mouseleave, иначе если страница about.html, то добавляем класс fade-in к div с классом image-container
if (/(android|iphone)/i.test(navigator.userAgent)) {
    document.body.classList.add('mobile');
}
else {
    console.log(window.location.pathname);
    if (window.location.pathname === '/about.html') {
        const imagecontainer = document.querySelector('div[class="image-container"]');
        imagecontainer.classList.add('fade-in');
    }
    else {
        document.addEventListener('mousemove', e => {
            const x = e.clientX;
            const y = e.clientY;
            document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(154,68,141, 1) 10%, rgba(33, 37, 41, 1))`;
        });
    }
}

function readMainText() {
    setTimeout(() => {
        textcontainer.classList.add('fade-out');
        window.location.href='/about.html';
    }, 1000);
}

function changeContent() {
    textcontainer.classList.add('fade-out');
    setTimeout(() => {
        const h1 = document.querySelector('h1');
        const p = document.querySelector('p');
        const logo = document.querySelector('img');

        h1.textContent = 'КАИТ №20 - настоящая контора пидорасов';
        p.textContent = 'Колледж автоматизации и информационных технологий №20 - это место, где ты ахуеешь от тупости местного руководства. Преподаватели массово увольняются, а студенты отчисляются. Все это из-за того, что директор колледжа - настоящий пидорас, как и его приближенные.';

        nextbutton.style.display = 'none';
        readbutton.style.display = 'block';
        logo.style.display = 'none';

        h1.style.textAlign = 'center';
        p.style.textAlign = 'center';

        textcontainer.classList.remove('fade-out');
        textcontainer.classList.add('fade-in');
    }, 500);
}
