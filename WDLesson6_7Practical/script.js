let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";


  for(let i = 0; i < data.length; i+=1){
    let accidents = data[i];
    build += `<div class="fitted card">
                 <h3>${accidents.on_street_name}</h3>
                 <hr>
                 <h4>${accidents.off_street_name}</h4>
                 <hr>
                 <p>No. people injured:<br>${accidents.number_of_persons_injured}</p>
                 <p>No. people killed:<br>${accidents.number_of_persons_killed}</p>
                 <hr>
                 <p>${accidents.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${accidents.vehicle_type_code1}</p>
              </div>`    
  }
  output.innerHTML = build;
   let descriptors = fillDropDown("descriptor");
  document.getElementById("descriptors").innerHTML = descriptors;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByStreetname(){
  let output = document.getElementById("output");
  let streetname = document.getElementById("streetname").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
      let accidents = data[i];
      if(accidents.on_street_name == streetname){
    build += `<div class="fitted card">
                 <h3>${accidents.on_street_name}</h3>
                 <hr>
                 <h4>${accidents.off_street_name}</h4>
                 <hr>
                 <p>No. people injured:<br>${accidents.number_of_persons_injured}</p>
                 <p>No. people killed:<br>${accidents.number_of_persons_killed}</p>
                 <hr>
                 <p>${accidents.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${accidents.vehicle_type_code1}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByVehicletype(){
  let output = document.getElementById("output");
  let vehicletype = document.getElementById("Vehicletype").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
     let accidents = data[i];
      if(accidents.vehicle_type_code1 == vehicletype){
    build += `<div class="fitted card">
                 <h3>${accidents.on_street_name}</h3>
                 <hr>
                 <h4>${accidents.off_street_name}</h4>
                 <hr>
                 <p>No. people injured:<br>${accidents.number_of_persons_injured}</p>
                 <p>No. people killed:<br>${accidents.number_of_persons_killed}</p>
                 <hr>
                 <p>${accidents.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${accidents.vehicle_type_code1}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

 function filterByPeopleinjured(){
  let output = document.getElementById("output");
  let injured = document.getElementById("peopleinjured").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let accidents = data[i];
      if(accidents.number_of_persons_injured == injured){
    build += `<div class="fitted card">
                 <h3>${accidents.on_street_name}</h3>
                 <hr>
                 <h4>${accidents.off_street_name}</h4>
                 <hr>
                 <p>No. people injured:<br>${accidents.number_of_persons_injured}</p>
                 <p>No. people killed:<br>${accidents.number_of_persons_killed}</p>
                 <hr>
                 <p>${accidents.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${accidents.vehicle_type_code1}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
