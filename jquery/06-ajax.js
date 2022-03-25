$.ajax({
  url: "./api/hi",
  type: "POST",//GET
  data: data,//{name: "tom", pwd: "123"}
  timeout: 5000,
  dataType: "json",
  success: function(data) {
    alert("success");
  },
  error: function(err) {
    alert("failure");
  }
});
