"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { format, parseISO } from "date-fns";

const PostCard = ({ post, index }) => {
    index *= 0.05;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="bg-white relative overflow-hidden"
        >
            <Link href={post.url} className="relative block overflow-hidden group">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1064}
                    height={644}
                    className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                />
            </Link>

            <div className="p-8">
                <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
                    {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
                </p>
                <h3 className="mb-4">
                    <Link href={post.url} className="text-2xl leading-none">
                        {post.title}
                    </Link>
                </h3>
                <p>
                    <Link className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-600" href={post.url}>
                        Leia mais
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default PostCard;