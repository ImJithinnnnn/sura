

function quantities(){ 
    var q="quantities =" + document.getElementById("quantity").value + " name =" + document.getElementById("fname").value + " Phone no:" + document.getElementById("num").value + " pincode:" + document.getElementById("Pincode").value + " Address:" + document.getElementById("Address").value
    if(document.getElementById("quantity").value>0){
        console.log(q);
        sessionstorage.setItem(document.getElementById("fname").value, q);
    }
    else{alert("Select how many of you want NIGGESH")}
}


console.log("script running")

