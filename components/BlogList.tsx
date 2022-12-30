import Image from "next/image";
import urlFor from "../lib/urlFor";
import { Post } from "../typings";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
}

function BlogList({posts}: Props) {
    return (
        <div>
            
            <div>
                {/* posts */}
                {posts.map(post => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                    <div key={post._id} className="border-white border-4 rounded-lg mx-5 md:mx-96 mb-5 bg-green-400 hover:scale-105 hover:cursor-pointer">
                        <div className="relative w-full h-60">
                            <Image
                            className="object-cover object-left lg:object-center"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                            />
                        </div>
                        <p className="font-bold text-2xl pb-5 text-white">{post.title}</p>
                        <div className="flex flex-row justify-between">
                            <div>                           
                                <p className="text-xl text-white">{new Date(post._createdAt).toLocaleDateString('en-US', {
                                    day:'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    })}</p>                                
                                {/* <p>{post.description}</p> */}                            
                            </div>

                            <div className="flex flex-row gap-x-2">
                                {post.categories.map((category) => (
                                    <div key={category._id}>
                                        <p className="border-2 border-white bg-white rounded-md p-1 text-green-400 hover:cursor-pointer">{category.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    )
}

export default BlogList