module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
function send_thumb_mail(my_pic, my_thumb){
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'simplon.devcloud@gmail.com',
          pass: process.env.GMAIL_PASSWORD
        }
    });
        
    var mailOptions = {
        from: 'simplon.devcloud@gmail.com',
        to: 'simplon.devcloud@gmail.com',
        subject: 'Thumbs Up !',
        text: "Nouveau thumbnail dans la bibliothèque Azure",
        attachments: [{
            filename: 'original.jpg',
            //chemin d'acces car "local"
            path: my_pic,           
        },
        {   
            filename: 'thumbnail.jpg',
            //contenu car il est créé dans la fonciton
            content: my_thumb,            
        }]
    };
    
    mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    
}

};