var makeInstructorDancer = function(top, left, timeBetweenSteps) {
  //call dancer.js func
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('instructor');
  //this.$node = $('<span class="dancer"></span>')
};

//set prototype
//set constructior
makeInstructorDancer.prototype = Object.create(makeDancer.prototype);
makeInstructorDancer.prototype.constructor = makeInstructorDancer;

//create new step function
makeInstructorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};