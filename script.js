document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const links = document.querySelectorAll(".navbar ul li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});

    // ===== CONTADOR =====
    const fechaBoda = new Date("2026-10-11T17:00:00").getTime();

    const contador = setInterval(() => {

        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("dias").innerHTML = dias;
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;

        if (diferencia < 0) {
            clearInterval(contador);
            document.getElementById("contador").innerHTML = "Avui es el gran dia!";
        }

    }, 1000);

;