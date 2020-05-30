function displayResult(){
    var input = document.getElementById("search");
    var confirmed_data = document.getElementById("confirmed_data");
    var Deaths_data = document.getElementById("Deaths_data");
     var Recovered_data =document.getElementById("Recovered_data");
     var Active_data =document.getElementById("Active_data");
     var result = document.getElementById("result");

   fetch(`http://localhost:3000/track?country=${input.value}`).then((body)=>body.json())
   .then((data)=>{
    document.getElementById("result").style.visibility="visible",
   confirmed_data.innerHTML=data.Confirmed,
   Deaths_data.innerHTML = data.Deaths,
   Recovered_data.innerHTML = data.Recovered,
   Active_data.innerHTML = data.Active
   }
  
   
   
   )}