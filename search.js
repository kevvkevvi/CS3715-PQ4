function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function opendesc(num){
var elem = document.getElementById(num);
  if (elem.innerHTML == ""){
    document.getElementById(num).innerHTML = "Description: Hooray!! You have completed your task. You can now stop the timer. ~~~~~ ~~~ ~~~~~~~ ~~~~~~~ ~~~~~ ~~~~~~~ ~~~~~~ ~~~~~ ~~~~~~ ~~~~~~ ~~~~~~ ~";
  }else{
    document.getElementById(num).innerHTML = "";
  }
}
