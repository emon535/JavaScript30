(function getConsolePrint() {
    console.log("Hello from Console")
})();

const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    console.log(suffix, this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
