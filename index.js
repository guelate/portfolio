
//send email with node.js in 3 simple steps

/* <a href="./Bot1.png" download="Bot1.png">Download</a>
https://www.w3schools.com/css/css_tooltip.asp info bule */


// NE PAS PUBLIER LA VERSION FINAL SUR GITHUB POUR PROTEGER LE MDP 
// ASSOCIER UN NVX COMPTE ET ENVOYER LE MAIL ECRIT AU DEUX COMPTES

// const express = require("express");
// const app = express();

// const nodemailler = require("nodemailer");
// let PORT = process.env.PORT || 3000;

// let transporter = nodemailler.createTransport({
//     service:"Gmail",
//     auth: {
//         user:"guelateseyo@gmail.com",
//         pass:""
//     },
//     tls: {
//         rejectUnauthorized:false,
//     }
// })

// let mail = {
//     from:"guelateseyo@gmail.com",
//     to:"tptgo225@gmail.com",
//     subject:"test",
//     text:"Le message est bien fait"
// }

// transporter.sendMail(mail, function(err,sucess){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("mail send successfull")
//     }
// })


// app.get("/", (req,res) => {
//     res.send("Hello world");
// })

const items_project1 = document.getElementsByName("project1");
const items_project2 = document.getElementsByName("project2");

const suivant = document.getElementsByName("next");
const back = document.getElementsByName("back");


const nbSlide1 = items_project1.length-1;
const nbSlide2 = items_project2.length-1;

let count1 = 0;
let count2 = 0;

let slideSuivant1 = () => {
    items_project1[count1].classList.remove("active");

    if(count1 < nbSlide1){
        count1++;
        back[0].style.removeProperty("display");
        console.log(count1)

    }
    
    if(count1 == nbSlide1){

        suivant[0].style.display = "none";
    }
    items_project1[count1].classList.add("active");
    
}

let slideSuivant2 = () => {

    console.log(count2,"1")

    items_project2[count2].classList.remove("active");

    if(count2 < nbSlide2){

        console.log(count2,"2")
        count2++;
        back[1].style.removeProperty("display");
        console.log(count2)

    }
    
    if(count2 == nbSlide2){

        suivant[1].style.display = "none";
    }
    items_project2[count2].classList.add("active");
    
}

let slidePrecedent1 = () => {
    items_project1[count1].classList.remove("active");

    if(count1 > 0){    
        count1--;
        console.log("count1 dans prec",count1)     
    }
    if (count1 == 0){
        back[0].style.display = "none";
        suivant[0].style.removeProperty("display"); 
    } 
    items_project1[count2].classList.add("active");  
}

let slidePrecedent2 = () => {

    items_project2[count2].classList.remove("active");
    
    if(count2 > 0){
        count2--;   
    }

    if (count2 == 0){
        back[1].style.display = "none";
        suivant[1].style.removeProperty("display");
    } 

    items_project2[count2].classList.add("active"); 
}

suivant[0].addEventListener("click", slideSuivant1);
back[0].addEventListener("click", slidePrecedent1);

suivant[1].addEventListener("click", slideSuivant2);
back[1].addEventListener("click", slidePrecedent2);