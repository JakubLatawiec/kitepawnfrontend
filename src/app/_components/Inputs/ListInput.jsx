const ListInput = props => {
    const handleInputChange = e => {
        console.log(e.target.value);
        props.handleChange(e.target.value)
    }

    return (
        <div className="w-min flex flex-row items-center border-solid border-[color:var(--BORDER-COLOR)] border rounded-xl p-2 text-xs">
            <p>{props.label}</p>
            <select onChange={handleInputChange} className="w-min ml-2 p-2 outline-none text-[color:var(--FT-SECONDARY)] bg-[color:var(--BG-SECONDARY)] rounded-lg">
                <option value="">{props.placeholder}</option>
                {
                    props.data?.map(e => (
                        <option value={e.val}>{e.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default ListInput;