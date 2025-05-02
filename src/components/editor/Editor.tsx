import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
    ChangeEvent,
} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import {uploadFile} from "../../api/requests/file/file.api.ts";
import {GET_IMAGE_URL} from "../../constants/url.ts";

export interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string | undefined;
}

export interface EditorRef {
    clearEditor: () => void;
}

const Editor = forwardRef<EditorRef, EditorProps>(
    ({value, onChange, className}, ref) => {
        const quillRef = useRef<ReactQuill | null>(null);
        const [showColorPicker, setShowColorPicker] = useState(false);

        useImperativeHandle(ref, () => ({
            clearEditor: () => {
                const editor = quillRef.current?.getEditor();
                if (editor) {
                    editor.setText("");
                    onChange("");
                }
            },
        })); 

        const handleImage = () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.click();

            input.onchange = async () => {
                if (!input.files || input.files.length === 0) return;
                const file = input.files[0];

                const uploadedUrl = await uploadToServer(file);

                console.log(uploadedUrl)

                const editor = quillRef.current?.getEditor();
                if (!editor) return;
                const range = editor.getSelection(true);
                if (range)
                    editor.insertEmbed(range.index, "image", uploadedUrl, "user");
            };
        };

        // ---------- Handler: Toggle & Apply Color ----------
        const toggleColorPicker = () => {
            setShowColorPicker((prev) => !prev);
        };

        const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
            const chosenColor = e.target.value;
            const editor = quillRef.current?.getEditor();
            if (!editor) return;
            const range = editor.getSelection(true);
            if (range) {
                editor.format("color", chosenColor);
            }
        };

        // ---------- Handler: Toggle Bold (Text) ----------
        const handleText = () => {
            const editor = quillRef.current?.getEditor();
            if (!editor) return;
            const range = editor.getSelection(true);
            if (!range) return;
            const currentFormat = editor.getFormat(range);
            const isBold = currentFormat.bold === true;
            editor.format("bold", !isBold);
        };

        // ---------- Handler: Align ----------
        const handleAlignChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const alignment = e.target.value;
            const editor = quillRef.current?.getEditor();
            if (!editor) return;
            const range = editor.getSelection(true);
            if (range) {
                if (alignment === "left") {
                    if (range.length === 0) {
                        editor.format("align", false);
                    } else {
                        editor.formatLine(range.index, range.length, "align", false);
                    }
                } else {
                    if (range.length === 0) {
                        editor.format("align", alignment);
                    } else {
                        editor.formatLine(range.index, range.length, "align", alignment);
                    }
                }
            }
        };

        // ---------- Handler: Header Dropdown ----------
        const handleHeaderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const headerValue = e.target.value;
            const editor = quillRef.current?.getEditor();
            if (!editor) return;
            const range = editor.getSelection(true);
            if (range) {
                // "false" means no header (normal text)
                if (headerValue === "false") {
                    editor.format("header", false);
                } else {
                    editor.format("header", parseInt(headerValue, 10));
                }
            }
        };

        // ---------- Handler: Link ----------
        const handleLink = () => {
            const editor = quillRef.current?.getEditor();
            if (!editor) return;
            const range = editor.getSelection(true);
            if (!range) return;
            const currentFormat = editor.getFormat(range);
            const currentLink = currentFormat.link;
            if (currentLink) {
                editor.format("link", false);
            } else {
                const url = prompt("Enter the link URL:", "https://");
                if (url) {
                    editor.format("link", url);
                }
            }
        };

        const uploadToServer = async (file: File): Promise<string> => {
            return GET_IMAGE_URL + await uploadFile(file);
        };

        return (
            <div className={`editor-container ${className}`}>
                <div className="editor-toolbar">
                    <button className="toolbar-btn" onClick={handleImage}>
                        <svg
                            width="15"
                            height="13"
                            viewBox="0 0 15 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.15625 3.03125C4.41797 3.03125 3.84375 3.63281 3.84375 4.34375C3.84375 5.08203 4.41797 5.65625 5.15625 5.65625C5.86719 5.65625 6.46875 5.08203 6.46875 4.34375C6.46875 3.63281 5.86719 3.03125 5.15625 3.03125ZM13.2227 0.625H2.72266C1.76562 0.625 0.972656 1.41797 0.972656 2.375V11.125C0.972656 12.1094 1.76562 12.875 2.72266 12.875H13.2227C14.1797 12.875 14.9727 12.1094 14.9727 11.125V2.375C14.9727 1.41797 14.207 0.625 13.2227 0.625ZM13.6602 10.9609L9.91406 5.875C9.83203 5.73828 9.69531 5.65625 9.53125 5.65625C9.33984 5.65625 9.20312 5.73828 9.09375 5.875L6.19531 9.8125L5.18359 8.55469C5.07422 8.44531 4.9375 8.36328 4.77344 8.36328C4.60938 8.36328 4.47266 8.44531 4.36328 8.55469L2.3125 11.125L2.28516 2.375C2.28516 2.15625 2.50391 1.9375 2.72266 1.9375H13.2227C13.4688 1.9375 13.6602 2.15625 13.6602 2.375V10.9609Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                        <span className="text-[#3E3232BF] font-medium">Image</span>
                    </button>

                    {/* Color Button + Color Picker */}
                    <div className="color-picker-wrapper">
                        <button className="toolbar-btn" onClick={toggleColorPicker}>
                            <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.1797 1.57031C15.2461 2.63672 15.2461 4.35938 14.1797 5.42578L11.418 8.1875L11.6641 8.46094C12.0195 8.78906 12.0195 9.36328 11.6641 9.69141C11.3359 10.0469 10.7617 10.0469 10.4336 9.69141L6.05859 5.31641C5.70312 4.98828 5.70312 4.41406 6.05859 4.08594C6.38672 3.73047 6.96094 3.73047 7.28906 4.08594L7.5625 4.33203L10.3242 1.57031C11.3906 0.503906 13.1133 0.503906 14.1797 1.57031ZM2.50391 9.60938L5.8125 6.30078L7.04297 7.53125L3.73438 10.8398C3.65234 10.9219 3.625 11.0312 3.625 11.1406V12.125H4.60938C4.71875 12.125 4.82812 12.0977 4.91016 12.0156L8.21875 8.70703L9.44922 9.9375L6.14062 13.2461C5.73047 13.6562 5.18359 13.875 4.60938 13.875H3.43359L2.33984 14.6133C2.01172 14.8594 1.54688 14.8047 1.24609 14.5039C0.945312 14.2031 0.890625 13.7383 1.13672 13.4102L1.875 12.3164V11.1406C1.875 10.5664 2.09375 10.0195 2.50391 9.60938Z"
                                    fill="#3E3232"
                                    fillOpacity="0.5"
                                />
                            </svg>
                            <span className="text-[#3E3232BF] font-medium">Color</span>
                        </button>
                        {showColorPicker && (
                            <input
                                type="color"
                                className="color-input"
                                onInput={handleColorChange}
                            />
                        )}
                    </div>

                    {/* Bold (Text) Button */}
                    <button className="toolbar-btn" onClick={handleText}>
                        <svg
                            width="18"
                            height="15"
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.5703 1.87109L8.07031 14.1211C7.93359 14.5859 7.46875 14.8594 7.00391 14.7227C6.53906 14.5859 6.26562 14.1211 6.40234 13.6562L9.90234 1.40625C10.0391 0.941406 10.5039 0.667969 10.9688 0.804688C11.4336 0.941406 11.707 1.40625 11.5703 1.87109ZM14.4141 4.08594L17.4766 7.14844C17.832 7.47656 17.832 8.05078 17.4766 8.37891L14.4141 11.4414C14.0859 11.7969 13.5117 11.7969 13.1836 11.4414C12.8281 11.1133 12.8281 10.5391 13.1836 10.2109L15.6172 7.75L13.1836 5.31641C12.8281 4.98828 12.8281 4.41406 13.1836 4.08594C13.5117 3.73047 14.0859 3.73047 14.4141 4.08594ZM4.78906 5.31641L2.35547 7.75L4.78906 10.2109C5.14453 10.5391 5.14453 11.1133 4.78906 11.4414C4.46094 11.7969 3.88672 11.7969 3.55859 11.4414L0.496094 8.37891C0.140625 8.05078 0.140625 7.47656 0.496094 7.14844L3.55859 4.08594C3.88672 3.73047 4.46094 3.73047 4.78906 4.08594C5.14453 4.41406 5.14453 4.98828 4.78906 5.31641Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                        <span className="text-[#3E3232BF] font-medium">Text</span>
                    </button>

                    {/* Header Dropdown */}
                    <div className="header-select-wrapper relative">
                        <svg
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 4H12V6H2V4ZM2 8H12V10H2V8Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                        <select
                            className="header-select pl-10 text-[#3E3232BF] font-medium"
                            onChange={handleHeaderChange}
                        >
                            <option value="false">Normal</option>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                            <option value="4">Heading 4</option>
                            <option value="5">Heading 5</option>
                            <option value="6">Heading 6</option>
                        </select>
                    </div>

                    {/* Alignment Select */}
                    <div className="align-select-wrapper relative">
                        <svg
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.875 2.375H1.75C1.25781 2.375 0.875 1.99219 0.875 1.5C0.875 1.03516 1.25781 0.625 1.75 0.625H7.875C8.33984 0.625 8.75 1.03516 8.75 1.5C8.75 1.99219 8.33984 2.375 7.875 2.375ZM7.875 9.375H1.75C1.25781 9.375 0.875 8.99219 0.875 8.5C0.875 8.03516 1.25781 7.625 1.75 7.625H7.875C8.33984 7.625 8.75 8.03516 8.75 8.5C8.75 8.99219 8.33984 9.375 7.875 9.375ZM0.875 5C0.875 4.53516 1.25781 4.125 1.75 4.125H12.25C12.7148 4.125 13.125 4.53516 13.125 5C13.125 5.49219 12.7148 5.875 12.25 5.875H1.75C1.25781 5.875 0.875 5.49219 0.875 5ZM12.25 12.875H1.75C1.25781 12.875 0.875 12.4922 0.875 12C0.875 11.5352 1.25781 11.125 1.75 11.125H12.25C12.7148 11.125 13.125 11.5352 13.125 12C13.125 12.4922 12.7148 12.875 12.25 12.875Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                        <select
                            className="align-select pl-10 text-[#3E3232BF] font-medium"
                            onChange={handleAlignChange}
                        >
                            <option value="left">Align Left</option>
                            <option value="center">Align Center</option>
                            <option value="right">Align Right</option>
                            <option value="justify">Justify</option>
                        </select>
                    </div>

                    {/* Link Button */}
                    <button className="toolbar-btn" onClick={handleLink}>
                        <svg
                            width="18"
                            height="15"
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.95312 4.35938C6.48438 2.82812 9 2.82812 10.5312 4.35938C11.8984 5.72656 12.0898 7.88672 10.9688 9.47266L10.9414 9.5C10.668 9.91016 10.1211 9.99219 9.71094 9.71875C9.32812 9.41797 9.21875 8.87109 9.51953 8.48828L9.54688 8.46094C10.1758 7.55859 10.0664 6.38281 9.30078 5.61719C8.45312 4.74219 7.05859 4.74219 6.18359 5.61719L3.12109 8.67969C2.24609 9.52734 2.24609 10.9219 3.12109 11.7969C3.88672 12.5625 5.08984 12.6445 5.96484 12.043L5.99219 11.9883C6.40234 11.7148 6.94922 11.7969 7.22266 12.207C7.49609 12.5898 7.41406 13.1367 7.03125 13.4375L6.97656 13.4648C5.39062 14.5859 3.25781 14.3945 1.89062 13.0273C0.332031 11.4961 0.332031 8.98047 1.89062 7.44922L4.95312 4.35938ZM13.0195 11.1406C11.4883 12.6992 8.97266 12.6992 7.44141 11.1406C6.07422 9.77344 5.88281 7.64062 7.00391 6.05469L7.03125 6.02734C7.30469 5.61719 7.85156 5.53516 8.26172 5.80859C8.64453 6.08203 8.75391 6.62891 8.45312 7.03906L8.42578 7.06641C7.79688 7.94141 7.90625 9.14453 8.67188 9.91016C9.51953 10.7852 10.9141 10.7852 11.7891 9.91016L14.8516 6.84766C15.7266 5.97266 15.7266 4.57812 14.8516 3.73047C14.0859 2.96484 12.8828 2.85547 12.0078 3.48438L11.9805 3.51172C11.5703 3.8125 11.0234 3.70312 10.75 3.32031C10.4766 2.9375 10.5586 2.39062 10.9414 2.08984L10.9961 2.0625C12.582 0.941406 14.7148 1.13281 16.082 2.5C17.6406 4.03125 17.6406 6.54688 16.082 8.07812L13.0195 11.1406Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                        <span className="text-[#3E3232BF] font-medium">Link</span>
                    </button>
                </div>

                <ReactQuill
                    ref={quillRef}
                    value={value}
                    onChange={onChange}
                    modules={{toolbar: false}}
                    placeholder="Type..."
                    className="quill-editor"
                />
            </div>
        );
    }
);

export default Editor;
