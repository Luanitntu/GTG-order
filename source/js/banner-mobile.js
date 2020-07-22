Dropzone.autoDiscover = false;
jQuery(document).ready(function() {
    $("#myDropzone").dropzone({
        url: "/file/post",
        paramName: "file",
        uploadMultiple: true,
        maxFiles: 2,
        acceptedFiles: 'image/*',
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
            var myDropZone = this;
            var doka = Doka.create();
            // Edit the file and wait for confirm
            doka.edit(file).then(function(output) {
                // Get blob from Doka output object
                var blob = output.file;
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
                        // Tell Dropzone of the new file
                        done(blob);
                    }
                );
            });
        }
    });
});