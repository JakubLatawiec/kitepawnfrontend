"use client"

import { deleteContract } from "@/app/_api/ContractsAPI";
import { useRouter } from "next/navigation";
import ContractsDashboardIcon from "@/app/_icons/ContractsDashboardIcon";

const ContractsActions = () => {
    const router = useRouter();

    const openContracts = () => {
        if (localStorage.getItem("SelectedContracts").length == 0) {
            return;
        }
        else {
            let contractsData = localStorage.getItem("SelectedContracts").split(",");
            router.push(`/dashboard/contracts/show?id=${contractsData[0]}&counter=1`);
        }
    }

    const deleteContracts = () => {
        if (localStorage.getItem("SelectedContracts").length == 0) {
            return;
        }
        else {
            var reload = true;
            let contractsData = localStorage.getItem("SelectedContracts").split(",");
            contractsData.forEach(async id => {
                const result = await deleteContract(id);
                if (result.status !== 'success') {
                    reload = false;
                    console.log("error!");
                }
            })
            if (reload) {
                window.location.reload();
            }
        }
    }

    return(
        <div>
            <p className="text-2xl mb-2">Contracts</p>
            <div onClick={() => router.push("/dashboard/contracts/add")} className="flex flex-row justify-start items-center w-full p-2 ease-in-out duration-300 cursor-pointer hover:text-[color:var(--THEME-COLOR)]">
                <ContractsDashboardIcon className="text-3xl"/>
                <div className="flex flex-col justify-center ml-2">
                    <p className="text-base">Add new</p>
                    <p className="text-xs font-light text-[color:var(--FT-SECONDARY)] mt-[-2px]">Creates new contract</p>
                </div>
            </div>
            <div onClick={openContracts} className="flex flex-row justify-start items-center w-full p-2 ease-in-out duration-300 cursor-pointer hover:text-[color:var(--THEME-COLOR)]">
                <ContractsDashboardIcon className="text-3xl"/>
                <div className="flex flex-col justify-center ml-2">
                    <p className="text-base">Show</p>
                    <p className="text-xs font-light text-[color:var(--FT-SECONDARY)] mt-[-2px]">View selected contracts</p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full p-2 ease-in-out duration-300 cursor-pointer hover:text-[color:var(--THEME-COLOR)]">
                <ContractsDashboardIcon className="text-3xl"/>
                <div className="flex flex-col justify-center ml-2">
                    <p className="text-base">Bookmark</p>
                    <p className="text-xs font-light text-[color:var(--FT-SECONDARY)] mt-[-2px]">Highlights selected contracts</p>
                </div>
            </div>
            <div onClick={deleteContracts} className="flex flex-row justify-start items-center w-full p-2 ease-in-out duration-300 cursor-pointer hover:text-[color:var(--THEME-COLOR)]">
                <ContractsDashboardIcon className="text-3xl"/>
                <div className="flex flex-col justify-center ml-2">
                    <p className="text-base">Delete</p>
                    <p className="text-xs font-light text-[color:var(--FT-SECONDARY)] mt-[-2px]">Deletes selected contracts</p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full p-2 ease-in-out duration-300 cursor-pointer hover:text-[color:var(--THEME-COLOR)]">
                <ContractsDashboardIcon className="text-3xl"/>
                <div className="flex flex-col justify-center ml-2">
                    <p className="text-base">Print</p>
                    <p className="text-xs font-light text-[color:var(--FT-SECONDARY)] mt-[-2px]">Export selected to PDF</p>
                </div>
            </div>
        </div>
    )
}

export default ContractsActions;