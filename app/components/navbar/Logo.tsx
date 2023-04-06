import Image from "next/image"

function Logo() {
  return (
    <div>
        <Image
            className="hidden md:block cursor-pointer"
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
        />
    </div>
  )
}

export default Logo