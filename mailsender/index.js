module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD 
    }
    });

    const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: process.env.GMAIL_DEST,
    subject: 'funcion thumbnail run once',
    text: 'Nouveau thumbnail dans la bibliothèque Azure'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
    
};
