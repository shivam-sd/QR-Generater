const btn = document.querySelector("button");
const img = document.querySelector("img");
const input = document.querySelector("input");

const genrateqr = () => {
    const inpVal = input.value;
    // console.log(inpVal);
    if(!inpVal){
        alert("Pleace Enter Any URL OR Data");
    }
    img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inpVal)}`;
}

btn.addEventListener("click", (e) => {
    genrateqr();
})