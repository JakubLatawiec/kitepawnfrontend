import Navigation from "@/app/_components/Menu/Menu";
import ControlPanel from "@/app/_components/ControlPanel/ControlPanel";
import NavBar from "@/app/_components/Navigation/NavBar";
import AddContractBox from "./AddContractBox";

const AddContractPage = () => {
    return (
        <div className="flex flex-row justify-start w-full">
            <Navigation />
            <main className="flex flex-col w-full h-screen justify-start bg-[color:var(--BG-DARK)]">
                <NavBar />
                <AddContractBox />
            </main>
            <ControlPanel />
        </div>
    )
}

export default AddContractPage;