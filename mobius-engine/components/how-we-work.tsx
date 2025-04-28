export default function HowWeWork() {
  const steps = [
    {
      number: 1,
      title: "Submit Intake Form",
      secondLine: "",
    },
    {
      number: 2,
      title: "We do the search and ",
      secondLine: "curation for list of jobs",
    },
    {
      number: 3,
      title: "You approve, we do the ",
      secondLine: "tedious part (applying)",
    },
    {
      number: 4,
      title: "You get the interviews",
      secondLine: "",
    },
  ]

  return (
    <section className="py-20 w-screen bg-white overflow-x-hidden">
      <div className="mx-auto">
        <h2 className="text-2xl mb-[6rem] font-semibold pl-[12rem] text-[#0649E7] text-start">How we work?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-[12rem] gap-[1rem]">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col w-fit items-start">
              <div className="relative mb-8 grid grid-flow-row">
                <div className="w-16 h-16 rounded-full border-2 border-black grid justify-items-center relative content-center text-2xl text-black before:content-[''] before:w-[10rem] before:absolute before:h-[2px] before:-bottom-3 before:left-0 before:bg-[#0649E7] text-[3rem] font-[10px] pl-[2px]">
                  {step.number}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[20px] text-start font-normal mb-2 text-[#0649E7]">
                  {step.title} <br /> {step.secondLine}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
