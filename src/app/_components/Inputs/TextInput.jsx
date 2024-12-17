const TextInput = props => {
    return (
        <div className="w-min flex flex-row items-center border-solid border-[color:var(--BORDER-COLOR)] border rounded-xl p-2 text-xs">
            <p>{props.label}</p>
            <input className="w-full min-w-20 ml-2 p-2 placeholder-[color:var(--FT-SECONDARY)] outline-none text-[color:var(--FT-WHITE)] bg-[color:var(--BG-SECONDARY)] rounded-lg" type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default TextInput;