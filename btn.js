var BTN = {
  
  menuItem: function(position){
    var item = DO.UI.makeMenuItem("menu-abc", "abc", BTN.onclick);
    return item;
  },

  onclick: function(){
    console.log('clicked btn');
  }

}