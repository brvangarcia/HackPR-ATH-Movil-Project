
function submitForm () {

  var phone = document.getElementById("phone");
        document.getElementById("myPhone").innerHTML = phone.value;


var request = new XMLHttpRequest();

request.open('POST', 'https://private-304b8-athm.apiary-mock.com/athm/verifyPaymentStatus');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {

    var data = JSON.parse(this.responseText);
    var phoneNumber = data.phoneNumber;
    document.getElementById("myPhone2").innerHTML = (phoneNumber);

    var data2 = JSON.parse(this.responseText);
    var amount = data.amount;
    document.getElementById("myAmount").innerHTML = (amount);

    var data3 = JSON.parse(this.responseText);
    var transStatus = data.transStatus;
    document.getElementById("myStatus").innerHTML = (transStatus);


  }
};

var body = {
  'token': '55f6f498a8265d881e83f88e',
  'referenceNumber': '55f97f3be4b0503165e858c5'
};




request.send(JSON.stringify(body));

}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
