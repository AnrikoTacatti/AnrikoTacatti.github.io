'use strict';

(function() {
  var catalogCart = document.querySelectorAll('.cart');
  var catalogCartSelected = document.querySelectorAll('.cart__selected');
  var cartLink = document.querySelectorAll('.cart__link');
  var cartDisabled = document.querySelector('.cart__disabled');

  for (var i = 0; i < catalogCart.length; i++) {
    catalogCart[i].addEventListener('click', onCardClick);
    catalogCart[i].addEventListener('keydown', onCardKeyDown);
    cartLink[i].addEventListener('click', cartLinkClick);
    
  }

  function cartLinkClick(evt) {
   var  element = evt.target.parentNode.parentNode.previousElementSibling;
    element.classList.toggle('cart__selected');
      
      element.onmouseleave = function() { 
      var hoverOut = element.querySelectorAll('.cart__defoult-hover');
      for (var i = 0; i < hoverOut.length; i++) {
          hoverOut[i].classList.add('cart-out');
   
      }
      
      
  }
  }
    
  function onCardClick(evt) {
    var self = evt.target;
    this.classList.toggle('cart__selected');
      if(evt.target.classList.contains('cart__selected')){



      evt.target.onmouseleave = function() { 
      var hoverOut = self.querySelectorAll('.cart__defoult-hover');
      for (var i = 0; i < hoverOut.length; i++) {
          hoverOut[i].classList.add('cart-out'); }
   
      }
      
   }
  }

  function onCardKeyDown(evt) {
    var KEY_CODE = {
      TAB: 9,
      ENTER: 13
    };

    if (evt.keyCode === KEY_CODE.TAB) return;
    if (evt.keyCode === KEY_CODE.ENTER) {
      this.classList.toggle('cart__selected');
    }
  }
})();