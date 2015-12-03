(function(){
  function AppComponent() {
    this.search = ''
    this.explicit = false
    this.fetch = function() {
      console.log(this.explicit)
      if(this.explicit == true) {
        fetch('http://api.icndb.com/jokes/random?exclude=[explicit]').then(function(response) {
          return response.json()
        }).then(function(json) {
          document.getElementById('result').innerHTML = json.value.joke
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      } else {
        fetch('http://api.icndb.com/jokes/random').then(function(response) {
          return response.json()
        }).then(function(json) {
          // console.log('parsed json', json.value.joke)
          document.getElementById('result').innerHTML = json.value.joke
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      }

    }
  }

  AppComponent.annotations = [
    new angular.ComponentAnnotation({
      selector: 'titleHead'
    }),
    new angular.ViewAnnotation({
      template: '<h1>Chuck Norris Joke Bank</h1>' +
      '<button (click)="fetch()">Roundhouse joke me!</button>' + '<br/>' +
      '<input #string type="checkbox" (change)="explicit = true">No explcit jokes</input>' + '<br/>' +
      '<div id="joke"><p id="result">{{search}}<p></div>'
    })
  ];

  document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(AppComponent);
  });

})();
