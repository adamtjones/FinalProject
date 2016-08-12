describe('SingleBlog', function() {
  beforeEach(module('flowers'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Single Blog Testing', function() {

    var $scope = {};
      
    it('Testing calculate function from controller', function() {
      var controller = $controller('textController',{$scope:$scope});
	  var before = [{"array":["cat","mouse","dog"],"percentage":100}];  
	  var after = [["cat","mouse","dog","cat","mouse","dog","cat","mouse","dog","cat"]];    
	  expect(controller.calPercentage(before,10)).toEqual(after);
    });

  });
});