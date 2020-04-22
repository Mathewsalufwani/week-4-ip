function Pdetails(fname, lname, number, email, cname,sname){
  this.fname = fname;
  this.lname = lname;
  this.number = number;
  this.email = email;
  this.cname = cname;
  this.sname = sname;
}

function displayDelivery() {
  $(".addressInput").show(1000);
  $(".noDelivery").hide(1000);
}

function hideDelivery() {
  $(".addressInput").hide(1000);
  $(".noDelivery").slideToggle(1000);
}

function confirmDetails(){

  var firstName = $("#fName").val();
  var lastName = $("#lName").val();
  var phoneNumber = $("#pNumber").val();
  var emailAddress = $("#eAddress").val();
  var cityName = $("#cName").val();
  var streetName = $("#sName").val();

  console.log(phoneNumber);

var Person = new  Pdetails (firstName, lastName, phoneNumber, emailAddress, cityName, streetName);