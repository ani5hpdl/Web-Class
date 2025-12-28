const Contact = require("../models/ContactModel")

const submitForm = async (req,res) =>{
    try{
        const {name, phoneNumber, message} = req.body;
        if(!name || !phoneNumber || !message){
            return res.status(400).json({
                message: "All Fields Are Required!"
            });
        }
        const newContact = await Contact.create({
            name,
            phoneNumber,
            message
        });
        res.status(201).json({
            message: "Form Submitted Sucessfully",
            contact: newContact
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error While Submiting Form!",
            error : error.message
        });
    }
}

module.exports = {
    submitForm
}