const Jimp = require("jimp");
// const utils = require("utils");

module.exports = (context, myBlob) => {
    context.log("blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    // context.log(context.bindingData)
    const {uri} = context.bindingData;
    const {blobTrigger} = context.bindingData;
    const name = blobTrigger.split('/')[1];
    const name_s = name.split('.').slice(0, -1).join('.');
    const name_ext = name.split('.').pop();
    //const name_thumb = ${name_s}_thumb.${name_ext};
    const path_file = uri.substring(0, uri.lastIndexOf("/"));
    
    context.log(uri , myBlob)
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