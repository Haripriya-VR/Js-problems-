// Generate Random captcha using javascript
const chars ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

function generateCaptcha(chars){
    let strLength = 6
    let result =''

    for(let i = 0;i< strLength;i++){
        let randomNum = Math.floor(Math.random() * chars.length)
        // creates a random number . for eg 10

        result += chars.substring(randomNum,randomNum+1)
        //  in the substring (startIndex,endIndex) 10,11 it takes the 
        // value from the chars at startindex and before endindex 
        // which is k this is happeing in each itration to give the output
        
    }
   return result
}

console.log(generateCaptcha(chars));