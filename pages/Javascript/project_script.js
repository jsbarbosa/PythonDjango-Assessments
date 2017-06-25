var first_name = prompt("Hello and Welcome. Please enter your first name:")
var last_name = prompt("Please enter your last name:")
var age = prompt("How old are you?")
var height = prompt("How tall are you in centimeters?")
var pet = prompt("What is the name of your pet?")
alert("Thank you so much for the information")

if(first_name[0] === last_name[0])
{
    if(age < 30 && age > 20)
    {
        if(height >= 170)
        {
            if(pet[pet.length - 1] === "y")
            {
                console.log("Love")
            }
        }
    }
}
