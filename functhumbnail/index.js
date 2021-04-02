const Jimp = require("jimp");
// const utils = require("utils");

module.exports = (context, myBlob) => {
    context.log("blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    // context.log(context.bindingData)

    context.bindings.outputBlob = context.bindings.myBlob;
    
    
    // Read image with Jimp
    Jimp.read(myBlob).then((image) => {
        // Manipulate image
        image
            .clone()
            .resize(200, Jimp.AUTO)
            //.greyscale()
            .quality(50) // set the quality for JPEGs
            .getBuffer(Jimp.MIME_JPEG, (error, stream) => {

                // Check for errors
                if (error) {
                    context.log(`There was an error processing the image.`);
                    context.done(error);
                }
                else {
                    context.log(`Successfully processed the image`);
                    // Bind the stream to the output binding to create a new blob
                    context.done(null, stream);

                }

            });

    });

    context.done();
};