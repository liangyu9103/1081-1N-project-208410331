function changeUser(index) {
  var p = document.getElementById('section');
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML = '<img src="img/img1.jpg" width=60% /> </div>';
      break;
    case 2:
      p.innerHTML = '<img src="img/img2.jpg" width=60% /> </div>';
      break;
    case 3:
      p.innerHTML = '<img src="img/img3.jpg" width=60% /> </div>';
      break;
    case 4:
      p.innerHTML = '<img src="img/img4.jpg" width=60% /> </div>';
      break;
    case 5:
      p.innerHTML = '<img src="img/img5.jpg" width=60% /> </div>';
      break;
    case 6:
      p.innerHTML = '<img src="img/img6.jpg" width=60% /> </div>';
      break;
    case 7:
      p.innerHTML = '<img src="img/img7.jpg" width=60% /> </div>';
      break;
  }
}
