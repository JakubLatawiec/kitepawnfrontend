"use client"

import ProfileBox from "./ProfileBox";
import RedirectButton from "./RedirectButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

import ContractsDashboardIcon from "@/app/_icons/ContractsDashboardIcon";

import { usePathname } from "next/navigation";

const Navigation = props => {
    const pathname = usePathname();
    const NAVIGATION_LAYOUT = [
        {
            "SectionTitle": "DASHBOARDS",
            "Sections": [
                {
                    "Name": "Contracts",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/dashboard/contracts"
                },
                {
                    "Name": "Clients",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/dashboard/clients"
                },
                {
                    "Name": "Warehouse",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/dashboard/warehouse"
                },
                {
                    "Name": "Analitycs",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/dashboard/analitycs"
                },
                {
                    "Name": "Calendar",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/dashboard/calendar"
                }
            ]
        },
        {
            "SectionTitle": "SETTINGS",
            "Sections": [
                {
                    "Name": "Profile",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/settings/profile"
                },
                {
                    "Name": "Help",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/settings/help"
                },
                {
                    "Name": "About",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/settings/about"
                },
                {
                    "Name": "Logout",
                    "Icon": <ContractsDashboardIcon />,
                    "Redirect": "/settings/logout",
                    "ClassName": "text-[color:var(--FT-ERROR)]"
                }
            ]
        }
    ]

    return(
        <div className="flex flex-col justify-between w-60 min-w-60 h-screen px-8 py-8 bg-[color:var(--BG-DARK)] border-solid border-r border-[color:var(--BORDER-COLOR)]">
            <div>
            <ProfileBox />
            <SearchBar />
            {
            NAVIGATION_LAYOUT.map(layout => (
                <>
                <p className="mt-5 text-[color:var(--FT-SECONDARY)] font-light text-base">{layout.SectionTitle}</p>
                <div>
                {
                    layout.Sections?.map(section => (
                        <RedirectButton active={pathname.split("/")[2] == section.Redirect.split("/")[2] ? true : false} name={section.Name} icon={section.Icon} redirectPath={section.Redirect} className={section.ClassName}/>
                    ))
                }
                </div>
                </>
            ))
            }
            </div>
            <Logo />
            
        </div>
    );
}

export default Navigation;