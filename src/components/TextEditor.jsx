import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveAs } from "file-saver";

const TextEditor = () => {
    const [content, setContent] = useState("");

    const handleSave = () => {
        const blob = new Blob([content], { type: "text/html;charset=utf-8" });
        saveAs(blob, "document.html");
    };

    // Quill szerkesztő beállításai (szövegszín és háttérszín engedélyezése)
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }], // Címsorok
            ["bold", "italic", "underline"], // Félkövér, dőlt, aláhúzott
            [{ color: [] }, { background: [] }], // Szöveg- és háttérszín
            [{ list: "ordered" }, { list: "bullet" }], // Listák
            ["link"], // Link hozzáadás
            ["clean"], // Formázás törlése
        ],
    };

    return (
        <div className="editor-container">
            <h2>HTML Szövegszerkesztő</h2>
            <ReactQuill value={content} onChange={setContent} modules={modules} theme="snow" />
            <button className="button-form save-button"
                onClick={handleSave}
            >
                Mentés HTML-ként
            </button>
        </div>
    );
};

export default TextEditor;
