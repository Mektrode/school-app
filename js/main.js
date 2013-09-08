
/*
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
*/



//Mock json file

var id_64 = {
    "firstName": "John",
    "lastName": "Smith",
    "age": 16,
    "yearGroup" : 11,
    "tutorGroup" : "Wonder",
    "houseGroup" : "Sharks",
    "image" : "Not here yet!",
}

//Test
console.log("Outside log age: " + id_64.age);

var buildIt = function () {
    var name = id_64.firstName +" "+id_64.lastName;
    var age = id_64.age;
    var year = "Year " + id_64.yearGroup;
    var tutor = id_64.tutorGroup;
    var house = id_64.houseGroup;
        
    //another test
    console.log(name + age + year + tutor);

    $("#userSpan").text(name);
    $("#name").text(name);
    $("#age").text(age);
    $("#year_group").text(year);
    $("#tutor_group").text(tutor);
    $("#house_group").text(house);
}



//Changing themes

//black 
/*
$blackTheme = $("data-theme = a")
$black.append*/


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
