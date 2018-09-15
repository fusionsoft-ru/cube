$(document).ready(function(){
	$('.chosen').chosen();
	$('[data-toggle="tooltip"]').tooltip();
});

function settingsUploadFile(elemnet) {
	$(elemnet).parent().find('input[type="file"]').click();
}

$('#upload-file-input').on('change', function(event) {
	var file = event.target.files[0];
	$('.upload-file-text-box').val(file['name']);
});