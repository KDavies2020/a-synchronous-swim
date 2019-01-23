


  $('body').on('keydown', (event) => {
  // var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  // if (arrowPress) {
  //    var direction = arrowPress[1];
    HttpFetcher.commandGetter();
  //}
});

$('button').on('click', function () {
  // var directions = ['Up', 'Down', 'Left', 'Right']
  // var direction = directions[Math.floor(Math.random() * 4)]
  HttpFetcher.commandGetter();
})



console.log('Client is running in the browser!');



