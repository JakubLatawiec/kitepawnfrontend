"use client";

import { useRouter } from "next/navigation";

const RedirectButton = props => {
    const router = useRouter();

    return(
        <div onClick={() => router.push(props.redirectPath)} className={`w-full flex flex-row items-center text-xl py-2 my-1 px-4 rounded-xl ease-in-out duration-300 cursor-pointer ${props.active ? "bg-[color:var(--THEME-COLOR)] text-[color:var(--FT-BLACK)] hover:text-[color:var(--FT-BLACK)]" : "bg-inherit text-[color:var(--FT-SECONDARY)]"} ${props.className ? props.className : "hover:text-[color:var(--THEME-COLOR)]"}`}>
            {props.icon}
            <p className="text-base ml-2 font-medium">{props.name}</p>
        </div>
    );
}

export default RedirectButton