
function countHours(year, holidays) {
    let hours = 0;
    
    holidays.map( holiday =>{
        
        let myDay = new Date(`${ holiday }/${year}`).getDay();
        if (myDay > 0 &&  myDay <= 5 ) {
            hours = hours + 2;
        }
        
        return holiday;
    });
    
    return hours;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25', '02/29'] // formato MM/DD
console.log(countHours(year, holidays) );