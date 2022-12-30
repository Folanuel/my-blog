import {previewData} from 'next/headers';
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client';
import  PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`
export const revalidate = 60;

async function  page() {
    if(previewData()) {
        return <PreviewSuspense fallback={(
            <div role='status'>
                <p className='text-center text-lg animate-pulse text-green-800'>
                    Loading Preview Data...
                </p>
            </div>
        )}>
            <div>Preview Mode</div>
            {/* previewbloglist component */}
            <PreviewBlogList query={query}/>
            </PreviewSuspense>
    }

    const posts = await client.fetch(query)

    return (
        <div>
            <div className='mx-5 md:mx-96 px-10 mt-40 pb-9'>
                <h1 className='text-5xl font-bold text-white mb-7'>Folarin</h1>
                <h2 className='text-2xl'>Front End Developer</h2>
                <p className='text-lg'>Welcome to my digital garden where i share what new technology i am learning, my journey to becoming a better developer and growing a career in the tech industry.</p>

                <hr className="border-green-600 mb-10 mt-5" /> 

                
            </div>
            {/* bloglist component */}
                <BlogList posts={posts} />
        </div>
    )
}

export default page