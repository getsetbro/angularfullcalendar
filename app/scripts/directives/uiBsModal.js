

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('angularfullcalendarApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, item,$sce) {
  'use strict';

  $scope.item = item;

  $scope.room = item.room || '';
  $scope.breakouts = item.breakouts || [];

  $scope.addBreakOut = function () {
    $scope.breakouts.push({name:'',facilitator:'',location:''});
  };
  $scope.deleteBreakOut = function (idx) {
    $scope.breakouts.splice(idx, 1);
  };
  $scope.ok = function () {
    item.room = $scope.room;
    item.breakouts = $scope.breakouts;
    $modalInstance.close(item);
  };
  $scope.delete = function () {
    item.delete = true;
    $modalInstance.close(item);
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.renderHTML = function(htmlcode){
      var decoded = angular.element('<textarea />').html(htmlcode).text();
      return $sce.trustAsHtml(decoded);
  };

});
