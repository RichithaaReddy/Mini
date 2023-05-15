import React from 'react'

const Testpatterns = () => {
    const products = [
        {
          id: 1,
          name: "Amcat",
          href: "/dashboard/student/testpatterns/amcat",
          imageSrc:
            "https://res.cloudinary.com/dj7nomqfd/image/upload/v1654756599/images_q9eytb.png",
        },
        {
          id: 2,
          name: "MyAnatomy",
          href: "/dashboard/student/testpatterns/myanatomy",
          imageSrc:
            "https://res.cloudinary.com/dj7nomqfd/image/upload/v1654756599/1519868173379_dqtpgq.jpg",
        },
        {
          id: 3,
          name: "TCS Digital",
          href: "/dashboard/student/testpatterns/tcsdigital",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/1996/3175/products/TCSDIGITALPS_345x@2x.png?v=1588581571",
        },
        {
          id: 4,
          name: "EPAM",
          href: "/dashboard/student/testpatterns/epam",
          imageSrc:
            "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/hs0whppqg2pi33o6q8op",
        },
        {
          id: 5,
          name: "Cognizant",
          href: "/dashboard/student/testpatterns/cognizant",
          imageSrc:
            "http://res.cloudinary.com/dj7nomqfd/image/upload/v1659944636/uploads/y78vzbxuemo4ptieqsjp.jpg",
        },
        {
          id: 6,
          name: "Accenture",
          href: "/dashboard/student/testpatterns/accenture",
          imageSrc:
            "http://res.cloudinary.com/dj7nomqfd/image/upload/v1659944715/uploads/eibogpbhwfy7e0vrv4bp.jpg",
        },
        {
          id: 7,
          name: "Infosys",
          href: "/dashboard/student/testpatterns/infosys",
          imageSrc:
            "http://res.cloudinary.com/dj7nomqfd/image/upload/v1659944749/uploads/lormxbeeixkohptsukz6.png",
        },
        {
          id: 8,
          name: "Capgemini",
          href: "/dashboard/student/testpatterns/capgemini",
          imageSrc:
            "http://res.cloudinary.com/dj7nomqfd/image/upload/v1659944785/uploads/qyvxdwbsnbok7rlsyilp.jpg",
        },
        {
          id: 9,
          name: "Legato",
          href: "/dashboard/student/testpatterns/legato",
          imageSrc:
            "http://res.cloudinary.com/dj7nomqfd/image/upload/v1659944836/uploads/swwgqc921exzejirdc5v.jpg",
        },
        // More products...
      ];
  return (
    <div>
         <div class=" mt-10 w-full">
          <br />
          <br />
          <br />
          <h1 className="text-3xl text-center font-semibold">
            Test Patterns
          </h1>{" "}
          <br />
          <br />
          <div className="flex justify-center">
            <div className=" grid min-[300px]:grid-cols-2 grid-cols-1 gap-1 mx-2 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mb-9">
              {products.map((company) => {
                return (
                //   <Link
                //     href={`/dashboard/student/testpatterns/${company.name}`}
                //   >
                    <div className="mx-5 my-3 rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                      <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src={company.imageSrc} height={100} width={200} />
                      </div>
                      <div className="mt-4 flex justify-center">
                        <h3 className="text-lg font-semibold text-gray-700">
                          {company.name}
                        </h3>
                      </div>
                    </div>
               //   </Link>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testpatterns