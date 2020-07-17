Dropzone.autoDiscover = false;
jQuery(document).ready(function() {
    $("#myDropzone").dropzone({
        url: "/file/post",
        paramName: "file",
        uploadMultiple: true,
        complete: function(file) {
            if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
                alert('Complete');
            }
        },
        success: function(file, response) {
            console.log('asdff');
            alert(response);
        },
        transformFile: function(file, done) {
            // Create Dropzone reference for use in confirm button click handler
            var myDropZone = this;
            // Create the image editor overlay
            var editor = document.createElement('div');
            editor.style.position = 'fixed';
            editor.style.left = 0;
            editor.style.right = 0;
            editor.style.top = 0;
            editor.style.bottom = 0;
            editor.style.zIndex = 9999;
            editor.style.backgroundColor = '#000';
            document.body.appendChild(editor);
            // Create confirm button at the top left of the viewport
            var buttonConfirm = document.createElement('button');
            buttonConfirm.style.position = 'absolute';
            buttonConfirm.style.left = '10px';
            buttonConfirm.style.top = '10px';
            buttonConfirm.style.zIndex = 9999;
            buttonConfirm.textContent = 'Confirm';
            editor.appendChild(buttonConfirm);
            buttonConfirm.addEventListener('click', function() {
                // Get the canvas with image data from Cropper.js
                var canvas = cropper.getCroppedCanvas({
                    width: 256,
                    height: 256
                });
                // Turn the canvas into a Blob (file object without a name)
                canvas.toBlob(function(blob) {
                    // Create a new Dropzone file thumbnail
                    myDropZone.createThumbnail(
                        blob,
                        myDropZone.options.thumbnailWidth,
                        myDropZone.options.thumbnailHeight,
                        myDropZone.options.thumbnailMethod,
                        false,
                        function(dataURL) {

                            // Update the Dropzone file thumbnail
                            myDropZone.emit('thumbnail', file, dataURL);
                            // Return the file to Dropzone
                            done(blob);
                        });
                });
                // Remove the editor from the view
                document.body.removeChild(editor);
            });
            // Create an image node for Cropper.js
            var image = new Image();
            image.src = URL.createObjectURL(file);
            editor.appendChild(image);

            // Create Cropper.js
            var cropper = new Cropper(image, { aspectRatio: 1 });
        }
    });
});