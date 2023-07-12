const router = require('express').Router();
const nodemailer = require('nodemailer');
   
router.post('/user/enviar', async (req, res) => {
  try {
    // Crear el transporte con la cuenta de prueba
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "correoejemplo@gmail.com",
          pass:"token de tu aplicacion"
        }
      });

    // Configurar el mensaje de correo electrónico
    const mensaje = {
      from: '" 👻" <correoejemplo@gmail.com>',
      to: "correoejemplo@gmail.com",
      subject: "Hello ✔",
      
      html: "<b>Hello world?</b>"
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mensaje)

    return res.status(201).json({
         msg: "El correo electrónico ha sido enviado correctamente"});
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
});


module.exports = router