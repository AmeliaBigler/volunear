// all code inside call to jQuery - will not run until document renders.
$(function (){
    // TODO: event listener for "new Search" button on results page
        // TODO: redirect location to landing page
        // TODO: clear all results page dynamic HTML elements

    // TODO: define API function
        // TODO: fetch()
        // TODO: create dynamic HTML elements for each result

    // TODO: call/invoke API function

    var queryString = window.location.search;
    var params = new URLSearchParams(queryString);
    var proPubBaseURL = 'https://projects.propublica.org/nonprofits/api/v2/search.json';

    var stateId = encodeURIComponent('state[id]');
    var nteeId = encodeURIComponent('ntee[id]');

    var city = encodeURIComponent(params.get('q'));
    var state = params.get('state');
    var category = params.get('category');

    var proPubQueryString = '?q=' + city + '&' + stateId + '=' + state + '&' + nteeId + '=' + category;
    var url = proPubBaseURL + proPubQueryString;

    console.log(url);

    fetch(url)
        .then(function(response) {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(
                    response.status,
                    response.statusText
                );
            }
        }).then(function(data){
            console.log(data);
        }).catch(function(error){
            console.log(error.message);
        })


})