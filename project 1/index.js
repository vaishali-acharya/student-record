var gojo = '';

var name1 = [];
var mail1 = [];
var mob1 = [];
var per1 = [];
document.getElementById("number1").addEventListener("input", function() {
  var mn = document.getElementById("number1").value;
  var m = mn.split(",");
  if (m[0] == 1 || m[0] == 2 || m[0] == 3 || m[0] == 4 || m[0] == 5) {
    document.getElementById("number1").value = "";
  }
});



document.getElementById("ad-row").addEventListener("click", function() {
  var n = document.getElementById("name").value;
  var mai = document.getElementById("email").value;
  var mo = document.getElementById("number1").value;
  var pe = document.getElementById("perc").value;

  if (n == '' || mai == '' || mo == '' || pe == '') {
    alert("fill field");
  } else {
    name1.push(document.getElementById("name").value);
    mail1.push(document.getElementById("email").value);
    mob1.push(document.getElementById("number1").value);
    per1.push(document.getElementById("perc").value);

    sData();


  }
  if (n.length>1  && mai.length>1 && mo.length>1 && pe.length>1) {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("number1").value = '';
    document.getElementById("perc").value = '';
  }
});


function sData() {
  var ad1 = "";
 for (var i = 0; i < name1.length; i++) {
    ad1 += `<tr><td><input type = 'text' value=${name1[i]}></td>&nbsp;&nbsp;&nbsp;<td><input type = 'email' value=${mail1[i]}></td>&nbsp;&nbsp;&nbsp;<td><input type = 'text' value=${mob1[i]}></td>&nbsp;&nbsp;&nbsp;<td><input type = 'text' value=${per1[i]}></td>&nbsp;&nbsp;&nbsp;<td><span id='deleteC'onclick='delete1(this)'>Delete</span></td></tr><br><br>`;

  }
  document.getElementById("sp-show").innerHTML = ad1;

}

function delete1(r) {
  gojo = r.parentNode.parentNode.rowIndex;
  console.log(gojo);
  name1.splice(gojo - 1, 1);
  mob1.splice(gojo - 1, 1);
  mail1.splice(gojo - 1, 1);
  per1.splice(gojo - 1, 1);

  sData();
}


document.getElementById("submit").addEventListener("click", function() {
  document.getElementById("table-container").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.body.style.backgroundImage = "linear-gradient(to left,  #70415a ,#42032C )";
  document.getElementById("page2").style.visibility = "visible";
  document.getElementById("show-t").style.visibility = "visible"
  document.getElementById("table-tit").style.visibility = "visible"
  var ad1 = "";

  for (var i = 0; i < name1.length; i++) {
    if (per1[i] >= 50) {
      ad1 += "<tr class='adColorG'><td>" + (i + 1) + "</td><td>" + name1[i] + "</td><td>" + mail1[i] + "</td><td>" + mob1[i] + "</td><td>" + per1[i] + "</td></tr>";
    } else if (per1[i] >= 36 && per1[i] < 50) {
      ad1 += "<tr class='adColorY'><td>" + (i + 1) + "</td><td>" + name1[i] + "</td><td>" + mail1[i] + "</td><td>" + mob1[i] + "</td><td>" + per1[i] + "</td></tr>";

    } else {
      ad1 += "<tr class='adColorR'><td>" + (i + 1) + "</td><td>" + name1[i] + "</td><td>" + mail1[i] + "</td><td>" + mob1[i] + "</td><td>" + per1[i] + "</td></tr>";
    }
  }
  document.getElementById("sub-data").innerHTML = ad1;
});


function searchMob1() {
  var filter1 = document.getElementById("search-bar").value;
  var mb = "<ul>";
  for (let m = 0; m < mob1.length; m++) {
    // console.log(mob1[m]);
    if (mob1[m].match(filter1)) {
      mb += "<li>" + mob1[m] + "</li>";
    }
  }
  mb += "</ul>";
  console.log(mb);
  document.getElementById("s-bar").innerHTML = mb;
}
