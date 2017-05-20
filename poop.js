var POOP = {
  
  menuItem: function(){
    var item = DO.UI.makeMenuItem("menu-poop", "poop", POOP.doStuff);
    return item;
  },

  doStuff: function(){
    var name = USER.getName();
    DO.UI.openDialog("box-poop", "Poop here", "<p>This, " + name + ", is where poop happens.</p>");
    var dialog = document.getElementById("box-poop");
    dialog.insertAdjacentHTML('beforeend', "<p id=\"p-poop\">Here is another p</p>");
    var p = document.querySelector("#box-poop #p-poop");
    p.addEventListener('click', function(){
      console.log('clicked p');
    });
  }

}