const { fifaData } = require('./fifa.js')
console.log(fifaData);
// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
let catalog = fifaData.filter(function(year){
    return year.Year === 2014 && year.Stage === "Final"
})
function teamInfo(year){
    return `${year ["Home team name"]}, ${year["Away team name"]}, ${year ["Home team goals"]}, ${year["away team goals"]}, ${year ["Win Conditions"]}`;
}
let final = catalog.map(teamInfo);
console.log(catalog);
//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {

    let newarray = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].Stage === "Final"){
        newarray.push(array[i]);
      }
    }
    return newarray
};
console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array,func) {

    let newarray = func(array);
    let yearArray = [];
    for(let i = 0; i < newarray.length; i++){
        yearArray.push(newarray[i].Year);
    }
    return yearArray
    };
    console.log(getYears(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, func) {

    let newarray = func(array);
    let winnerArray = [];
    for(let i = 0; i < newarray.length; i++){
        if(newarray[i]["Home Team Goals"] > newarray[i]["Away Team Goals"]){
            winnerArray.push(newarray[i]["Home Team Name"]);
        }
        else {
            winnerArray.push(newarray[i]["Away Team Name"]);
        }
    }   
    return winnerArray
};
console.log(getWinners(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, cbYears, cbWinners) {
    let winners = cbWinners(arr).map(function(item,index){
        return `In ${cbYears(arr)[index]}, ${item} won the world cup!`;
    });
    return winners;
}
//console.log(getWinnersByYear(fifaData, getYears, getWinners));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals( cb ) {
    let average = cb.reduce( ( counter, item ) => counter + ( item[ "Home Team Goals" ] + item[ "Away Team Goals" ] ), 0 ) / cb.length;
    return average.toPrecision( 3 );
}
console.log(getAverageGoals(fifaData));


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
