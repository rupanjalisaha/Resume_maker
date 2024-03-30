function AddNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("weField");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb =document.getElementById("we");
    let weAddButtonOb =document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function AddNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("eqField");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let eqObj =document.getElementById("eq");
    let aqAddButtonObj =document.getElementById("aqAddButton");

    eqObj.insertBefore(newNode,aqAddButtonObj);
}
function AddNewSKField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("sField");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let skObj =document.getElementById("sk");
    let skAddButtonObj =document.getElementById("skAddButton");

    skObj.insertBefore(newNode,skAddButtonObj);
}
function AddNewHBField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("hbField");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let hbObj =document.getElementById("hb");
    let hbAddButtonObj =document.getElementById("hbAddButton");

    hbObj.insertBefore(newNode,hbAddButtonObj);
}
function AddNewProjectField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("projectField");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let projectOb =document.getElementById("project");
    let projectAddButtonOb =document.getElementById("projectAddButton");

    projectOb.insertBefore(newNode,projectAddButtonOb);
    let button = document.createElement("button");
    button.add("Remove");
    projectOb.insertBefore(newNode,button);

}
function GenerateCV(){
    //let nameField=document.getElementById("nameField").value;
    //let nameT1=document.getElementById("nameT1");
    //nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
    document.getElementById("nameT1").innerHTML=document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("facebookT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("summaryT").innerHTML=document.getElementById("Profile Summary").value;
    let wf=document.getElementsByClassName("weField");
    let str1 = "";
    for(let e of wf){
        str1=str1+`<li>${e.value}</li>`;
    }
    document.getElementById("WET").innerHTML = str1;
    let ef=document.getElementsByClassName("eqField");
    let str2 = "";
    for(let eq of ef){
        str2=str2+`<li>${eq.value}</li>`;
    }
    document.getElementById("AQT").innerHTML = str2;
    let sf=document.getElementsByClassName("sField");
    let str3 = "";
    for(let s of sf){
        str3=str3+`<li>${s.value}</li>`;
    }
    document.getElementById("SkillsT").innerHTML = str3;
    let hb=document.getElementsByClassName("hbField");
    let str4 = "";
    for(let h of hb){
        str4=str4+`<li>${h.value}</li>`;
    }
    document.getElementById("HobbiesT").innerHTML = str4;
    let project=document.getElementsByClassName("projectField");
    let str5 = "";
    for(let p of project){
        str5=str5+`<li>${p.value}</li>`;
    }
    document.getElementById("ProjectsT").innerHTML = str5;

    //setting image here
    /*let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
    document.getElementById("imageT").src = reader.result;
    }*/
    
    document.getElementById("CV-maker").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';
}
function printCV(){
    window.print().removeChild("print_cv");
    printWindow.document.write('<style type = "text/css">');
}
