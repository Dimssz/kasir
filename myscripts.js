function myPrn(iniyangprint){
  var printdata = document.getElementById("iniyangprint");
  newwin=window.open("");
  newwin.document.write(printdata.outerHTML);
  newwin.print()
  newwin.close()
}