tailwind.config = {
				darkMode: "class",
				theme: {
					extend: {
						colors: {
							primary: "#FF0000",
							"background-light": "#F8F8F8",
							"background-dark": "#0A0A0A",
						},
						fontFamily: {
							display: ["Oswald", "sans-serif"],
							body: ["Inter", "sans-serif"],
						},
						borderRadius: {
							DEFAULT: "0px", // Keeping the rugged, industrial feel
						},
					},
				},
			};

			function inviaMail() {
				// 1. Recuperiamo i valori dal form
				const destinatario = "esempio@email.it";
				const oggetto = document.getElementById('subject').value;
				const messaggio = document.getElementById('body').value;

				// 2. Usiamo encodeURIComponent per gestire spazi e invii a capo
				const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(mes saggio)}`;

				// 3. "Simuliamo" il click per aprire l'app predefinita
				window.location.href = mailtoLink;
			}
		
			document.addEventListener("DOMContentLoaded", function() {
				if (window.innerWidth < 768) {
					setTimeout(function() {
						const images = document.querySelectorAll('.bw-filter');
						images.forEach(image => {
							image.style.filter = 'grayscale(0%)';
						});
					}, 3000);
				}
			});

			function inviaMail() {
				// 1. Recuperiamo i valori dal form
				const destinatario = "nemeapower@gmail.com";
				const oggetto = document.getElementById('subject').value;
				const messaggio = document.getElementById('body').value;

				// 2. Usiamo encodeURIComponent per gestire spazi e invii a capo
				const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(messaggio)}`;

				// 3. "Simuliamo" il click per aprire l'app predefinita
				window.location.href = mailtoLink;
			}

			function apriInstagram() {
				const username = "nemea.perugia"; // Sostituisci con il tuo nome utente
				
				// Questo è l'URI scheme per aprire direttamente l'app sui DM
				const instagramAppUrl = `instagram://direct_thread?username=${username}`;
				const webUrl = `https://www.instagram.com/nemea.perugia`;

				// Tentativo di apertura dell'app
				window.location.href = instagramAppUrl;

				// Fallback: se dopo 2 secondi l'app non si è aperta, va sul web
				setTimeout(function() {
					if (!document.hidden) {
						window.location.href = webUrl;
					}
				}, 2000);
			}
		
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const email = "info@nemea.com"; // Placeholder email
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  });