function change(index) {
  var p = document.getElementById("display");
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML = '<img src="images/TKU1.png" width=100% />';
      break;
    case 2:
      p.innerHTML = '<img src="images/TKU2.png" width=100% />';
      break;
    case 3:
      p.innerHTML = '<img src="images/TKU3.png" width=100% />';
      break;
    case 4:
      p.innerHTML = '<img src="images/TKU4.png" width=100% />';
      break;
    case 5:
      p.innerHTML = '<img src="images/TKU5.png" width=100% />';
      break;
  }
}
