// all code inside call to jQuery - will not run until document renders.
$(function (){

    // this empty object variable will be filled when the user clicks search
    var searchInput = {};

    // this if statement allows local storage to persist after page refresh.
    if (!localStorage.getItem('searchInput')){
        localStorage.setItem('searchInput', JSON.stringify(searchInput));
    }

    var searchBtn = $('#search')

    // event listener for search button.
    searchBtn.on('click', function(event){
        event.preventDefault();
        var city = $('#city-input')[0].value; 
        var state = $('#state-input')[0].value; 
        var category = $('#interest-input')[0].value;
        console.log(city, state, category); //test

        searchInput = {
            city: city, 
            state: state, 
            category: category,
        };

        localStorage.setItem('searchInput', JSON.stringify(searchInput)); 

        // redirect location to result page:
        var queryString = './search-results.html?q=' + city + '&state=' + state + '&category=' + category;
        location.assign(queryString);

    })

})