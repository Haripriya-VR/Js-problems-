// find the outpput of the below code(with reason)

let place ='US'
let department = {[getStudentPlace()]: 'India', [place+'Department']:'English',standard:100};
function getStudentPlace(){return place}
let division ='standard';

let { [getStudentPlace]:placeDetails,[place + 'Department' ]: departmentDetails, [division]:standard } = department;

console.log(placeDetails +'&' + departmentDetails + '&' + standard);

// output : India & English & 100


