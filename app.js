(function(){
  function AppComponent() {
    this.search = ''
    //redefine explicit to be false
    this.explicit = false
    this.fetch = function() {
      console.log(this.explicit)
      //if button is clicked, explicit is true
      if(this.explicit == true) {
        //true will fetch api for jokes that remove explicit jokes
        fetch('http://api.icndb.com/jokes/random?exclude=[explicit]').then(function(response) {
          return response.json()
        }).then(function(json) {
          //render and push to dom
          document.getElementById('result').innerHTML = json.value.joke
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      } else {
        //if explicit is false it will continue and include all jokes, including explicit ones
        fetch('http://api.icndb.com/jokes/random').then(function(response) {
          return response.json()
        }).then(function(json) {
          // console.log('parsed json', json.value.joke)
          //push and render joke to dom
          document.getElementById('result').innerHTML = json.value.joke
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      }

    }
  }
//renders tags in the html tag titleHead
  AppComponent.annotations = [
    new angular.ComponentAnnotation({
      selector: 'titleHead'
    }),
    // tags for html
    new angular.ViewAnnotation({
      template: '<h1>Chuck Norris Joke Bank</h1>' +
      '<button (click)="fetch()">Roundhouse joke me!</button>' + '<br/>' +
      '<input #string type="checkbox" (change)="explicit = true">No explcit jokes</input>' + '<br/>' +
      '<div id="joke"><p id="result">{{search}}<p></div>'
    })
  ];

  //dom listens for the angular render
  document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(AppComponent);
  });

})();
