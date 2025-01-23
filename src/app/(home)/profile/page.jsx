"user client"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const profile = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold mt-10">Welcome to your profile</h2>

           

        </div>
    );
};

export default profile;