$(document).ready(function() {
  window.dancers = [];

  var numberGenerator = function(max) {
    return Math.floor(Math.random() * max);
  };

  var storage = {
    0: 'makeBlinkyDancer',
    1: 'makeInstructorDancer',
    2: 'makeSeirDancer'
  };

  var getFromStorage = function() {
    var num = numberGenerator(3);
    return storage[num];
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    /* pseudocode
        create a storage object with keys (integers) that have a value of the stored function
        create a random number generator function that accepts an argument for max value
          call the RNG function with the max set to the number of dancer factory functions we have
          return the function at the key that matches the RND'd value
    */

    //var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunctionName = getFromStorage();


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(), //top
      $('body').width() * Math.random(), //left
      Math.random() * 1000); //timeBetweenSteps
    $('body').append(dancer.$node);
  });

});