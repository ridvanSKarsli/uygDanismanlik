import React from "react";
import Link from 'next/link'
import { Card } from 'antd';
import {blogJson, slugify} from '../../constans'
const { Meta } = Card;

const Blog: React.FC = () => {

    return (
    <div className='blog-full-part'>
        <h3> Blog </h3>
        <div className='blog-normal-part'>
            {blogJson.map((e) => {
                if(e.type === 'blog') {
                    return(
                        <Link  key={e.id} href={'blog/'+slugify(e.title)}>
                            <Card        
                                hoverable
                                cover={<img alt={e.title} src={e.image} />}
                                >
                                <Meta title={e.title} description={e.description[0].length > 180 ?
                                e.description[0].slice(0, 180) + ' ...' : e.description[0]} />
                            </Card>
                        </Link>
                    )
                }
                return;
                
            })}
        </div>
    </div>
  );
};

export { Blog };
