import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    return (
        <div className="bg-gray-100">
            <div className="navbar container mx-auto flex justify-between items-center py-3 gap-10">
                <div>
                    <button className="btn btn-ghost text-xl">Task</button>
                </div>
                {/* dynamic route */}
                <div>
                    <ul className="gap-3 flex">
                        <Link href="/">
                            <button className="btn bg-green-200 border border-black">Home</button>
                        </Link>
                        {
                            user ? <Link href="/profile">
                                <button className="btn bg-green-200 border border-black">Profile</button>
                            </Link>
                                :
                                <Link href="/api/auth/login">
                                    <button className="btn bg-green-200 border border-black">Profile</button>
                                </Link>
                        }
                        {
                            user ?
                                <>
                                    <Link href="/api/auth/logout">
                                        <button className="btn bg-green-200 border border-black">Log Out</button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link href="/api/auth/login">
                                        <button className="btn bg-green-200 border border-black">Log In</button>
                                    </Link>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;