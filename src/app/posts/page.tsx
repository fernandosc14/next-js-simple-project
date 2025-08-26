import { Button } from "@/components/button";

interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export default async function PostsPage() {
    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseProps = await response.json()

    console.log(data);

    return(
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts Page</h1>

            <Button />

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post =>(
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}