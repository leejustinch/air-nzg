AirNZG.Utils = {
	deselectableRadios: function() {
		var wasChecked;
		
		$("input[type=radio]").on("mousedown", function(e1) {
			var $radio = $(e1.currentTarget);

			wasChecked = $radio.prop("checked")
		});

		$("input[type=radio]").on("click", function(e1) {
			var $radio = $(e1.currentTarget);

			if (wasChecked) {
				$radio.prop("checked", false);
			}
		});
		
	}
}