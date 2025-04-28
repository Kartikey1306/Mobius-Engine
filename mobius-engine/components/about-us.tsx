import Image from "next/image"
import { Linkedin } from "lucide-react"

interface TeamMemberProps {
  image: string
  description: string
  credentials: string
  smallPara: string
  name: string
}

function TeamMember({ image, description, credentials, smallPara, name }: TeamMemberProps) {
  return (
    <div className="grid grid-flow-col justify-center w-[100vw] gap-[4rem] mb-[6rem] overflow-x-hidden">
      <div className="relative mb-6 sm:mb-0 sm:mr-8">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white bg-white shadow-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            unoptimized={image?.startsWith("https://")}
            style={{ objectPosition: "center top" }}
          />
        </div>
        <a
          href="#linkedin"
          className="absolute bottom-0 left-[8rem] border-white border-[1px] rounded-full text-white bg-transparent backdrop-blur-[10px] p-5"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin size={20} className="text-black" />
        </a>
      </div>

      <div className="max-w-lg">
        <p className="text-white/80 mb-4 text-[13px]">
          <b>{name} </b>
          {description}
        </p>
        <p className="text-white/80 mb-4 text-[13px]">{smallPara}</p>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <section
      className="py-24 h-fit w-screen bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9432d5ee1c1b684649ed934fb5cf90467537503f%20%281%29-LKyZRcVQxLI73FS4N2wVegu9OV7SJZ.png')",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className="text-[24px] font-semibold text-start ml-[15rem] mb-16 text-white">About Us</h2>

        <TeamMember
          name="Ashwin"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abcdb8cfe59727b23f8e75f55fc50cd36fbe67ac-tlzEfAP01K1Xcmop2ucxXdkjWpnDKp.png"
          description="is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University."
          smallPara="Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams."
          credentials=""
        />

        <TeamMember
          name="Nicole"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7dcf99fa2301e245f611001fe0e067a86dbcc88c-IwTFaysdA4wUPMRziJIvQgD5tM9O6H.png"
          description="is an Executive coach at Mobius specializing in resume builds and career advisory. "
          smallPara="With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential."
          credentials=""
        />

        <div className="text-center mt-12">
          <a href="#board" className="text-blue-200 hover:text-white transition">
            Learn more about our Board of Advisors →
          </a>
          <p className="mt-4 text-blue-200">Follow us on our LinkedIn page →</p>
        </div>
      </div>
    </section>
  )
}
