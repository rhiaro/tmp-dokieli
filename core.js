if(typeof DO === 'undefined'){
  var DO = {
    
    UI: {
      initMenu: function(buttons){
        document.body.insertAdjacentHTML('beforeend', `
  <menu id="document-menu" class="do">
    <h1>do</h1>
    <ul></ul>
  </menu>`);

        var menu = document.getElementById("document-menu").querySelector("ul");
        buttons.forEach(function(ele){
          menu.appendChild(ele);
        });
      },

      getMenu: function(){
        return document.getElementById("document-menu");
      },

      makeMenuItem: function(id, text, event){
        var newButton = document.createElement('li');
        newButton.id = id;
        newButton.innerText = text;
        newButton.addEventListener('click', event);
        return newButton;
      },

      openDialog: function(id, header, contents){
        var open = document.querySelectorAll('aside.do');
        open.forEach(function(ele){
          DO.UI.closeDialog(ele.id);
        });
        var dialog = document.createElement('aside');
        dialog.classList.add("do");
        dialog.id = id;
        dialog.insertAdjacentHTML('afterbegin', "<h2>" + header + "</h2>");
        dialog.insertAdjacentHTML('beforeend', contents);
        document.body.appendChild(dialog);
      },

      closeDialog: function(id){
        var dialog = document.getElementById(id);
        dialog.parentNode.removeChild(dialog);
      },

      buttonClose: function() {
        document.addEventListener('click', function(e) {
          if (e.target.matches('button.close')) {
            var parent = e.target.parentNode;
            parent.parentNode.removeChild(parent);
          }
        });
      }
    }, // DO.UI

    HELPERS: {
      // useful helper functions and variables eg.
      'skipNodeWithClass': 'do',
      'skipClassWithValue': '',

      stripFragmentFromString: function(string) {
        if (typeof string === "string") {
          var stringIndexFragment = string.indexOf('#');

          if (stringIndexFragment >= 0) {
            string = string.substring(0, stringIndexFragment);
          }
        }
        return string;
      }
    },

    VOCAB: {
      // etc
    },

    RDF: {

      parse: function(){

      }

    }, // DO.RDF

    LDP: {

      getResource: function(){

      },

      postResource: function(){

      },

      putResource: function(){

      },

      deleteResrouce: function(){

      },

      getContainer: function(){

      }

    } // DO.LDP

  }; // DO
  
}