import { useState, useEffect } from "react";

export function useCounter(end: number | string, duration = 2000, start = 0, isStatic = false) {
    const [count, setCount] = useState(isStatic ? end : start);
    const [hasStarted, setHasStarted] = useState(false);

    // Extract numeric part if string contains non-numeric chars (e.g. "$9,000")
    const numericEnd = typeof end === "string"
        ? parseFloat(end.replace(/[^0-9.]/g, ""))
        : end;

    const prefix = typeof end === "string" && end.startsWith("$") ? "$" : "";
    const suffix = typeof end === "string" && end.includes("%") ? "%" : "";

    useEffect(() => {
        if (isStatic) {
            setCount(end);
            return;
        }

        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            const currentCount = start + (numericEnd - start) * ease;

            // Format based on input type/content
            if (typeof end === "string") {
                // Simple formatting to match localized string if possible, or just raw number
                // For standard "1,000" or "$1,000", basic toLocaleString works well
                const formatted = Math.floor(currentCount).toLocaleString();
                setCount(`${prefix}${formatted}${suffix}`);
            } else {
                setCount(Math.floor(currentCount));
            }

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure exact end value
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [hasStarted, end, duration, start, isStatic, numericEnd, prefix, suffix]);

    return { count, start: () => setHasStarted(true) };
}
