"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getContractDetails } from "@/app/_api/ContractsAPI";
import Link from "next/link";
import Navigation from "@/app/_components/Menu/Menu";
import ControlPanel from "@/app/_components/ControlPanel/ControlPanel";
import NavBar from "@/app/_components/Navigation/NavBar";

const ShowContractPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const counter = searchParams.get("counter");
    const [contractsList, setContractsList] = useState([]);
    const [contractData, setContractData] = useState(null);
    const [APIDataStatus, setAPIDataStatus] = useState("loading");

    useEffect(() => {
        setContractsList(localStorage.getItem("SelectedContracts").split(","))
    }, [])

    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        setAPIDataStatus('loading');
        const result = await getContractDetails(id);
        if (result.status === 'success') {
            setContractData(result.data);
            setAPIDataStatus('success');
        }
        else { //HANDLE ERROR
            console.error(result.error);
            setAPIDataStatus('error');
        }
    }

    return (
        <div className="flex flex-row justify-start w-full">
            <Navigation />
            <main className="flex flex-col w-full h-screen justify-start bg-[color:var(--BG-DARK)]">
                <NavBar />
                <div onClick={() => console.log(contractsList.length)} className="w-full flex flex-row justify-between p-8">
                    <div className="flex flex-col justify-start w-[40%]">
                        <p className="w-full border-solid border-b border-[color:var(--BORDER-COLOR) pb-2 mb-4">User data:</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">First name:</span> {contractData?.customer.firstName}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Last name:</span> {contractData?.customer.lastName}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Address:</span> {contractData?.customer.address}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Phone number:</span> {contractData?.customer.phoneNumber}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Email:</span> {contractData?.customer.emailAddress}</p>
                    </div>
                    <div className="flex flex-col justify-start w-[40%] text-left">
                        <p className="w-full border-solid border-b border-[color:var(--BORDER-COLOR) pb-2 mb-4">Contract data:</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">ID:</span> {id}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Type:</span> {contractData?.type}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Date:</span> {contractData?.dateStart} - {contractData?.dateEnd}</p>
                        <p><span className="text-[color:var(--FT-SECONDARY)]">Status:</span> {contractData?.status}</p>
                    </div>
                </div>
                <div className="w-full px-8">
                    <p className="w-full border-solid border-b border-[color:var(--BORDER-COLOR) pb-2 mb-4">Products:</p>
                    <div className="w-full max-h-[calc(100vh-490px)] border-solid border-[color:var(--BORDER-COLOR)] border-b overflow-y-auto">
                        <table className="text-sm">
                            <thead>
                                <tr className="border-solid border-b border-[color:var(--BORDER-COLOR)]" >
                                    <th className="text-left w-[45%]">Name</th>
                                    <th className="text-left w-[25%]">Category</th>
                                    <th className="text-left w-[5%]">Count</th>
                                    <th className="text-right w-[12.5%]">Price per Item</th>
                                    <th className="text-left w-[12.5%]">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contractData?.products.map(product => (
                                        <tr>
                                            <td className="text-left">{product.name}</td>
                                            <td className="text-left">{product.category}</td>
                                            <td className="text-center">{product.count}</td>
                                            <td className="text-right">{Number(product.pricePerItem).toFixed(2)}zł</td>
                                            <td className="text-left">{Number(product.totalPrice).toFixed(2)}zł</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-8">
                        {
                            Number(counter) > 1 ? 
                            <Link href={`/dashboard/contracts/show?id=${contractsList[Number(counter) - 2]}&counter=${Number(counter) - 1}`}><button className="bg-[color:var(--BG-SECONDARY)] px-4 py-2 rounded-xl border-[color:var(--BORDER-COLOR)] border">Prev</button></Link> : 
                            <div></div>
                        }
                        {
                            Number(counter) >= contractsList.length ? 
                            <div></div> :
                            <Link href={`/dashboard/contracts/show?id=${contractsList[Number(counter)]}&counter=${Number(counter) + 1}`}><button className="bg-[color:var(--BG-SECONDARY)] px-4 py-2 rounded-xl border-[color:var(--THEME-COLOR)] border text-[color:var(--THEME-COLOR)]">Next</button></Link>
                        }
                    </div>
                </div>
            </main>
            <ControlPanel />
        </div>
    )
}

export default ShowContractPage;