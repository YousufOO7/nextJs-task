import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="bg-gray-100">
            <div className="navbar container mx-auto flex justify-center py-3">

                {/* Navigation Links */}
                <div>
                    <ul className="flex gap-3">
                        <li>
                            <Link href="/">
                                <button className="btn bg-green-200 border border-black px-4 py-2 rounded-md">Home</button>
                            </Link>
                        </li>

                        <li>
                            <Link href={user ? "/profile" : "/api/auth/login"}>
                                <button className="btn bg-green-200 border border-black px-4 py-2 rounded-md">Profile</button>
                            </Link>
                        </li>

                        <li>
                            <Link href={user ? "/api/auth/logout" : "/api/auth/login"}>
                                <button className="btn bg-green-200 border border-black px-4 py-2 rounded-md">
                                    {user ? "Log Out" : "Log In"}
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
