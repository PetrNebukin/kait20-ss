document.addEventListener('mousemove', e => {
	const x = e.clientX;
	const y = e.clientY;
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(154,68,141, 1) 10%, rgba(33, 37, 41, 1))`;
});

document.addEventListener('mouseleave', () => {
    document.body.style.background = 'rgba(33, 37, 41, 1)';
});

function changeContent() {
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const button = document.querySelector('button');
    const logo = document.querySelector('img');

    h1.textContent = 'КАИТ №20 - настоящая контора пидорасов';
    p.textContent = 'Колледж автоматизации и информационных технологий №20 - это место, где ты ахуеешь от тупости местного руководства. Преподаватели массово увольняются, а студенты отчисляются. Все это из-за того, что директор колледжа - настоящий пидорас, как и его приближенные.';

    button.style.display = 'none';
    logo.style.display = 'none';
    h1.style.textAlign = 'center';
    p.style.textAlign = 'center';

    h1.classList.add('fade-in');
    p.classList.add('fade-in');
}
