var date = document.getElementById("date");
var grosspay = document.getElementById("rgrosspay");
var e1_5 = document.getElementById("e1-5");
var inName = document.getElementById("inName");
var rdate = document.getElementById("rdate");
var rname = document.getElementById("rname");







function updateForm() {
    var e1_2 = document.getElementById("wage");
    var e1_3 = document.getElementById("hours");
    var wage = e1_2.value;
    var hours = e1_3.value;
    var date1 = date.value;
    var name1 = inName.value;
    var othours = 0;
    var otwage = wage * 1.5;
    if (hours > 40) {
        othours = hours - 40;
    }
    var otTotal = otwage * othours;
    var total = wage * hours;
    console.log(total + otTotal);
    grosspay.innerHTML = total + otTotal;
    rdate.innerHTML = date1;
    rname.innerHTML = name1;




}

e1_5.onclick = updateForm;