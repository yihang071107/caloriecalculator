/*********************************************PART 1************************************************************/
//STEP 1: 
//make a variable named button
//access the Result button using DOM 

var button = document.querySelector("button");

//STEP 2:
//call out the button variable and attach .addEventListener("click", function(){})
//in the function(), create:
//=> a variable named weight and access the <input> id for weight to get the value using DOM  (text input)
//=> a variable named heightinMeter and access the <input> id for height to get the value using DOM (text input)
//=> a variable named male and access the <input> id for male using DOM (radio button)
//=> a variable named female and access the <input> id for female using DOM (radio button)
//=> a variable named teenager and access the <input> id for the teenager using DOM (radio button)
//=> a variable named youngAdult and access the <input> id for the young adult using DOM (radio button)
//=> a variable named adult and access the <input> id for the adult using DOM (radio button)
//=> a variable named elderly and access the <input> id for the elderly using DOM (radio button)
//=> a variable named basal and do not declare any value for it (we will use it for the BMR formula later on)
//=> a variable named heightinMeter and make the value to be height in meter divided by 100
//=> a variable named kJtoKcal and make the value to be 4.184 

button.addEventListener("click", function () {
    var weight = document.querySelector("#weight").value;
    var heightinMeter = document.querySelector("#height").value;
    var male = document.querySelector("#male")
    var female = document.querySelector("#female")
    var teenager = document.querySelector("#teenager")
    var youngAdult = document.querySelector("#youngAdult")
    var adult = document.querySelector("#adult")
    var elderly = document.querySelector("#elderly")
    var basal
    var heightinMeter = heightinMeter / 100
    var kJtoKcal = 4.184

    // calculate BMR (refer to the project guideline at Part 1)
    if (male.checked && teenager.checked) {
        basal = Math.round(((69.4 * weight) + (322.2 * (heightinMeter)) + 2392) / kJtoKcal);
        console.log(basal);
    } else if (male.checked && youngAdult.checked) {
        basal = Math.round(((64.4 * weight) - (113.0 * (heightinMeter)) + 3000) / kJtoKcal);
        console.log(basal);
    } else if (male.checked && adult.checked) {
        basal = Math.round(((47.2 * weight) + (66.9 * (heightinMeter)) + 3769) / kJtoKcal);
        console.log(basal);
    } else if (male.checked && elderly.checked) {
        basal = Math.round(((36.8 * weight) + (4719.5 * (heightinMeter)) - 4481) / kJtoKcal);
        console.log(basal);
    }

    if (female.checked && teenager.checked) {
        basal = Math.round(((30.9 * weight) + (2016.6 * (heightinMeter)) + 907) / kJtoKcal);
        console.log(basal);
    } else if (male.checked && youngAdult.checked) {
        basal = Math.round(((55.6 * weight) + (1397.4 * (heightinMeter)) + 146) / kJtoKcal);
        console.log(basal);
    } else if (male.checked && adult.checked) {
        basal = Math.round(((36.4 * weight) - (104.6 * (heightinMeter)) + 3619) / kJtoKcal);
        console.log(basal);
    } else if (male.checked && elderly.checked) {
        basal = Math.round(((36.5 * weight) - (2665.2 * (heightinMeter)) - 1264) / kJtoKcal);
        console.log(basal);
    }



    /*********************************************PART 2************************************************************/
    //STEP 1:
    //After the conditional statement that can get the result of the basal, create:
    //=> a variable named choice and access the <option> class for choice using DOM
    //=> a variable named sedentary and access the <option> class for sedentary using DOM
    //=> a variable named light and access the <option> class for light using DOM
    //=> a variable named moderate and access the <option> class for moderate  using DOM
    //=> a variable named active and access the <option> class for active using DOM
    //=> a variable named dailyIntake and do not declare any value for it (we will use it for the formula later on)
    //=> a variable named resultMessage and access the <div> id for the result message using DOM
    //=> a variable named calorie and access the <div> id for calorie using DOM
    //=> a variable named final and make the value to be document.querySelector("#Final");


    //STEP 2:
    // calculate Activity :Sedentary, Lightly Active, Moderately Active, Very Active


    //STEP 3:
    //round off the daily intake calorie


    //STEP 4:
    //customize the output style of the daily intake result

})