

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


/* ***********************

FOOTER SYSTEM FOR ALL PAGES

****************************/

/*array*/

var footer = new Array;

footer.push('<div data-theme="g" class="themeChange" data-role="footer" data-position="fixed">');
footer.push('<div data-theme="g" class="themeChange" data-role="navbar" data-iconpos="top"><ul><li>');
footer.push('<a class="themeChange"data-corners="false"href="#about" data-transition="slideup" data-theme="g" data-icon="info">About</a></li>');
footer.push('<li><a class="themeChange"data-corners="false"href="#home" data-transition="flip" data-theme="g" data-icon="home">Home</a></li>');
footer.push('<li><a class="themeChange"data-corners="false"href="#settings" data-transition="slidedown" data-theme="g" data-icon="gear">Settings</a></li>');
footer.push('</ul></div></div>');


/* put \ to stop string undeteremined bug*/
$('.footer').append(footer.join(''));





//NOTES SYSTEM!!!!

var noteList = new Array; 


function submitNote () {

    var d = new Date();

    var day = d.getDay();
    var month = d.getMonth();
    var year = d.getFullYear();   
    var date = day + "/" + month + "/" + year;

    var hour = d.getHours();
    var minutes = d.getMinutes();
    var time = hour + ":" + minutes;

    var note = $("#newnote").String;


    //use advanced methods to add notes like in trolley list in cc

    var note = {
        time : time,
        date : date,
        note : note
    }

    noteList.push(note);

    if (noteList.length <= 0) {
        createNote();
    }
    else {
        alert("Error");
    }
}

function createList () {

    $("#displayNote").append("<p>BAKSDBSABDUIBSFA</p>");

    for (var i = noteList.length - 1; i >= 0; i--) {
        noteList[i]
    };

    for (var i = 0; i < noteList.length; i++) {
        noteList[i]
    };
}

/*

EXAMPLE JSON

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
