$(function(){

    const JQlampada = $('#JQlampada');
    const JQswitchOn = $('#JQswitchOn');
    const JQswitchOff = $('#JQswitchOff');
    const JQtitulo = $('.jquery > h2');

    const JQisBroke = ()=> {
        return JQlampada.attr("src").indexOf ('quebrada') > -1
    }

    const JQlampadaOn = ()=> {
        if(!JQisBroke()){
            JQlampada.attr("src","image/lampada-ligada.jpg");
            JQtitulo.css('color','#f0f014');
        }
    }
    
    const JQlampadaOff = ()=> {
        if(!JQisBroke()){
            JQlampada.attr("src","image/lampada-apagada.jpg");
            JQtitulo.css('color','#000');
        }
    }
    
    const JQlampadaBroke = ()=> {
        JQlampada.attr("src","image/lampada-quebrada.jpeg");
        JQtitulo.css('color','#f00');
    }

    JQswitchOn.on('click',JQlampadaOn);
    JQswitchOff.on('click',JQlampadaOff);
    JQlampada.on('mouseover',JQlampadaOn);
    JQlampada.on('mouseleave',JQlampadaOff);
    JQlampada.on('dblclick',JQlampadaBroke);

});