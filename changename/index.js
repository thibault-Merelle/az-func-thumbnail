module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    const {uri} = context.bindingData;
    const {blobTrigger} = context.bindingData;
    const name = blobTrigger.split('/')[1];
    const name_s = name.split('.').slice(0, -1).join('.');
    const name_ext = name.split('.').pop();
    //const name_thumb = ${name_s}_thumb.${name_ext};
    const path_file = uri.substring(0, uri.lastIndexOf("/"));
    
    context.log(uri , myBlob)
};