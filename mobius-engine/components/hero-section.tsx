import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <div className="absolute inset-0 w-full h-screen overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gradient-9W5nx0KKjmjApgAbreSHPEasfCXY7J.png"
          alt="Blue gradient background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <section className="relative pt-32 md:pt-40 h-screen w-full">
        <div className="container mx-auto px-6 md:px-16">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto"
            style={{ width: "1304px", height: "444.71px" }}
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Land job interviews
                <br />
                <span className="text-white">
                  <span className="text-blue-100">10x</span> faster
                </span>
              </h1>
              <p className="text-white text-lg mb-8 max-w-xl">
                Custom-built resumes that match your goals, keywords, and recruiter expectations.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 rounded-full px-6 py-3 font-medium flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WBCQk37BtD04JSLGEhYkg3r5AiG44g.png"
                  width={300}
                  height={400}
                  alt="2024/2025 Hiring Trends E-Book"
                  className="mx-auto"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
