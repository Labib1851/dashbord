function changeBgColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}


document.getElementById('add-text').addEventListener('click', function() {
    const ol = document.getElementById('text-box');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have Completed The Task Add<br> Dark Mode at 12:48:15';
    ol.appendChild(h1);

    // আলার্ট ফাংশন কল করা
    myFunction();

    this.disabled = true;
    this.classList.add("bg-gray-400");
});

// আলার্ট ফাংশন (বাইরে ডিফাইন করা হয়েছে)
function myFunction() {
    alert("Board Update seccesfull!");
}
function disableButton(){
    document.getElementById('add-text').disable = true;
}



document.getElementById('add-text-2').addEventListener('click',function(){
    const ol = document.getElementById('text-box-2');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have Complate The Task Add <br> Dark Mode at 12:48:15';
    ol.appendChild(h1);
    myFunction();

    this.disabled = true;
    this.classList.add("bg-gray-400");
})
function myFunction() {
    alert("Board Update seccesfull!")
}

document.getElementById('add-text-3').addEventListener('click',function(){
    const ol = document.getElementById('text-box-3');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have Complate The Task Add <br> Dark Mode at 12:48:15';
    ol.appendChild(h1);
    myFunction();

    this.disabled = true;
    this.classList.add("bg-gray-400");
})
function myFunction() {
    alert("Board Update seccesfull!")
}

document.getElementById('add-text-4').addEventListener('click',function(){
    const ol = document.getElementById('text-box-4');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have Complate The Task Add <br> Dark Mode at 12:48:15';
    ol.appendChild(h1);
    myFunction();

    this.disabled = true;
    this.classList.add("bg-gray-400");
})
function myFunction() {
    alert("Board Update seccesfull!")
}

document.getElementById('add-text-5').addEventListener('click',function(){
    const ol = document.getElementById('text-box-5');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have Complate The Task Add<br> Dark Mode at 12:48:15';
    ol.appendChild(h1);
    myFunction();

    this.disabled = true;
    this.classList.add("bg-gray-400");
})
function myFunction() {
    alert("Board Update seccesfull!")
}

document.getElementById('add-text-6').addEventListener('click',function(){
    const ol = document.getElementById('text-box-6');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have Complate The Task Add <br> Dark Mode at 12:48:15';
    ol.appendChild(h1);
    myFunction();

    this.disabled = true;
    this.classList.add("bg-gray-400");
})
function myFunction() {
    alert("Board Update seccesfull!")
}


document.getElementById('click-link').addEventListener('click',function(){
    window.location.href = "try.html";
})

//clear button

document.getElementById('clear-button').addEventListener('click', function() {
    const paragraphsContainer = document.getElementById('paragraphs-container');
    paragraphsContainer.innerHTML = ''; 
});