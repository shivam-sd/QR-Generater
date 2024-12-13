const genrateqr = document.querySelector("button");
const img = document.querySelector("img");
const input = document.querySelector("input");
const DownloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-box");

const GenrateQr = (qrtext) => {
    new QRCode(qrContainer, {
        text: qrtext,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
    DownloadBtn.style.display = "inline-block";
}

const ifInputNull = () => {
    if(!input.value){
        alert("Enter Any URL or Text");
    }else{
        const inputText = input.value;
        console.log(inputText)
        GenrateQr(inputText);
        qrContainer.style.padding = "10px";
    }
}

genrateqr.addEventListener("click" , () => {
    qrContainer.innerHTML = "";
    ifInputNull();
})

DownloadBtn.addEventListener("click" , () => {
    const img = document.querySelector(".qr-box img");
    const imgSrc = img.getAttribute("src");
    DownloadBtn.setAttribute("href" , imgSrc)
    console.log(imgSrc);
})













// const genrateqr = () => {
//     const inpVal = input.value;
//     // console.log(inpVal);
//     if(!inpVal){
//         alert("Pleace Enter Any URL OR Data");
//     }
//     img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inpVal)}`;
// }

// btn.addEventListener("click", (e) => {
//     genrateqr();
// })


