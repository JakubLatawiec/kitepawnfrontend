import Navigation from "@/app/_components/Menu/Menu"
import NavBar from "@/app/_components/Navigation/NavBar";

const Clients = () => {
    return(
        <div className="flex flex-row justify-start w-full">
            <Navigation />
            <main className="flex flex-col w-full justify-start bg-[color:var(--BG-DARK)]">
                <NavBar />
            </main>
            <Navigation />
        </div>
    )
}

export default Clients;