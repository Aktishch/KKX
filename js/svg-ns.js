const svgNS = document.querySelector('.-svg-ns-');

if(svgNS){
    let svgNSX = svgNS.getBoundingClientRect().x;
    let svgNSY = svgNS.getBoundingClientRect().y;
    let svgNSWidth = svgNS.getBoundingClientRect().width;
    let ratio = 881 / svgNSWidth;


    const mapLinks = document.querySelectorAll('.touring__country');
    let mapIcon = document.querySelector('.touring__city');
    let mapText = document.querySelector('.touring__text');
    mapLinks.forEach(el => {

        el.addEventListener('click', (e) => {
            e.preventDefault();
            mapIcon.src = el.dataset.img;
            mapText.innerText = el.dataset.text;
        });

        let path = el.querySelector('path');
        let pathWidth = path.getBoundingClientRect().width * ratio;
        let pathHeight = path.getBoundingClientRect().height * ratio;
        let rectX = (path.getBoundingClientRect().x - svgNSX) * ratio + pathWidth / 2;
        let rectY = (path.getBoundingClientRect().y - svgNSY) * ratio + pathHeight / 2;

        let rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttribute('x', rectX);
        rect.setAttribute('y', rectY);
        rect.setAttribute('height', '16');
        rect.setAttribute('rx', '2');
        rect.setAttribute('fill', 'white');
        rect.classList.add('-pointer-events-');
        rect.style.visibility = 'hidden';
        
        svgNS.appendChild(rect);

        let flag = document.createElementNS("http://www.w3.org/2000/svg", 'image');
        flag.setAttribute('href', 'icons/flag.svg');
        flag.setAttribute('x', rectX);
        flag.setAttribute('y', rectY - 15);
        flag.setAttribute('height', '18');
        flag.setAttribute('width', '18');
        flag.classList.add('-pointer-events-');

        svgNS.appendChild(flag);

        let text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('x', rectX + 3);
        text.setAttribute('y', rectY + 13);
        text.classList.add('text-12');
        text.classList.add('touring__text');
        text.setAttribute('fill', 'black');
        text.innerHTML = el.dataset.country;
        text.classList.add('-pointer-events-');
        text.style.visibility = 'hidden';

        svgNS.appendChild(text);

        rect.setAttribute('width', (text.getBoundingClientRect().width + 6) * ratio);

        path.addEventListener('mouseover', () => {
            text.style.visibility = 'visible';
            rect.style.visibility = 'visible';
        });

        path.addEventListener('mouseleave', () => {
            text.style.visibility = 'hidden';
            rect.style.visibility = 'hidden';
        });
    });
}