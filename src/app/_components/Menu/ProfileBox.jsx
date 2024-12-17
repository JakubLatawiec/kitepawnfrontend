import AvatarIcon from "@/app/_icons/AvatarIcon";

const ProfileBox = () => {
    return(
        <div className="w-full flex flex-row items-center">
            <AvatarIcon className="text-4xl"/>
            <p className="ml-2 text-base text-ellipsis overflow-hidden whitespace-nowrap">Jakub Latawiessssc</p>
        </div>
    )
}

export default ProfileBox;