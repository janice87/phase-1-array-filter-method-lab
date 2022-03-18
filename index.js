// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = function(driversArray, driver) {
    return driversArray.filter(item => item === driver || item === driver.toLowerCase())
}

const fuzzyMatch = function(driversArray, driver) {
    return driversArray.filter(item => item[0] === driver[0] && item[1] === driver[1])
        }


const matchName = function(driversArrayObj, driver) {
 let match = driversArrayObj.filter(item => item.name === driver) 
     return match
    }
