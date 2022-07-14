import React, {useRef} from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const editorDefaultValue = "<table><tbody><tr><td><strong>Meeting agenda</strong><br></td><td>​<strong>Minutes of Meeting</strong>​<br></td></tr><tr><td><div><br></div></td><td><br></td></tr></tbody></table><p><br></p>"
export const RichTextEditor = () => {
    const editor = useRef();
    let result = ""
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };
    const handleChange = (content) => {
        console.log(content);
        result = content
    }
    return (
        <>
            <h1>Sun Editor</h1>
            <SunEditor
                defaultValue={editorDefaultValue}
                getSunEditorInstance={getSunEditorInstance}
                onChange={handleChange}
                setAllPlugins={true}
                setOptions={{
                    height: "200",
                    width: "50",
                    buttonList: [["table"]],
                }}
            />
        </>
    )
}