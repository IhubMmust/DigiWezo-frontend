
const partners = [
    {
        name: "MMust- Ihub",
        logo: "/images/ihub.png",
        link: "https://ihub.mmust.ac.ke/"
    }
]
function Partners() {
  return (
    <div className="w-full">
         <hr className="md:mt-20 mb-10 bg-gray-500 border-0 h-[1px]" />
        <p className="text-2xl md:text-5xl font-bold  text-[#007BFF]">Our Partners</p>
        <div className="w-full flex flex-wrap gap-10 items-center justify-center mt-10">
            {partners.map((partner, index) => (
                <div key={`${index}-${partner.name}`} className="flex flex-col items-center justify-center">
                    
                    <a href={partner.link} target="_blank" rel="noreferrer" className="">
                    <img src={partner.logo} alt={partner.name} className="w-50 h-50 object-contain" />
                    </a>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Partners