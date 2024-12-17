"use client"

import { useState, useEffect } from "react";
import { getActions } from "@/app/_api/ContractsAPI";

const ActivitiesList = () => {
    const [actions, setActions] = useState(null);
    const [APIDataStatus, setAPIDataStatus] = useState('loading');

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setAPIDataStatus('loading');
        const result = await getActions();
        if (result.status === 'success') {
            setActions(result.data);
            setAPIDataStatus('success');
        }
        else { //HANDLE ERROR
            console.error(result.error);
            setAPIDataStatus('error');
        }
    }
    const activities = [
        {
            "Title": "Added contract L/11/22/3sss3",
            "Time": "Just now"
        },
        {
            "Title": "Added contract L/11/22/3sss3",
            "Time": "Just now"
        },
        {
            "Title": "Added contract L/11/22/3sss3",
            "Time": "Just now"
        },
        {
            "Title": "Added contract L/11/22/3sss3",
            "Time": "Just now"
        }
    ]

    return (
        <div>
            <p className="text-2xl mb-2">Activities</p>
            {
                actions?.map(activity => (
                <div className="flex flex-row justify-start items-center w-full p-2">
                    <div className="w-8 h-8 rounded-full bg-[color:var(--BG-SECONDARY)]"></div>
                    <div className="flex flex-col justify-center ml-2 max-w-[180px]">
                        <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap">{activity.name}</p>
                        <p className="text-xs font-light text-[color:var(--FT-SECONDARY)] mt-[-2px] ">{activity.date}</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default ActivitiesList;