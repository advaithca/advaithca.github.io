import React from "react";

export default function Footer(){
    return(
        <div class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-dracula-nosferatu sticky bottom-0 z-10">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://youtu.be/dQw4w9WgXcQ" class="hover:underline">Advaith C A</a>.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#About" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#Education" class="mr-4 hover:underline md:mr-6">Education</a>
                </li>
                <li>
                    <a href="#WorkExperience" class="mr-4 hover:underline md:mr-6">Work-Experience</a>
                </li>
                <li>
                    <a href="mailto:advaith29042002@gmail.com" class="hover:underline">Contact Me</a>
                </li>
            </ul>
        </div>
    )
}