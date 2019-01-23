var HttpFetcher = {



server: `http://127.0.0.1:3000/`,

commandGetter: function() {



    $.ajax({
      url: HttpFetcher.server,
      type:'GET',
      data: "",
      conentType: 'text/plain',
      success: function (data) {SwimTeam.move(data)},
      error: function (error) {
        console.error('Unable to update Swimmer Location', error);
      }
    })
  }

}
