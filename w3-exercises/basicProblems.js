// Display current date and time

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


function displayCurrentDateTime(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    console.log("now", now.getDay());
    
    
    const day = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const formattedTime = `${hours % 12 || 12} ${hours >= 12 ? 'PM' : 'AM'} : ${minutes} : ${seconds}`;
    
    console.log(`Today is : ${day}.`);
    console.log(`Current time is : ${formattedTime}`);
}

displayCurrentDateTime();

