function change(index) {
  var p = document.getElementById("tku_midterm");
  switch (index) {
    case 1:
      p.innerHTML = '<iframe width=100% height=100% src="./p1/index.html">';
      break;
    case 2:
      p.innerHTML = '<iframe width=100% height=100% src="./p2/div_id.html">';
      break;
    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="./p3/tictactoe_id.html">';
      break;
    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="./p4/myclass_id.html">';
      break;
  }
}
