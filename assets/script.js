// all code inside call to jQuery - will not run until document renders.
$(function (){

    // this empty object variable will be filled when the user clicks search
    var searchInput = {};
    // this if statement allows local storage to persist after page refresh.
    if (!localStorage.getItem('searchInput')){
        localStorage.setItem('searchInput', JSON.stringify(searchInput));
    }

    // TODO: event listener for search button
        // TODO: modal for invalid input 
        // var city = $('input')[0].value, 
        // var state = $('input')[0].value, 
        // var category = $('input')[0].value
        // TODO: edit jQuery Document selectors: searchInput = {
            // city: $('input')[0].value, 
            // state: $('input')[0].value, 
            // category: $('input')[0].value
        // }
        // localStorage.setItem('searchInput', JSON.stringify(searchInput)) 
        // TODO: call/invoke API function
        // TODO: redirect location to result page:
            // var queryString = './search-results.html?q=' + city + state + '&category=' + category;
            // location.assign(queryString);

})