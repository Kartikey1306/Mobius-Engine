import { CircleCheckBig } from "lucide-react"

interface PlanFeature {
  text: string
}

interface PlanProps {
  title: string
  price: number
  period: string
  features: PlanFeature[]
  isPopular?: boolean
  highlight?: boolean
  description?: string
}

const PricingPlan = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  highlight = false,
  description,
}: PlanProps) => {
  return (
    <div
      className={`rounded-xl border-[1px] border-blue-600 overflow-x-hidden ${title == "Starter" ? "bg-[#F8FAFF] text-white" : "bg-white border-blue-100"}`}
    >
      {isPopular && (
        <div className="border-[1px] border-blue-600 text-center absolute right-[43%] top-[16%] rounded-[10rem] text-blue-600">
          <span className="text-blue-600 px-[1rem]">Popular</span>
        </div>
      )}

      <div className="p-6 grid grid-rows-[auto_2.3rem] justify-items-stretch h-full">
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-blue-600">${price}</span>
            <span className="text-sm ml-1 text-blue-600">/{period}</span>
          </div>

          <hr className="mx-[.5rem] mb-[2rem] bg-black h-[1px] w-full block" />

          {description && <p className="text-sm mb-4 text-blue-600">{description}</p>}

          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CircleCheckBig className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-blue-600">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="justify-center bg-blue-600 text-white rounded-[20rem] w-fit px-[1rem]">Get Started →</button>
      </div>
    </div>
  )
}

export default function PricingPlans() {
  const plans = [
    {
      title: "April Promo",
      price: 35,
      period: "week",
      description: "",
      features: [
        { text: "Curated jobs from 10+ listings, refreshed every 48 hours" },
        { text: "Up to 20 human-applied roles per week (no bots, no NLP — just real people)" },
        { text: "Need more? Add extra apps for just $15 each" },
        { text: "Your own dedicated application analyst" },
        { text: "Personalized with up to 10 filters & 5 job titles" },
      ],
      isPopular: false,
      highlight: false,
    },
    {
      title: "Starter",
      price: 50,
      period: "week",
      description: "All the perks of the Promo Plan, plus:",
      features: [
        { text: "Resume review & story-focused feedback" },
        { text: "Dedicated search specialist" },
        { text: "Up to 30 jobs/week" },
        { text: "Extra apps at $15 each" },
        { text: "Analyst support within 6 hours (9-5 PST hours)" },
      ],
      isPopular: true,
      highlight: false,
    },
    {
      title: "Plus",
      price: 100,
      period: "week",
      description: "Everything in Starter, with more muscle:",
      features: [
        { text: "Up to 75 apps/week" },
        { text: "Apply to 10 job titles" },
        { text: "Analyst + full application team on Pacific hours" },
      ],
      isPopular: false,
      highlight: false,
    },
  ]

  return (
    <section id="plans" className="py-20 w-screen relative">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Job Application Service Plans</h2>

        <div className="grid grid-cols-3 mx-[18rem] gap-[1.5rem] justify-center mb-10">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              highlight={plan.highlight}
              description={plan.description}
            />
          ))}
        </div>

        <div className="rounded-xl overflow-hidden bg-blue-600 p-8 mx-[18rem] flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Advance</h3>
            <p className="text-blue-100 mb-4">Top-tier support for serious job hunters:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <CircleCheckBig className="h-5 -5 mr-2 text-green-300" />
                <span className="text-sm text-blue-50">Everything in Plus</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="h-5 -5 mr-2 text-green-300" />
                <span className="text-sm text-blue-50">Custom Resumes & Cover Letters</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="h-5 -5 mr-2 text-green-300" />
                <span className="text-sm text-blue-50">30 fully customized applications/week</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="h-5 -5 mr-2 text-green-300" />
                <span className="text-sm text-blue-50">Help with complex job searches</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="h-5 -5 mr-2 text-green-300" />
                <span className="text-sm text-blue-50">Access to senior resume experts, Founder & Exec Coaches</span>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-[8rem]">
              $150<span className="text-xl">/week</span>
            </span>
            <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white transition px-4 py-2 rounded-[20rem] mx-[-2rem] px-[1rem]">
              Get Started →
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-[5rem]" />
    </section>
  )
}
