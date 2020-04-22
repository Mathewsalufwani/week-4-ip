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

