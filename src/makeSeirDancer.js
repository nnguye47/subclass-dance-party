var makeSeirDancer = function(top, left, timeBetweenSteps) {
  //call dancer.js func
  makeInstructorDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('seir');
  //this.$node = $('<span class="dancer"></span>')
};

//set prototype
//set constructior
makeSeirDancer.prototype = Object.create(makeInstructorDancer.prototype);
makeSeirDancer.prototype.constructor = makeSeirDancer;

//create new step function
// makeSeirDancer.prototype.step = function() {
//   makeInstructorDancer.prototype.step.call(this);
//   this.$node.toggle();
// };