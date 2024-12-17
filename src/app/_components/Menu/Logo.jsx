import LogoIcon from "@/app/_icons/LogoIcon";

const Logo = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <LogoIcon className="text-2xl text-[color:var(--THEME-COLOR)]"/>
            <p className="font-light">KITE</p>
            <p className="font-bold">PAWN</p>
        </div>
    )
}

export default Logo;