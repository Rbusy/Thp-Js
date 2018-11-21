
$(document).ready(function () {
	$("#myModal").ready(function () {

			// Get the modal
			var modal = document.getElementById('myModal');

			// Get the button that opens the modal
			var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal
		btn.onclick = function() {
					$("#myModal").fadeIn();
					$("#myModal").fadeIn("slow");
					$("#myModal").fadeIn(3000);
				}

					// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
				if (event.target == modal) {
					$("#myModal").fadeOut();
					$("#myModal").fadeOut("slow");
					$("#myModal").fadeOut(3000);
					}
			}
	});
});

$("#dialog").dialog({ show: 'fade' });

