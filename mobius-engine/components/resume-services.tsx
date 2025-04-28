import { CircleCheckBig } from "lucide-react"

interface ServiceCardProps {
  title: string
  subtitle: string
  price: number
  oneTime?: boolean
  features: string[]
}

const ServiceCard = ({ title, subtitle, price, oneTime = true, features }: ServiceCardProps) => {
  return (
    <div className="border border-[#0649E7] rounded-[1rem] bg-white p-6">
      <h3 className="text-xl font-bold text-blue-700 mb-1">{title}</h3>
      <p className="text-sm text-blue-600 mb-4">{subtitle}</p>

      <div className="mb-6">
        <span className="text-3xl font-bold text-blue-600">${price}</span>
        {oneTime && <span className="text-sm text-blue-600 ml-1">one time</span>}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CircleCheckBig className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
            <span className="text-sm text-blue-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`justify-center text-white bg-blue-600 py-[.5rem] w-fit rounded-[20rem] px-[1rem] ${title === "Resume Rebuild" ? "mt-[2.5rem]" : "mt-[6.4rem]"}`}
      >
        Get Started →
      </button>
    </div>
  )
}

export default function ResumeServices() {
  return (
    <section className="pt-20 w-screen bg-white">
      <div className="mx-auto">
        <div className="text-start mb-12 mx-[17rem]">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Resume Building & Coaching</h2>
          <p className="text-blue-600 mt-[-.4rem] text-[14px]">
            Let's talk about where you're headed — and how your resume can get you there.
          </p>
          <p className="text-blue-600 text-[14px]">Services sold as per-project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-16 mx-[23rem]">
          <ServiceCard
            title="Resume Rebuild"
            subtitle="Complete rewrite for serious professionals"
            price={1000}
            features={[
              "1-2 hour deep dive",
              "Research on storytelling, not just formatting",
              "2 drafts + full application tests on Rec-Pro",
              "Tailored to your target industry, company, or role",
              "Direct work with our co-founder for positioning",
              "Specialized coaching from C-Suite advisors",
              "Reserve follow-up portfolio available upon request",
            ]}
          />

          <ServiceCard
            title="Interview Prep"
            subtitle="Stay sharp and master your story"
            price={500}
            features={[
              "90-45 minute coaching with our co-founder",
              "Real-time practice & feedback",
              "Role-specific example cards",
              "Audio recording of feedback videos – unlimited replays",
              "In-ear technique",
            ]}
          />
        </div>

        <div className="bg-blue-600 rounded-[1rem] p-8 flex flex-col sm:flex-row items-center justify-between mx-[18rem] h-[10rem]">
          <div>
            <span className="uppercase text-white font-semibold text-xl block mb-1">STILL HAVE</span>
            <h3 className="text-xl text-white mb-0">DOUBTS?</h3>
          </div>

          <h3 className="text-4xl font-semibold text-white">Contact us</h3>

          <div className="flex items-center mt-4 sm:mt-0">
            <div className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
