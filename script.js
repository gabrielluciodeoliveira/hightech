function mudarTema()
{
    document.body.classList.toggle("escuro");
    const iconElement = document.querySelector(".material-symbols-outlined");
    
    if (document.body.classList.contains("escuro")) 
    {
        iconElement.textContent = "toggle_on";
        console.log(document.body.classList.contains("escuro"))
}

else 
{
    iconElement.textContent = "toggle_off";
}
}