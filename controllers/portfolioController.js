const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
  service:'smtp.gmail.com',
  auth:{
    user:'kumarshrivastav1024@gmail.com',
    pass:'Ankit@123'
  },
})
// const mailOptions={
//  from:'kumarshrivastav1024@gmail.com',
//  to:'kumarshrivastav1024@gmail.com',
//  subject:'Connecting to me...',
//  body:'Body of Mail'

// }
// transporter.sendMail(mailOptions,(error,info)=>{
//   if(error){
//     console.log(error)
//   }
//   else{
//     console.log('Email has been send Successfully',info)
//   }
// })

const sendEmailController = (req, res) => {

  try {
    const {name,email,msg}=req.body
    if(!name || !email || !msg){
      return res.status(500).send({sucess:false,message:'Please Provide All Fields'})
    }
    transporter.sendMail({
      to:'kumarshrivastav1024gmail.com',
      from:'kumarshrivastav1024gmail.com',
      subject:'Contact Someone',
      html:`
      <h5>Details Information</h5>
      <ul>
      <li><p>Name : ${name}</p></li>
      <li><p>Name : ${email}</p></li>
      <li><p>Name : ${msg}</p></li>
      </ul>
      `
    })
    return res.send({
      sucess: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ sucess: false, message: "Send Email API Error", error });
  }
};
module.exports = { sendEmailController };
