const imageThumbnail = require('image-thumbnail');

module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    const options = {width: 100, height: 100}    
    try {
        const thumbnail = await imageThumbnail(myBlob, options);
        context.log(thumbnail);
        context.binding.outputBlob = thumbnail;
    } catch (err) {
        context.error(err);
    }
};