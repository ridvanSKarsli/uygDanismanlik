import React from "react";
import Image from "next/image";
import { Card } from 'antd';
import { useRouter } from 'next/router'
import { blogJson, slugify } from "src/constans";
const { Meta } = Card;

const Blog: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const blogDetail = blogJson.find((e) => slugify(e.title) === id);

    return (
    <div className='blog--detail-full-part'>
        <h3> Blog {id}</h3>
        <div className='blog-detail-normal-part'>
          <h1>{blogDetail?.title}</h1>
          {blogDetail?.description.map((e) => {
            return(
              <p>{e}</p>
            )
          })}
        </div>
    </div>
  );
};

export default Blog;
