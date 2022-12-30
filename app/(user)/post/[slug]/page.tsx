import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { Post } from "../../../../typings";

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`
    *[_type=='post'] 
    {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug: slug,
    }));
}

async function Post({ params: {slug}}: Props) {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }    
    `

    const post: Post = await client.fetch(query, { slug });

    return (
        <article className="mx-5 md:mx-96 px-10 mt-40">
            <p className="font-bold text-2xl pb-5 text-white">{post.title}</p>
            <p className="font-semibold text-xl pb-4">{post.description}</p>
            <div className="relative w-full h-80">
                <Image 
                className="object-cover object-center mx-auto"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                />
            </div>
            <section>
                <PortableText value={post.body} components={RichTextComponents}/>
            </section>
        </article>
    )
}

export default Post