const DateInput = props => {
    return (
        <div className="w-min flex flex-row items-center border-solid border-[color:var(--BORDER-COLOR)] border rounded-xl p-2 text-xs">
            <p>{props.label}</p>
            <input onChange={e => props.handleStartChange(e.target.value)} className="w-full min-w-30 ml-2 p-2 outline-none text-[color:var(--FT-SECONDARY)] bg-[color:var(--BG-SECONDARY)] rounded-lg" type="date" />
            <p className="mx-2">-</p>
            <input onChange={e => props.handleEndChange(e.target.value)} className="w-full min-w-30 p-2 outline-none text-[color:var(--FT-SECONDARY)] bg-[color:var(--BG-SECONDARY)] rounded-lg" type="date" />
        </div>
    );
}

export default DateInput;