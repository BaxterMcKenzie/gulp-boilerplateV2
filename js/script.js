// Document Ready function - ensure the HTML is fully loaded before trying to use any JS

// $ = getElement or querySelector

// Grab the document (HTML) and check it is ready:
$(document).ready(function () {
    // ALL JS is placed inside of here

      // MAPBOX TOKEN
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';


    /** ------------ DATE PICKER ------------------- */

    // Initialise datepicker on the inputs:
    $("#start-date").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            const startDate = $("#start-date").datepicker("getDate");
            console.log(startDate);
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    $("#end-date").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            const endDate = $("#end-date").datepicker("getDate");
            console.log(endDate);
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    // Calculate difference between the two dates:

    function calculateDays() {
        const startDate = $("#start-date").datepicker("getDate");
        const endDate = $("#end-date").datepicker("getDate");

        // Check if we have a start date and an end date
        if (startDate && endDate) {
            // calculate the difference :
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) // makes sure the number is a positive number
            console.log(timeDiff);
            // 1000 milliseconds per second
            // 3600 second per hour
            // 24 hours in a day
            // 1000 * 3600 * 24 = number of milliseconds in a day

            // timeDiff / number of milliseconds in a day = number of days
            // make sure number of days is a whole number - we use Math.ceil()

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update number of days span

            $("#number-of-days").text(diffDays);

            // Return diffDays to make it accessable to the populate function
            return diffDays;

        } else {
            // make sure number of days is empty
            $("#number-of-days").text(""); // set it to empty text
        }
    }

    /** SWIPER JS */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Initialise the map
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [174.78720446652096, -41.30607122027361],
    zoom: 11.5
  });

});