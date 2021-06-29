function newJoke() {
  $.ajax({
    url: "http://api.icndb.com/jokes/random",
    dataType: "json",
    type: "GET",
    success: function (data) {
      const newJoke = "<p>" + data.value.joke + "</p";
      $("#displayJoke").html(newJoke);
    },
    error: function (jqXHR) {
      if (jqXHR.status == 0) {
        newJoke = "<P>Unable to access to de Page</>";
      } else if (jqXHR === 500) {
        newJoke = "<P> Error 500. Server Error</>";
      } else if (jqXHR == 404) {
        newJoke = "<P>Error 404, requested page not found</>";
      }
      $("#displayJoke").html(newJoke);
    },
  });
}
$("#joke").click(function () {
  newJoke();
  $("#norrisFace").toggleClass("rot");
});
newJoke();
