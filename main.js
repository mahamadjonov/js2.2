let elinput  = document.querySelector("#input")
let ellist = document.querySelector("#list")
let elbtn = document.querySelector("#btn")


function jonatish(){
    if(elinput.value===""){
        alert("Nimadur yozing")
    
    } else{
        let li = document.createElement("li")
        li.innerHTML = elinput.value
        ellist.appendChild(li)
        li.style.color = "green"
        elinput.style.border = "3px solid green"
        elbtn.style.background = "green"

        elinput.value = ""
    }
   

}