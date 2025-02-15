import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveAs } from "file-saver";


const TextEditor = () => {
    const [content, setContent] = useState("");

    const handleSave = () => {
        const blob = new Blob([content], { type: "text/html;charset=utf-8" });
        saveAs(blob, "document.html");
    };

    // Quill szerkesztő beállításai (szövegszín, háttérszín, betűméret, igazítás és képfeltöltés engedélyezése)
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }], // Címsorok
            [{ size: [] }], // Betűméret
            ["bold", "italic", "underline"], // Félkövér, dőlt, aláhúzott
            [{ color: [] }, { background: [] }], // Szöveg- és háttérszín
            [{ list: "ordered" }, { list: "bullet" }], // Listák
            [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }], // Igazítás
            ["link", "image"], // Link és kép hozzáadás
            ["clean"], // Formázás törlése
        ],
    };

    return (
        <div className="editor-container">
            <h2>HTML Szövegszerkesztő</h2>
            <ReactQuill value={content} onChange={setContent} modules={modules} theme="snow" />
            <button className="button-form save-button" onClick={handleSave}>
                Mentés HTML-ként
            </button>
        </div>
    );
};

export default TextEditor;
