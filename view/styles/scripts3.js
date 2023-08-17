const sr=ScrollReveal ({
  distance:'70px',
  duration:2700,
  reset:true
});
sr.reveal('.try1',{delay:200,origin:'right'});
sr.reveal('.conimg',{delay:200,origin:'left'});
sr.reveal('.ro',{delay:200,origin:'left'});
sr.reveal('.to',{delay:200,origin:'right'});












let selectedOption = null;
var flag = 0;

function selectOption(option) {
  flag=1;
  if (selectedOption) {
    selectedOption.classList.remove("active");
    // console.log(selectedOption.innerHTML);
  }
  option.classList.add("active");
  selectedOption = option;
  document.getElementById("selectBtn").disabled = false;
  document.getElementById("addEventBtn").innerHTML = "-";
}

document.getElementById("foots").addEventListener("click", function(event){
  console.log("hello"+event);
  flag=0;
  if (selectedOption) {
    selectedOption.classList.remove("active");
    selectedOption = null;
  }
  document.getElementById("selectBtn").disabled = true;
  document.getElementById("addEventBtn").innerHTML = "+";
});



document.getElementById("selectBtn").addEventListener("click", function() {
  alert("You selected: " + selectedOption.innerHTML);
  window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfiv2wy4p2tK4iUaity0ZlwiBIB8by_XmLSYu9_F07yMcviFw/viewform?vc=0&c=0&w=1&flr=0";
});


const addEventBtn = document.getElementById('addEventBtn');
const optionsList = document.getElementById('optionsList');

const cardList = document.querySelector('.card-list');
// const addButton = document.getElementById('add-card');

const cc = document.querySelector('.card-list-container')
const dragging = (e) => {
  cc.scrollLeft = e.pageX;
}

cc.addEventListener("mousemove", dragging);


addEventBtn.addEventListener('click', function(event) {
  if(flag==1) {
    
    var x = (selectedOption.innerHTML);
    const cardToRemove = document.querySelector(`.cardd[data-event="${x}"]`);
    cardToRemove.remove();

    optionsList.removeChild(selectedOption);
    selectedOption = null;
    document.getElementById('selectBtn').disabled = true;
    
  }
  else { 
    const eventName = prompt('Enter the name of the new event:');
    const eventDes = prompt('Enter Event description:');
    if (eventName) {
      const newOption = document.createElement('li');
      const newCard = document.createElement('div');
      newOption.classList.add('list-group-item');
      newCard.classList.add('list-group-item');
      newOption.textContent = eventName;
      newOption.onclick = function() { selectOption(this); };
      optionsList.appendChild(newOption);

      // card
      const card = document.createElement('div');
      card.classList.add('cardd');
      card.dataset.event = eventName;

      const front = document.createElement('div');
      front.classList.add('card-front');
      front.innerHTML = `<h3>${eventName}</h3>`;
      card.appendChild(front);

      const back = document.createElement('div');
      back.classList.add('card-back');
      back.innerHTML = `<p>${eventDes}</p>`;
      card.appendChild(back);

      cardList.appendChild(card);
    }
  } 
});


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("list");

searchBtn.addEventListener("click", function() {
  const searchValue = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll("li");
  
  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    const itemValue = item.innerHTML.toLowerCase();
    if (itemValue.indexOf(searchValue) !== -1) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  }
});


function myfunc(){
  let s=document.getElementById("subMenu");
  s.classList.toggle("open-menu");
  s.style.background = 'black';
}

function myF() {
  var c1=document.getElementById("card1");
  var c2=document.getElementById("card2");
  if(c1.style.display !== "none") {
    c1.style.display="none";
    c2.style.display="block";
  }
  else if(c2.style.display !== "none") {
    c2.style.display="none";
    c1.style.display="block";
  }
  
}




function myfunc(){
  let s=document.getElementById("subMenu");
  s.classList.toggle("open-menu");
  s.style.background = 'black';
}


