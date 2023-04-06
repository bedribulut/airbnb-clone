'use client';

import Image from "next/image";

function Avatar() {
  return (
        <Image
            className="rounded-full"
            src="/images/placeholder.jpg"
            alt="avatar"
            width={30}
            height={30}
        />
  )
}

export default Avatar