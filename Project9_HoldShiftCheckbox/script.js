(function getConsolePrint() {
    console.log("Hello from Console")
})();

const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


let lastcheck;
let inBetween;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        // go ahead and what we do please;
        console.log("inside if", this)
        checkboxs.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastcheck) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastcheck = this;
}



function addItem(data) {
    let element = `<div class="item">
    <input type="checkbox" name="" id="">
    <p>${data}</p>
</div>`;

    document.querySelectorAll('.inbox').appendChild(element)

}

addItem("Information");