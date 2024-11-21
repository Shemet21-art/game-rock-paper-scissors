const ICON_ROCK =  document.querySelector('.choice[data-choice="pierre"] i');

const ICON_PAPIER =  document.querySelector('.choice[data-choice="papier"] i');

const ICON_CISEAUX =  document.querySelector('.choice[data-choice="ciseaux"] i');

let plaerNumber = document.getElementById('playerNumber');
let computerNumber = document.getElementById('computerNumber');

const ALL_ICONS = document.querySelectorAll('.choice');
console.log(ALL_ICONS)

const iconUser = document.querySelector('#playerResult i');
const iconComputer = document.querySelector('#computerResult i');

let score; 

let counterUser = 0;
let counterComputer= 0;

ALL_ICONS.forEach(elem =>{
    let icon = elem.querySelector('i')
    let numUser;
    icon.addEventListener('click', function(){
        if(icon.className == 'fas fa-hand-paper'){
            numUser =1;
            iconUser.className = 'fas fa-hand-paper';
            selectComputerIcon(numUser)
        } else if(icon.className == 'fas fa-hand-rock'){
            numUser = 0;
            iconUser.className = 'fas fa-hand-rock';
            selectComputerIcon(numUser)
        } else if(icon.className == 'fas fa-hand-scissors'){
            numUser =2
            iconUser.className = 'fas fa-hand-scissors';
            selectComputerIcon(numUser)
        } 
    })
})


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  

let arrIcons = ['fas fa-hand-rock','fas fa-hand-paper', 'fas fa-hand-scissors']



function selectComputerIcon(numUser){ 
    let numIcon = randomInteger(0,2);
    console.log('computerNum', numIcon)
    iconComputer.className = arrIcons[numIcon]
    rechercheVinner(numIcon,numUser)
}


function rechercheVinner(numComptuter, numUser){ 
 
    console.log('сравнение',numComptuter, numUser )
    if( numComptuter === numUser ){ 
        console.log('ничья')
        

    }else if  (
        (numUser === 0 && numComptuter === 2) ||  
        (numUser === 1 && numComptuter === 0) ||  
        (numUser === 2 && numComptuter === 1)      
    ){
        console.log('user +1 ');
        counterUser++;
        plaerNumber.innerHTML = counterUser;
       
       

    } else { 
        counterComputer++
        computerNumber.innerHTML = counterComputer;
        
        console.log('computer +1')}
   
}