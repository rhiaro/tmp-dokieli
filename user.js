var USER = {

  name: "Anonymous",
  
  menuItem: function(position){
    var item = DO.UI.makeMenuItem("menu-user", "Login", USER.getInput);
    return item;
  },

  getInput: function(){
    DO.UI.openDialog("box-user-input", "What is your name?", `
<input type="text" id="user-name" name="user-name" />
    `);
    var dialog = document.getElementById("box-user-input");
    dialog.insertAdjacentHTML('beforeend', `<input type="submit" id="user-name-submit" value="Save" />`);
    var sub = document.querySelector("#box-user-input #user-name-submit");
    sub.addEventListener('click', USER.saveName);
  },

  saveName: function(e){
    e.preventDefault();
    var name = e.target.previousElementSibling.value;
    var menu = DO.UI.getMenu();
    menu.insertAdjacentHTML('afterbegin', `<p>Hello `+name+`</p>`);
    USER.name = name;
  },

  getName: function(){
    return USER.name;
  }

}