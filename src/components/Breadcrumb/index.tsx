import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumb: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const pathSnippets = pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const name = pathSnippets[index];
    return (
      <AntdBreadcrumb.Item key={url}>
        <Link href={url}>{name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim()}</Link>
      </AntdBreadcrumb.Item>
    );
  });

  const homeBreadcrumb = (
    <AntdBreadcrumb.Item key="home">
      <Link href="/">Ana Sayfa</Link>
    </AntdBreadcrumb.Item>
  );

  return (
    <div className="custom-breadcrumb">
      <AntdBreadcrumb>
        {homeBreadcrumb}
        {breadcrumbItems}
      </AntdBreadcrumb>
    </div>
  );
};

export { Breadcrumb };
