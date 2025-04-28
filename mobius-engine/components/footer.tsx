import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-blue-600 min-w-screen pt-12 mt-[8rem]">
      <div>
        <div className="grid w-[90vw] justify-between mb-12">
          <div className="mb-8 md:mb-0 w-[8rem] ml-[6rem]">
            <div className="flex mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xtTLhadWNKhZe6SZSN31kVQk88DQ1I.png"
                width={151}
                height={86.20703125}
                alt="MobiusEngine Logo"
                style={{ marginLeft: "103px" }}
              />
            </div>
            <hr className="h-1 mb-[1rem]" />
          </div>

          <div className="grid grid-flow-col justify-stretch w-[86vw] justify-items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ml-[-2rem]">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 w-fit">Address</h4>
                <p className="text-blue-600 text-sm w-fit">
                  1875 Mission St Ste 103 #450
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 w-fit">Email</h4>
                <a href="mailto:hello@mobiusengine.ai" className="text-blue-600 text-sm hover:text-blue-600 transition">
                  finance@mobiusengine.ai
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 w-fit">Telephone</h4>
                <a href="tel:+1415-555-0123" className="text-blue-600 text-sm hover:text-blue-600 transition">
                  650-889-6026
                </a>
              </div>
            </div>

            <div className="w-fit">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 w-fit">Social</h4>
              <div className="flex space-x-4">
                <a href="#linkedin" className="bg-white p-2 rounded-full hover:bg-blue-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#twitter" className="bg-white p-2 rounded-full hover:bg-blue-400 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 px-[2rem] bg-blue-600 w-screen border-blue-500 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white mb-4 md:mb-0">© 2023 MobiusEngine, LLC.</p>
        <div className="flex space-x-6">
          <Link href="#terms" className="text-sm text-white hover:text-blue-600 transition">
            Terms & Conditions
          </Link>
          <Link href="#privacy" className="text-sm text-white hover:text-blue-600 transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
