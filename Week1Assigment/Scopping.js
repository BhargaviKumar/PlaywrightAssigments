const genderType ="female"

function printGender()
{
    console.log("inside the functio",genderType);
    let color ="brown"
    if(genderType === "female")
    {
        var age =30;
        let color ="pink"
        console.log("inside the black", color);
        
    }
    console.log("outside the block", age);
      
}
printGender();
console.log("outside the function", genderType);
