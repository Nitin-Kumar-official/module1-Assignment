(function(){
'use strict';

var app=angular.module('MyModule',[] );

app.controller('LunchCheckController',Mycontrol);
Mycontrol.$inject=['$scope'];
function Mycontrol($scope)
{
    $scope.List="";                            //List of Items that will be Entered by the user in textbox 
    $scope.Message="";                         //Used to Display (Enjoy or Too much)!
    $scope.StyleForMessage="";                 //Used for Bonus Content
    $scope.StyleForTextBox=""                  //Used for Bonus Content


    $scope.CheckList=function()                //Function That Responds to the click Event of button i.e 'ng-click'
    {
        var CheckString=$scope.List;           //Binded list items of the textbox Stored in this String
        var count=1;                           //Variable used to count numbers of (',') commas.
        console.clear();                       //Used For Clearing The Console.
        CheckString.trim();                    //Removing WhiteSpaces in the String
        if(CheckString==="")                   //Checking if the String is Empty Or Not
                {
                    count=0;
                    $scope.Message="";
                    DisplayMessage(0);
                }
        else
                {
        for(var i=0;i<CheckString.length;i++)   //Calculating the numbers of Items by Checking ',' in the String.
        {
            if(CheckString[i]==",")
                count++;
        }
                
        DisplayMessage(count);                  //Calling DisplayMessag() Fnction Passing Count as Argument 
                }
    }

function DisplayMessage(i)                      //Message Will Display on the Basis of i(Count) Value And Change the Style Accordingly
{

        if(i>0 && i<=3)
        {
            console.log("Total Items:"+i);      
            $scope.Message="Enjoy....!";        
            $scope.StyleForMessage="safe";      
            $scope.StyleForTextBox="safeborder";
        }
        else if(i>3)
        {
            console.log("Total Items:"+i);
            $scope.Message="Too Much...!"
            $scope.StyleForMessage="warning";
            $scope.StyleForTextBox="warningborder";
        }
        else
        {
            console.log("Total Items:"+i);
        }
}
}

})();
