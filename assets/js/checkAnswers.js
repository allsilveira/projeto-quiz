function checkAnswer(data, res) {
    const selectedOption = data.value;

    let toggleButton = document.querySelector(".toggleButton");
    let overlay = document.querySelector(".overlay");

    switch (selectedOption) {
        case res:
            overlay.style.display = "block";
            overlay.innerHTML = '<div><div class="shadow-text">Você acertou!</div><div class="linha-branca-overlay shadow-linha"></div></div>';
            break;

        default:
            overlay.style.display = "block";
            overlay.innerHTML = '<div><div class="shadow-text">Você errou!</div><div class="linha-branca-overlay shadow-linha"></div></div>';
            setTimeout(() => {
                overlay.style.display = "none";
            }, 2000);
            break;
    }
}