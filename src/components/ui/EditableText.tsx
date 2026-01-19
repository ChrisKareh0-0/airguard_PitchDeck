"use client";

import { useState, useEffect } from "react";

interface EditableTextProps {
    initialText: string;
    isEditMode: boolean;
    className?: string;
    multiline?: boolean;
    onChange?: (newText: string) => void;
}

export default function EditableText({
    initialText,
    isEditMode,
    className = "",
    multiline = false,
    onChange,
}: EditableTextProps) {
    const [text, setText] = useState(initialText);

    useEffect(() => {
        // Only update if initialText changes meaningfully, though usually it's static
        if (initialText !== text && initialText !== "") {
            // setText(initialText); // actually, we don't want to reset if user edited. 
            // Only reset if completely new initialText (e.g. reused component).
            // For now, let's assume initialText is static and we only set it once.
        }
    }, [initialText]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setText(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    if (isEditMode) {
        if (multiline) {
            return (
                <textarea
                    value={text}
                    onChange={handleChange}
                    className={`bg-white/10 text-current p-2 rounded border border-white/20 w-full outline-none focus:border-primary-green transition-all ${className}`}
                    rows={3}
                />
            );
        }
        return (
            <input
                type="text"
                value={text}
                onChange={handleChange}
                className={`bg-white/10 text-current p-1 px-2 rounded border border-white/20 outline-none focus:border-primary-green transition-all min-w-[50px] ${className}`}
                style={{ width: `${Math.max(text.length, 5)}ch` }}
            />
        );
    }

    return <span className={className}>{text}</span>;
}
