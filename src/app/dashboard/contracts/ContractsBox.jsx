"use client"

import { getContracts } from "@/app/_api/ContractsAPI";
import { useState, useEffect } from "react";
import FilterBox from "./FilterBox";

const ContractsBox = () => {
    const [showLoans, setShowLoans] = useState(true);
    const [selectedContracts, setSelectedContracts] = useState([])
    const [contracts, setContracts] = useState(null);
    const [sortedContracts, setSortedContracts] = useState(null)
    const [APIDataStatus, setAPIDataStatus] = useState('loading')

    const active = "bg-[color:var(--THEME-COLOR)] text-[color:var(--FT-BLACK)] font-bold";
    const nonActive = "bg-[color:var(--BG-SECONDARY)] text-[color:var(--FT-WHITE)]";

    useEffect(() => {
        localStorage.setItem("SelectedContracts", []);
        fetchData();
    }, [])

    const fetchData = async () => {
        setAPIDataStatus('loading');
        const result = await getContracts();
        if (result.status === 'success') {
            setContracts(result.data);
            var data = result.data;
            data = data.filter(contract => contract.id.startsWith('L'));
            setSortedContracts(data);
            setAPIDataStatus('success');
        }
        else { //HANDLE ERROR
            console.error(result.error);
            setAPIDataStatus('error');
        }
    }

    const filterLoans = () => {
        if (showLoans) {
            return;
        }

        var data = contracts;
        data = data.filter(contract => contract.id.startsWith('L'));
        setSortedContracts(data);

        setShowLoans(true);
    }

    const filterSells = () => {
        if (!showLoans) {
            return;
        }

        var data = contracts;
        data = data.filter(contract => contract.id.startsWith('S'));
        setSortedContracts(data);

        setShowLoans(false);
    }

    const handleCheckboxChange = e => {
        const {id, checked} = e.target;
        if (checked) {
            const newSelectedContracts = [...selectedContracts, id];
            localStorage.setItem("SelectedContracts", newSelectedContracts);
            setSelectedContracts(newSelectedContracts)
        }
        else {
            const newSelectedContracts = selectedContracts.filter(contractID => contractID !== id);
            localStorage.setItem("SelectedContracts", newSelectedContracts);
            setSelectedContracts(newSelectedContracts)
        }
    }

    return(
        <div className="flex flex-col items-center gap-8 px-8 py-6 w-full h-full">
            <FilterBox />
            <div className="flex flex-row items-center justify-center w-max text-sm">
                <p onClick={filterLoans} className={`py-2 px-4 rounded-l-xl cursor-pointer ${showLoans ? active : nonActive}`}>Loan contracts</p>
                <p onClick={filterSells} className={`py-2 px-4 rounded-r-xl cursor-pointer ${showLoans ? nonActive : active}`}>Sell contracts</p>
            </div>
            <div className="w-full max-h-[calc(100vh-308px)] border-solid border-[color:var(--BORDER-COLOR)] border overflow-y-auto">
            <table className=" w-full border-collapse text-sm">
                <thead>
                <tr>
                    <th></th>
                    <th className="text-left">Contract</th>
                    <th className="text-left">Client</th>
                    <th className="text-right">Contract Date</th>
                    <th className="text-left">Contract Deadline</th>
                    <th className="text-right">Loan Total</th>
                    <th className="text-left">Service Total</th>
                    <th className="text-right">Status</th>
                </tr>
                </thead>
                <tbody>
                    {
                        sortedContracts?.map(contract => (
                            <tr>
                                <td className="text-center"><input onChange={handleCheckboxChange} type="checkbox" id={contract.id}/></td>
                                <td className="text-left">{contract.id}</td>
                                <td className="text-left">{contract.client}</td>
                                <td className="text-right">{contract.dateStart}</td>
                                <td className="text-left">{contract.dateEnd}</td>
                                <td className="text-right">{contract.loanTotal.toFixed(2)}</td>
                                <td className="text-left">{Number(contract.servicePercentage * contract.loanTotal / 100).toFixed(2)}</td>
                                <td className="text-right">{contract.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ContractsBox;