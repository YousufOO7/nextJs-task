import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Link from "next/link";

const postDetails = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json();

    return (
        <>
            <Navbar></Navbar>
            <section className="min-h-screen">
                <div className="flex justify-center mt-10">
                    <div key={post.id} className="card w-[350px]  border border-black card-compact bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="card-actions">
                                <Link href="/">
                                <button className="btn w-full btn-primary">Go Back Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default postDetails;