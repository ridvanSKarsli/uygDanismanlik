import React from "react"
import { Result, Button } from 'antd';
import Link from 'next/link'

function Error({ statusCode }) {

    return (
      <div
          style={{height:'100vh',display:'flex',alignItems:'center',
            justifyContent:'center'}}>
          <Result
                status={statusCode}
                title={statusCode}
                subTitle="Aradığınız sayfa bulunamadı."
                extra={<Button type="primary"><Link href="/">Anasayfaya Dön</Link></Button>}
              />
      </div>
           
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error