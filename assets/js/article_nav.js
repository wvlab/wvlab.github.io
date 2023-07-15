const body = document.body;

window.addEventListener("DOMContentLoaded", () => {

	const observer = new IntersectionObserver(entries => {
        if (parseInt(body.style.maxWidth.substring(0, -3)) < 800) {
            return;
        }

		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add("active");
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove("active");
			}
		});
	});

	document.querySelectorAll("section[id]").forEach((section) => {
		observer.observe(section);
	});
	
});
