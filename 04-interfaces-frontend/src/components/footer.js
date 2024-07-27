import React from "react";

export function SimpleFooter() {
    return (
        <footer className="bg-gray-900 text-white flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between p-6 lg:px-8">
            &copy; 2024 Esteban Quinones. All rights reserved.
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">License</a>
                </li>
                <li>
                    <a href="#">Contribute</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </footer>
    );
}

export default SimpleFooter;