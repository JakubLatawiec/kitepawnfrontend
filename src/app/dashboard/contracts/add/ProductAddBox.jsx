"use client"

import { useState, useEffect } from "react";

import ContractsDashboardIcon from "@/app/_icons/ContractsDashboardIcon";

const ProductAddBox = props => {


    const handleInputChange = e => {
        const {name, value} = e.target;
        props.handleChange(props.index, name, value);
    }

    const handleRemove = () => {
        props.removeInput(props.index);
    }

    return (
        <tr id={props.index} className="border-solid border-b border-[color:var(--BORDER-COLOR)]">
            <td>
                <input name="Name" value={props.value.Name} onChange={handleInputChange} className={`w-full p-2 placeholder-[color:var(--FT-SECONDARY)] outline-none text-[color:var(--FT-WHITE)] ${props.index % 2 == 0 ? "bg-[color:var(--BG-SECONDARY)]" : "bg-[color:var(--BG-DARK)]"} rounded-lg`} type="text" placeholder="Enter product name"/>
            </td>
            <td>
                <select name="CategoryID" value={props.value.Category} onChange={handleInputChange} className={`w-full p-2 outline-none text-[color:var(--FT-SECONDARY)] ${props.index % 2 == 0 ? "bg-[color:var(--BG-SECONDARY)]" : "bg-[color:var(--BG-DARK)]"} rounded-lg`}>
                    <option value="">Select category</option>
                    {
                        props.categories?.map(category => (
                            <option value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
            </td>
            <td>
                <input name="Count" value={props.value.Count} onChange={handleInputChange} className={`w-full p-2 outline-none text-[color:var(--FT-WHITE)] ${props.index % 2 == 0 ? "bg-[color:var(--BG-SECONDARY)]" : "bg-[color:var(--BG-DARK)]"} rounded-lg`} type="number" min="1" step="1"/>
            </td>
            <td>
                <input name="PricePerItem" value={props.value.PricePerItem} onChange={handleInputChange} className={`w-full p-2 outline-none text-[color:var(--FT-WHITE)] ${props.index % 2 == 0 ? "bg-[color:var(--BG-SECONDARY)]" : "bg-[color:var(--BG-DARK)]"} rounded-lg`} type="number" min="0"/>
            </td>
            <td>
                <p>{Number(props.value.PricePerItem * props.value.Count).toFixed(2)}zł</p>
            </td>
            <td>
                <span onClick={handleRemove}><ContractsDashboardIcon className="text-xl"/></span>
            </td>
        </tr>
    )
}

export default ProductAddBox;