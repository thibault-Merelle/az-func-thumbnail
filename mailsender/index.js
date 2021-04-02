module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dupondj587@gmail.com',
        pass: process.env.GMAIL_PASSWORD 
    }
    });

    const mailOptions = {
    from: 'dupondj587@gmail.com',
    to: 'test.receptionflask@gmail.com',
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
