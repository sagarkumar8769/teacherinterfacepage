
        document.getElementById('uploaded-image').addEventListener('click', function() {
            document.getElementById('upload-input').click();
        });

        document.getElementById('upload-input').addEventListener('change', function() {
            var fileInput = this;
            var imageLabel = document.getElementById('image-label');

            if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    imageLabel.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                };

                reader.readAsDataURL(fileInput.files[0]);
            }
        });
    