import { Form } from "react-hartan"
import useForm from "react-hartan/Hooks/Form"
import "./Contact.css"

export default function Contact() {

    const [updateData, submit, submitted] = useForm("https://jsonplaceholder.typicode.com/posts");

    return (
        <div className="contact">
            <Form userFormCardStyle={"FormDark"} updateData={updateData} submit={submit} submitted={submitted} userTitleStyle="textWhite" userInputFieldStyle="inputField" userSubmittedStyle="submited" />
        </div>
    )
}