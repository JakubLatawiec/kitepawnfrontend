"use client"

import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname().split("/").slice(1);

    return (
        <div className="flex flex-row justify-start items-center w-full text-base p-9 border-solid border-b border-[color:var(--BORDER-COLOR)]">
            {
                pathname.map((name, i) => (
                    i == pathname.length - 1 ? 
                    (
                        <p>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</p>
                    ) : 
                    (
                        <>
                        <p className="text-[color:var(--FT-SECONDARY)]">{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</p>
                        <p className="mx-2 ">/</p>
                        </>
                    )
                ))
            }
        </div>
    );
}

export default NavBar;