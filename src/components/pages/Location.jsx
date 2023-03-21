import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, HandRaisedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import PackageSelection from '../content/PackageSelection'


const locations = [
  {
    name: 'London',
  icon: CloudArrowUpIcon,
  },
  {
    name: 'South',
    icon: LockClosedIcon,
  },
  {
    name: 'Wales and North West',
    icon: ServerIcon,
  },
  {
    name: 'North and North East',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Midlands and Central',
    icon: LockClosedIcon,
  },
  {
    name: 'Scotland',
    icon: ServerIcon,
  },
  {
    name: 'Northern Ireland',
    icon: ServerIcon,
  },
  {
    name: 'All of Ireland',
    icon: ServerIcon,
  },

]

export default function Location() {
  const [location, setLocation] = useState("")
const [click, setClick] = useState("")

if (location === "London") {
    let cityCode = "602"
    let codeBook = "2589989"
console.log(cityCode)
console.log(codeBook)
    }

    if (location === "South") {
      let cityCode = "603"
      let codeBook = "2590884"
      
      console.log(cityCode)
      console.log(codeBook)
   
   }
    
    if (location === "Midlands and Central") {
        let cityCode = "604"
        let codeBook = "2589989"
        console.log(cityCode)
console.log(codeBook)
      }
   
        if (location === "Wales and North West") {
            let cityCode = "605"
            let codeBook = "2602512"
       console.log(codeBook)
    console.log(cityCode)
            }
    
            if (location === "Scotland") {
                let cityCode = "607"
                let codeBook = "2597039"
                console.log(cityCode)
                console.log(codeBook)

                }
                if (location === "North and North East") {
                    let cityCode = "606"
                    let codeBook = "2603966"
              console.log(cityCode)
              console.log(codeBook)


                    }
                    if (location === "All of Ireland") {
                        let cityCode = "608"
                        let codeBook = "1502554"
                  console.log(cityCode)
              console.log(codeBook)
                        }
                        if (location === "Northern Ireland") {
                            let cityCode = "609"
                            let codeBook = "2589607"
                            console.log(codeBook)
                            console.log(cityCode)
                                }
                              

if (click === "click") {
  return <> <PackageSelection location = {{location: location}}/>  </>
}

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Pick Your Location</h2>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {locations.map((locations) => (
                  <div key={locations.name} className="relative pl-9">
                    <h1>{locations.name}</h1>
                   <button
          type="button" onClick={function location(event) {
            event.preventDefault()
            event.stopPropagation()
            setLocation(locations.name)
            setClick("click")
          }}
          className="rounded-full bg-indigo-600 py-2 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Select
        </button>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
