import React from "react";
import Image from "next/image";
import { Card } from 'antd';
import {blogJson} from '../../constans'
const { Meta } = Card;

export const Activities: React.FC = () => {

    return (
    <div className='activities-full-part'>
        <h3> Etkinlikler </h3>
        <div className='activities-normal-part'>
            {blogJson.map((e) => {
                if(e.type === 'activities') {
                    return(
                        <a href={e.url} rel="noopener noreferrer">
                            <Card
                            key={e.id}
                            hoverable
                            cover={<img alt={e.title} src={e.image} />}
                            >
                            <Meta title={e.title} description={e.description[0].length > 180 ?
                            e.description[0].slice(0, 180) + '...' : e.description[0]} />
                        </Card>
                        </a>
                    )
                }
                return;
                
            })}
        </div>
    </div>
  );
};
