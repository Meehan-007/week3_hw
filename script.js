
var generateBtn = document.querySelector("#generate");


function writePassword() {
  
  var length = window.prompt("how long do you want your password to be? you can pick between 4 and 26 characters"); 
  
  if ((!(length >= 4)) || (!(length <= 26))) { 

 window.alert("You need to provide a valid answer! Please try again.");    
   writePassword();  
 }
console.log(length);  
var passwordText = document.querySelector("#password"); 
passwordText.value = generatePassword(length);



      
    

  
  function generatePassword(length) { 
  
    // variables and prompts
    var lower = window.prompt("do you want lowercase letters? Yes or No"); 
     lower = lower.toLowerCase(); 
     console.log(lower); 

  if (!(lower === "yes" || lower === "no")) { 
 window.alert("You need to provide a valid answer.");    
   writePassword();  
 }

  var upper = window.prompt("do you want uppercase letters? Yes or No"); 
     upper = upper.toLowerCase(); 
     console.log(upper);  

     
  if (!(upper === "yes" || upper === "no")) { 
    window.alert("please try agian");    
      writePassword();  
    }

     var number = window.prompt("do you want numbers? Yes or No"); 
     number = number.toLowerCase(); 
     console.log(number);   

     if (!(number === "yes" || number === "no")) { 
      window.alert("Please try agian");    
        writePassword();  
      }

     var special = window.prompt("do you want special characters? Yes or No"); 
     special = special.toLowerCase(); 
     console.log(special);  

     if (!(special === "yes" || special === "no")) { 
      window.alert("try agian please");    
        writePassword();  
      }

    console.log(length); 
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%^&*()+";
    

// conditions are set up 
if ( lower === "yes" && upper === "no") { 
  charset = charset.toLowerCase();
} 

if ( lower === "no" && upper === "yes") { 
  charset = charset.toUpperCase();
}  

if ( lower === "no" && upper === "no") { 
  charset = "0123456789@!#$%^&*()+"; 
 // charset = charset.replace(/\D/g,''); 
  console.log(charset); 
} 

if ( number === "no") { 
  charset = charset.replace(/\d/g,''); 
  console.log(charset);  
  //if statement must have numbers or alaphabet
} 

if ( special === "no") { 
  charset = charset.replace(/[@!#$%^&*()+]/g,''); 
  console.log(charset); 
}  

if (special === "no" && number === "no" && lower === "no" && upper === "no") { 
window.alert("If you dont provide a valid answer I will ber very sad");    
writePassword(); 
};

  var password = "";
  console.log(password); 

  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
      } 
    console.log(password);
    return password; 
  } 

}; 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
