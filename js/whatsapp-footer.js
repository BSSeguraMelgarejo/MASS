var socialFloat = document.querySelector('.boton-Whatsapp');
var footer = document.querySelector('footer');

function checkOffset() {
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }
  
  if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
  {
    socialFloat.style.position = 'absolute';
    socialFloat.style.bottom='-220px';
  }
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
  {
    socialFloat.style.position = 'fixed'; // restore when you scroll up
    socialFloat.style.bottom='10px';
  }
  
  /*socialFloat.innerHTML = document.body.scrollTop*/ /*+ window.innerHeight*/;
}

document.addEventListener("scroll", function(){
  checkOffset();
});