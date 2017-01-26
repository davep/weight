function kg2st( kg ) {
  return kg / 6.3503;
}

function kg2stlb( kb ) {
  var st = kg2st( kb );
  return {
    "st": Math.trunc( st ),
    "lb": 14 * ( st - Math.trunc( st ) )
  };
}

function wordykg2stlb( kg ) {
    var stlb = kg2stlb( kg );
    return stlb.st + " st " + stlb.lb.toFixed( 2 ) + " lb";
}

function convert( document ) {
    document.getElementById( "result" ).innerText = wordykg2stlb( document.getElementById( "kg" ).value );
}
