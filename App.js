(function(){
'use strict';

var app=angular.module('MyModule',[] );

app.controller('MyController',Mycontrol);
Mycontrol.$inject=['$scope'];
function Mycontrol($scope)
{
    $scope.List="";
    $scope.Message="";
    $scope.Style="";
    $scope.CheckList=function()
    {
        var CheckString=$scope.List;
        var count=1;
        console.clear();        //Used For Clearing The Console.
        CheckString.trim();     //Removing WhiteSpaces in the String
        if(CheckString==="")    //Checking if the String is Empty Or Not
                {
                    count=0;
                    $scope.Message="";
                    DisplayMessage(0);
                }
        else
                {
        for(var i=0;i<CheckString.length;i++)//Calculating the numbers of Items by Checking ',' in the String.
        {
            if(CheckString[i]==",")
                count++;
        }
                
        DisplayMessage(count);
                }
    }

function DisplayMessage(i)
{

        if(i>0 && i<=3)
        {
            console.log("Total Items:"+i);
            $scope.Message="Enjoy....!";
            $scope.Style="safe";
            console.log($scope.Style);
        }
        else if(i>3)
        {
            console.log("Total Items:"+i);
            $scope.Message="Too Much...!"
            $scope.Style="warning";
        }
        else
        {
            console.log("Total Items:"+i);
        }
}
}

})();
