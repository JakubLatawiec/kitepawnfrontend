import TextInput from "@/app/_components/Inputs/TextInput";
import ListInput from "@/app/_components/Inputs/ListInput";
import DateInput from "@/app/_components/Inputs/DateInput";

const FilterBox = () => {
    return (
        <div className="flex flex-row items-center justify-center w-full gap-x-4">
            <TextInput label="Contract:" placeholder="L/11/22/23"/>
            <ListInput label="Client:" placeholder="Select client"/>
            <DateInput label="Date:"/>
            <ListInput label="Status:" placeholder="Select status"/>
        </div>
    )
}
export default FilterBox;