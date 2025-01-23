import Link from "next/link";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-3">Home Page</h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 lg:px-0 container mx-auto">
        {data.slice(0, 6).map((post) => (
            <div key={post.id} className="card border border-black card-compact bg-base-100">
              <div className="card-body">
                <Link href={`/post/${post.id}`} className="card-title">{post.title}</Link>
                <p>{post.body}</p>
              </div>
            </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
