"user client"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const profile = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold mt-10">Welcome to {user.given_name} to your profile</h2>

           {
            user.picture && <div className="flex justify-center my-10">
            <img src={user?.picture} className="rounded-md w-[200px] h-[200px] border border-gray-200" alt=""  />
            </div>
           }

        </div>
    );
};

export default profile;