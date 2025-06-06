import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";

export default function ExpandableSearch() {
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when expanded
    useEffect(() => {
        if (isExpanded) {
            inputRef.current?.focus();
        }
    }, [isExpanded]);

    // Close input when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest("#search-button")
            ) {
                setIsExpanded(false);
            }
        }
        if (isExpanded) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isExpanded]);

    // Close on Escape key press
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsExpanded(false);
            }
        }
        if (isExpanded) {
            document.addEventListener("keydown", onKeyDown);
            return () => document.removeEventListener("keydown", onKeyDown);
        }
    }, [isExpanded]);

    return (
        <div className="flex items-center w-full">
            {!isExpanded && <button
                id="search-button"
                onClick={() => setIsExpanded(true)}
                aria-label="Open search"
                className="p-2 focus:outline-none"
            >
                <MagnifyingGlassIcon
                    className="w-6 h-6 text-gray-600"
                />

            </button>}

            <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className={`transition-all duration-300 ease-in-out
                    flex-grow
                    md:ml-2
          bg-gray-100 dark:bg-gray-700
          border border-gray-300 dark:border-gray-600
          rounded-full
          py-1 px-3
          focus:outline-none 
          ${isExpanded
                        ? "md:w-48 w-[64vw] opacity-100"
                        : "w-0 opacity-0 pointer-events-none"
                    }`}
            />
        </div>
    );
}
