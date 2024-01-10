document.addEventListener("DOMContentLoaded", () => {
	const hamburger_el = document.querySelector(".hamburger");
	const verticalMenu_el = document.querySelector(".vertical-menu");
	const body_el = document.querySelector("body");
    const closeBtn_el = document.querySelector('.vertical-menu .close')

	hamburger_el.addEventListener("click", () => {
		body_el.classList.toggle("shadow");
		verticalMenu_el.classList.toggle("active");
	});

    closeBtn_el.addEventListener('click', () => {
        body_el.classList.remove("shadow");
		verticalMenu_el.classList.remove("active");
    })
});
