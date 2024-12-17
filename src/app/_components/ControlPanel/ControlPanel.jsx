import ContractsActions from "./ContractsActions";
import ActivitiesList from "./ActivitiesList";

const ControlPanel = props => {
    return (
        <div className="flex flex-col justify-start min-w-80 border-solid border-l border-[color:var(--BORDER-COLOR)] p-8">
            <ContractsActions />
            <hr className="my-6"/>
            <ActivitiesList />
        </div>
    )
}

export default ControlPanel;