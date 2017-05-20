// XXX: this is not a thing. I'd like this file to 'import' or 'include' all the modules somehow.. maybe with adding script tags to DOM
import('core.js');
document.addEventListener('DOMContentLoaded', function(){ 
  DO.UI.initMenu([
    USER.menuItem(),
    POOP.menuItem(), 
    BTN.menuItem()
  ]); 
});