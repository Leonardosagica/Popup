window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("form").style.display = "block";
        document.querySelector(".container").style.display = "flex";
    }, 3000)
})

document.querySelector("#close").addEventListener("click", () => {
document.querySelector('form').style.display = 'none';
document.querySelector('.container').style.display = 'none'; 
})