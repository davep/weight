function urlParams() {
    return window.location.search
        .substring( 1 )
        .split( "&" )
        .reduce( function ( params, param ) {
            if ( param ) {
                var pair = param.split( "=" );
                params[ pair[ 0 ] ] = pair[ 1 ];
            }
            return params;
        }, {} );
}

function defaultKg() {
    var kg = urlParams().kg;

    if ( isNaN( kg ) ) {
        return "";
    }

    return kg;
}

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

    if ( isNaN( kg ) ) {
        return "";
    }

    var stlb = kg2stlb( kg );
    return stlb.st + " st " + stlb.lb.toFixed( 1 ) + " lb";
}
