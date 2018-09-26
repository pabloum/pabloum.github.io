window.onscroll = function() {
  checkSklls();
}

function myFunction() {
  var x = document.getElementById("container");
  if (x.className === "container"){
    x.className += " responsive";
  } else {
    x.className = "container";
  }
}


function overRemover() {
  var x = document.querySelectorAll(".over");
  setTimeout(function(){x.forEach(item => item.classList.remove("over"));}, 100);
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}

function checkSklls() {
  var old_visible;
  var skills = document.getElementsByClassName('skills')[0];
  var visible = isElementInViewport(skills);
  if (visible !=old_visible && visible) {
    old_visible = visible;
    overRemover();
  } else if (!visible) {
    var y = skills.getElementsByTagName('div');
    var arr = Array.prototype.slice.call(y);
    arr.forEach(item => item.classList.add("over"));
  }
}
