const apiUrl = "http://localhost:5079/api/"

const getContracts = async () => {
    try {
        const response = await fetch(`${apiUrl}Contract`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Contracts not found")
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

const getContractDetails = async (id) => {
    try {
        const response = await fetch(`${apiUrl}Contract/details?contractID=${id}`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Contracts not found")
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

const getCustomersList = async () => {
    try {
        const response = await fetch(`${apiUrl}Customer`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Contracts not found")
        }
        const data = await response.json();
        const newData = []
        console.log(data)
        data.forEach(e => {
            newData.push({val: e.id, name: `${e.firstName} ${e.lastName}`})
        });
        return {data: newData, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

const getCategories = async () => {
    try {
        const response = await fetch(`${apiUrl}Category`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Contracts not found")
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

const postContract = async (bodyData) => {
    try {
        const response = await fetch(`${apiUrl}Contract`, {method: "POST", body: JSON.stringify(bodyData), headers: {"Content-Type": "application/json"}})
        if (response.status !== 201) {
            return {status: 'error', error: "Coś poszło nie tak, spróbuj ponownie później."}
        }
        return {status: 'success'};
    }
    catch (err) {
        return {status: 'error', error: err.message};
    }
}

const deleteContract = async (id) => {
    try {
        const response = await fetch(`${apiUrl}Contract?contractID=${id}`, {method: "DELETE"})
        if (!response.ok) {
            throw new Error("Could not delete ticket")
        }
        return {status: 'success'};
    }
    catch (err) {
        return {status: 'error', error: err.message};
    }
}

const getActions = async () => {
    try {
        const response = await fetch(`${apiUrl}Action`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Contracts not found")
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

export {getContracts, getContractDetails, getCustomersList, getCategories, postContract, deleteContract, getActions}