import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Logo: React.FC = () => {

  return (
    <Link href='/'>
      <Image src="/images/logo3.png"  alt="nextjs" width="96" height="58" />
    </Link>
  );
};
