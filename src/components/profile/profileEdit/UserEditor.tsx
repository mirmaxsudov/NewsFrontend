import {useState, useRef, useEffect} from 'react';
import Editor, {EditorRef} from "../../editor/Editor.tsx";

export default function UserEditor({cnt}: { cnt: string }) {
    const [content, setContent] = useState<string>('');
    const editorRef = useRef<EditorRef>(null);

    useEffect(() => {
        setContent(cnt);
    }, [cnt]);

    const handleNew = () => {
        editorRef.current?.clearEditor();
        setContent('');
    };

    const handleSave = async () => {
        alert('Saved!');
    };

    return (
        <div className="space-y-4 mt-[20px]">
            <div className="flex gap-2">
                <button onClick={handleNew} className="px-4 py-2 bg-gray-200 rounded">
                    New
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
                    Save
                </button>
            </div>

            <Editor
                ref={editorRef}
                value={content}
                onChange={setContent}
                className="min-h-[300px]"
            />
        </div>
    );
}