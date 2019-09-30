/*
Eric Stafford
Date: 9.23.19
Most recent revision:9.27.19
*/

var workouts = [
    'Arm Reach',
    'Side Reach',
    'Hip Rotations',
    'Knees Lift',
    'Lateral Lunge With Balance',
    'Lateral Lunge With Reach',
    'Squat To Raised Heel',
    'Squat With Reach',
    'Plank Walk Out',
    'Jumping Jack'
]

var amount = [
    '2 times',
    '4 times',
    '6 times',
    '10 times',
    '12 times',
    '14 times',
    '16 times',
    '18 times',
    '20 times'
]

function newWorkout() {
var randomNumber = Math.floor(Math.random() * (workouts.length));
document.getElementById('workoutDisplay').innerHTML = workouts[randomNumber];
document.getElementById("amount").style.display = "block";
document.getElementById("print").style.display = "none";
}

function newAmount() {
var randomAmount = Math.floor(Math.random() * (amount.length));
document.getElementById('amountDisplay').innerHTML = amount[randomAmount];
document.getElementById("print").style.display = "block";
}


function printList() {
 document.getElementById('printDisplay').innerHTML = document.getElementById('workoutDisplay').innerHTML + " " + document.getElementById('amountDisplay').innerHTML;
}

// function continueList(){
// $("ol").append("<li>printDisplay</li>");
// }