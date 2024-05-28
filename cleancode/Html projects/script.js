function readText(image)
    {
        var canvas = document.getElementById("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);

          

        var parsedText = OCRAD(canvas);
        // Or:
        // var parsedText = OCRAD(context);

        var output = document.getElementById("output");
        console.log(parsedText);
        output.innerHTML = parsedText.replace(/\s/g, '');
    };
    function previewFile() {
        console.log("preview file");
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            //preview.src = "";
        }
    }
      
