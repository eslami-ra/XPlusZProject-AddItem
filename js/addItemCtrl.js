app.controller("addItemCtrl", function($scope) {

$scope.columnList1 = [
{id:1, value:'ITEM'},
{id:2, value:'ITEM'},
{id:3, value:'ITEM'},
{id:4, value:'ITEM'},
{id:5, value:'ITEM'},
{id:6, value:'ITEM'},
{id:7, value:'ITEM'}
];

$scope.columnList2 = [
{id:1, value:'ITEM'},
{id:2, value:'ITEM'},
{id:3, value:'ITEM'},
{id:4, value:'ITEM'},
{id:5, value:'ITEM'}
];

$scope.options = [
    { label: 'COLUMN1', value: 'COLUMN1' },
    { label: 'COLUMN2', value: 'COLUMN2' }
  ];
       
$scope.addItem  = function() {
     if($scope.newItem !=null){
     	if($scope.selectedColumn==null)
     		alert('Please select column.');
     	else if($scope.selectedColumn.value == 'COLUMN1')
     		$scope.columnList1.push({id:$scope.columnList1.length, value:$scope.newItem});
     	else if($scope.selectedColumn.value == 'COLUMN2')
     		$scope.columnList2.push({id:$scope.columnList2.length, value:$scope.newItem});
     	else
     		alert('Please select column.');
     }else{
     	alert('Item is empty!');
     }
};
    
$scope.deleteItem = function(columnList,column) {
    	columnList.splice(columnList.indexOf(column), 1);
};
});