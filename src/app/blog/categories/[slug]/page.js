import React from 'react'
import { allPosts } from 'contentlayer/generated';
import Hero from '@/components/about/Hero';
import Posts from '@/components/blog/Posts';
import Subscribe from '@/components/Subscribe';

const page = ({ params }) => {

    const newTitle = params?.slug.replace("-", " ");
    let itemsTotal = 0, items = null;

    if (params?.slug) {
        items = allPosts.filter((post) => post.categories.some((category) => category.title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "") === params.slug));
        itemsTotal = items.length;
    }

    return (
        <>
            <Hero className="pt-52 pb-24 capitalize" title={`${newTitle} (${itemsTotal})`} subTitle="Category" />
            <Posts className="pt-0 pb-52" archive={true} itemsPerPage={6} params={params} />
            <Subscribe className="bg-blue-600 py-16 lg:py-32 pt-64" />
        </>
    )
}

export default page