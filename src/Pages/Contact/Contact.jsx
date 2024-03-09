import { SimpleForm } from "react-hartan"
import { useEffect } from "react"
import "./Contact.css"

export default function Contact() {

    const fieldsData = {
        inputTag: [
            {
                inputType: "text",
                inputId: "name",
                inputName: "entry.342772218",
                inputLabel: "Name",
                required: true
            },
            {
                inputType: "email",
                inputId: "email",
                inputName: "entry.1872587553",
                inputLabel: "Email",
                required: true
            },
            {
                inputType: "number",
                inputId: "phoneNo",
                inputName: "entry.966279105",
                inputLabel: "Contact Number",
                required: true
            }
        ],
        textareaTag: [
            {
                textareaId: "message",
                textareaName: "entry.626841158",
                textareaLabel: "Message",
                required: true
            }
        ]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="contact" data-aos="zoom-in" data-aos-duration="700">
            <SimpleForm action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeWWhGEa-VKp8-zR_dvzmjRdGYISw3f-ZOF9WuUGjXgfgWmIA/formResponse" fields={fieldsData} userFormCardStyle={"FormDark"} userTitleStyle="textWhite" userInputFieldStyle="inputField" />
        </div>
    )
}