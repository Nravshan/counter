let plussButton = document.getElementById("pluss");
let minussButton = document.getElementById("minuss")
let counter = document.getElementById("counter");
let count = 0;

plussButton.addEventListener("click", function() {
count++;
counter.textContent = count ;
updateStyles(count); 
});  


minussButton.addEventListener("click", () => {
    count--;
    counter.textContent = count ;
    updateStyles(count); 
    });

function updateStyles(count)   {
    if(count < 0) {
        counter.classList.add("negative");
    } else if (count > 0) {
        counter.classList.add("positive")
    } else {
        counter.className = "";
    }
}