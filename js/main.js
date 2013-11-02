

$( document ).on( "pageinit", "#home", function() {
    $( document ).on( "swipeleft swiperight", "#home", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#notification" ).panel( "open" );
            }
        }
    });
});




/* ***********************

THEMES

****************************/
$("#green").click(function() {
    $('.themeChange').attr('data-theme', 'g').removeClass('ui-body-r').addClass('ui-body-g').trigger('create');
});


$("#red").click(function() {
    $('.themeChange').attr('data-theme', 'r').removeClass('ui-body-g').addClass('ui-body-r').trigger('create');
});



/* EMD THEMES*/


//NOTES SYSTEM!!!!
/*
var note;


function submitNote () {
    var new_note = ;

    //use advanced methods to add notes like in trolley list in cc
}
*/

/*
var another = {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25,
    "yearGroup" : 11,
    "tutorGroup" : "Wonder",
    "image" : "Not here yet!",
        /*
        "address": {
            "streetAddress": "21 2nd Street",
            "city": "New York",
            "state": "NY",
            "postalCode": 10021
        },
        "phoneNumbers": [
            {
                "type": "home",
                "number": "212 555-1234"
            },
            {
                "type": "fax",
                "number": "646 555-4567"
            }
        ]
        
}
*/
