"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getCustomersList, getCategories, postContract } from "@/app/_api/ContractsAPI";
import ListInput from "@/app/_components/Inputs/ListInput";
import DateInput from "@/app/_components/Inputs/DateInput";
import ContractsDashboardIcon from "@/app/_icons/ContractsDashboardIcon";
import ProductAddBox from "./ProductAddBox";

const AddContractBox = () => {
    const router = useRouter();
    const [customersData, setCustomersData] = useState(null)
    const [categoriesData, setCategoriesData] = useState(null)
    const [typeData, setTypeData] = useState([{val: "L", name: "Loan"}, {val: "S", name: "Sell"}])
    const [APIDataStatus, setAPIDataStatus] = useState('loading')
    const [productsData, setProductsData] = useState(
        [
            {
                "Name": "",
                "CategoryID": "",
                "Count": 1,
                "PricePerItem": 0.00,
                "BranchID": 1
            }
        ]
    )
    const [contractData, setContractData] = useState({
        CustomerID: 0,
        DateStart: "",
        DateEnd: "",
        EmployeeID: "1",
        Type: "",
        Products: null
    })

    useEffect(() => {
        fetchCustomersData();
        fetchCategoryData();
    }, [])

    const fetchCustomersData = async () => {
        setAPIDataStatus('loading');
        const result = await getCustomersList();
        if (result.status === 'success') {
            setCustomersData(result.data);
            setAPIDataStatus('success');
        }
        else { //HANDLE ERROR
            console.error(result.error);
            setAPIDataStatus('error');
        }
    }

    const fetchCategoryData = async () => {
        setAPIDataStatus('loading');
        const result = await getCategories();
        if (result.status === 'success') {
            setCategoriesData(result.data);
            setAPIDataStatus('success');
        }
        else { //HANDLE ERROR
            console.error(result.error);
            setAPIDataStatus('error');
        }
    }

    const changeCustomerID = val => {
        const newContractData = contractData;
        newContractData.CustomerID = val;
        console.log(newContractData);
        setContractData(newContractData)
    }

    const changeDateStart = val => {
        const newContractData = contractData;
        newContractData.DateStart = val;
        console.log(newContractData);
        setContractData(newContractData)
    }

    const changeDateEnd = val => {
        const newContractData = contractData;
        newContractData.DateEnd = val;
        console.log(newContractData);
        setContractData(newContractData)
    }

    const changeType = val => {
        const newContractData = contractData;
        newContractData.Type = val;
        console.log(newContractData);
        setContractData(newContractData)
    }

    const changeProductData = (index, name, value) => {
        const updatedValues = productsData.map((product, idx) =>
            idx === index ? { ...product, [name]: value} : product
        );
        console.log(updatedValues);
        setProductsData(updatedValues);
    }

    const addProductData = () => {
        setProductsData([
            ...productsData,
            {
                "Name": "",
                "Category": "",
                "Count": "1",
                "PricePerItem": 0.00
            }
        ])
    }

    const removeProductData = index => {
        setProductsData(productsData.filter((_, i) => i !== index));
    }

    const Submit = async () => {
        const newContractData = contractData;
        newContractData.Products = productsData;

        newContractData.Products?.forEach(product => {
            product.PricePerItem = Number(product.PricePerItem)
        });

        console.log(newContractData);
        const result = await postContract(newContractData);
        if (result.status == "success") {
            router.push("/dashboard/contracts")
        }
    }

    return (
        <div className="flex flex-col p-8">
            <p className="mb-4 pb-2 w-full border-solid border-b border-[color:var(--BORDER-COLOR)]">Contract data:</p>
            <div className="flex flex-row w-full justify-center gap-4">
                <ListInput data={customersData} label="Client:" placeholder="Select client" handleChange={changeCustomerID}/>
                <DateInput handleStartChange={changeDateStart} handleEndChange={changeDateEnd} label="Date:" />
                <ListInput data={typeData} label="Type:" placeholder="Select type" handleChange={changeType}/>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 mt-8 pb-2 w-full border-solid border-b border-[color:var(--BORDER-COLOR)]">
                <p>Products:</p>
                <span onClick={addProductData}><ContractsDashboardIcon className="text-xl"/></span>
            </div>
            <div className="w-full max-h-[calc(100vh-420px)] border-solid border-[color:var(--BORDER-COLOR)] border-b overflow-y-auto">
            <table className="text-sm">
                <thead>
                    <tr className="border-solid border-b border-[color:var(--BORDER-COLOR)]" >
                        <th className="text-left w-[45%]"><span className="ml-2">Name</span></th>
                        <th className="text-left w-[25%]"><span className="ml-2">Category</span></th>
                        <th className="text-left w-[5%]"><span className="ml-2">Count</span></th>
                        <th className="text-right w-[10%]"><span className="ml-2">Price per Item</span></th>
                        <th className="text-left w-[10%]"><span>Total Price</span></th>
                        <th className="w-[5%]"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsData.map((product, index) => (
                            <ProductAddBox categories={categoriesData} value={product} key={index} index={index} removeInput={removeProductData} handleChange={changeProductData}/>
                        ))
                    }
                </tbody>
            </table>
            </div>
            <div className="flex flex-row justify-end mt-8">
                <button onClick={Submit} className="bg-[color:var(--THEME-COLOR)] px-4 py-2 rounded-lg text-[color:var(--FT-BLACK)] font-bold">Submit</button>
            </div>
        </div>
    )
}

export default AddContractBox;