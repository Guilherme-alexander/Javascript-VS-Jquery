const lampada = document.querySelector('#lampada');
const switchOn = document.querySelector('#switchOn');
const switchOff = document.querySelector('#switchOff');
const titulo = document.querySelector('.javascript > h2');

const isBroke = ()=> {
    return lampada.src.indexOf ('quebrada') > -1
}

const lampadaOn = ()=> {
    if(!isBroke()){
        lampada.src = 'image/lampada-ligada.jpg';
        titulo.style.color = '#f0f014';
    }
}

const lampadaOff = ()=> {
    if(!isBroke()){
        lampada.src = 'image/lampada-apagada.jpg';
        titulo.style.color = '#000';
    }
}

const lampadaBroke = ()=> {
    lampada.src = 'image/lampada-quebrada.jpeg';
    titulo.style.color = '#f00';
}

switchOn.addEventListener('click',lampadaOn);
switchOff.addEventListener('click',lampadaOff);
lampada.addEventListener('mouseover',lampadaOn);
lampada.addEventListener('mouseleave',lampadaOff);
lampada.addEventListener('dblclick',lampadaBroke);

