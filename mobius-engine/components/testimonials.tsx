"use client"

import { useState } from "react"
import Image from "next/image"

interface TestimonialCardProps {
  content: string
  isActive?: boolean
}

const TestimonialCard = ({ content, isActive = false }: TestimonialCardProps) => {
  return (
    <div className="rounded-[19px] w-[19.3rem] bg-[#2563EB] h-[22rem] overflow-x-hidden">
      <div className="bg-white rounded-[18px] min-h-[12rem] w-[19rem] m-[2px] flex justify-center">
        <button className="text-blue-600 hover:text-blue-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8" fill="currentColor">
            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
          </svg>
        </button>
      </div>
      <div className="bg-blue-600 p-6 rounded-b-xl relative">
        <p className="text-white text-[12px] mb-8">
          Holly is a <b>senior executive</b> who got over <b>10 job interviews</b> and an offer she accepted.
        </p>
        <button className="absolute -bottom-6 right-4 text-white hover:text-blue-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 h-8 rotate-[-40deg]"
            fill="currentColor"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    { name: "Holly", title: "Senior Executive" },
    { name: "Michael", title: "Software Engineer" },
    { name: "Jennifer", title: "Product Manager" },
  ]

  return (
    <section id="testimonials" className="py-20 w-screen bg-white">
      <div className="mx-auto">
        <h2 className="text-2xl font-semibold text-start ml-[15.5rem] mb-12 text-blue-600">
          What our clients have to say
        </h2>

        <div className="grid place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mb-8 w-fit">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                content={testimonial.content}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-[5rem] mt-[4rem]">
          <button
            className="rounded-[20rem] border-[1px] border-black bg-white py-[.5rem] text-black px-[1rem]"
            href="#more-testimonials"
          >
            More customer testimonials <span className="rotate-[-40deg]">→</span>
          </button>
          <button className="rounded-[20rem] bg-blue-600 py-[.5rem] text-white px-[1rem]" href="#get-started">
            Get Started →
          </button>
        </div>

        <div
          className="mt-20 bg-[#F8FAFF] mx-auto rounded-[35px] p-8 border-[1.51px] border-[#002082]"
          style={{ width: "1412px", height: "538px" }}
        >
          <h2 className="text-3xl font-bold text-[#002082] mb-12">Why Choose Us?</h2>

          <div className="flex justify-between gap-10 h-[400px]">
            <div
              className="bg-white border-[1.51px] border-[#002082] rounded-[35px] p-8 hover:shadow-md transition-shadow"
              style={{ width: "359px", height: "350px" }}
            >
              <div className="text-[#002082] mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mGeB7G2T6V6eKVd6sefzC3PdDMLePm.png"
                  alt="Handshake heart icon"
                  width={65.00090026855469}
                  height={55.99930953979492}
                />
              </div>
              <h3 className="text-xl font-bold text-[#002082] mb-4">Tried, Tested, Trusted</h3>
              <p className="text-gray-700">
                Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
              </p>
            </div>

            <div
              className="bg-white border-[1.51px] border-[#002082] rounded-[35px] p-8 hover:shadow-md transition-shadow"
              style={{ width: "359px", height: "350px" }}
            >
              <div className="text-[#002082] mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zlKxy09yEapX7jHRWHBK6PkvIy2eaV.png"
                  alt="Person icon"
                  width={51}
                  height={56}
                />
              </div>
              <h3 className="text-xl font-bold text-[#002082] mb-4">Real People, Real Help</h3>
              <p className="text-gray-700">
                A hands-on team that actually cares — guiding you through every twist in your career path.
              </p>
            </div>

            <div
              className="bg-white border-[1.51px] border-[#002082] rounded-[35px] p-8 hover:shadow-md transition-shadow"
              style={{ width: "359px", height: "350px" }}
            >
              <div className="text-[#002082] mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7xtTy2ciVTZVUVsUgg2rbW8BJht47S.png"
                  alt="Star icon"
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="text-xl font-bold text-[#002082] mb-4">Beat the Line</h3>
              <p className="text-gray-700">
                We search, shortlist, and apply for you, so your name shows up first — every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
