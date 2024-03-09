import { useParams } from "react-router-dom"
import "./Previews.css"
import { Components } from "../../Data/PreviewData.jsx"
import { PreviewContent } from "../../Data/Preview.js";
import { Snippet, Button } from "react-hartan";

export default function Preview({ defaultIndex }) {
    const params = useParams();
    const { id = Components[0].id } = params;

    let index = Components.findIndex((obj) => obj.id === id);

    let snippetText = <div>
        <p>import {`{${PreviewContent[index]?.heading}}`} from &quot;react-hartan&quot;</p>
        <p>function App() {`{`} </p>
        <p> return {`(`}</p>
        <p>{`<>`}</p>
        <p>{`<${PreviewContent[index]?.heading} />`}</p>
        <p>{`</>`}</p>
        <p>{`)`}</p>
        <p>{`}`}</p>
        <p>{`export default App`}</p>
    </div>;

    let buttonText = <a href={PreviewContent[index]?.docsLink} target="_blank">Read Docs</a>;

    return (
        <>
            <h1>{PreviewContent[index]?.heading?.toUpperCase()}</h1>
            <hr />
            {
                Components[index === -1 ? defaultIndex : index]?.elem
            }
            <div className="importCode">
                <h2>{PreviewContent[index]?.content}</h2>
                <Snippet userSnippetTextStyle="codeStyle" snippetSymbolState={false} snippetText={snippetText} userSnippetStyle="snippetStyle" />
            </div>
            <Button buttonText={buttonText} userButtonStyle="userButtonStyle" />
        </>
    )
}