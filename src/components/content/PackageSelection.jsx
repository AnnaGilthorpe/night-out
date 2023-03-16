import { useState } from "react"
import PackageBronze from "./PackageBronze"
import PackageSilver from "./PackageSilver"
import PackageGold from "./PackageGold"


// switch (selection,location) {
//   case selection === "Bronze": return <PackageBronze location = {{location:location.name}}/> 
//     case selection === "Silver": return <PackageSilver location = {{location:location.name}}/> 
//     case selection === "Gold": return <PackageGold location = {{location:location.name}}/> 

//   default:
//     break;
// }

const selections = [
    {
      name: 'Bronze',
      selection: 'Book a Gig',
      selection2: 'Book a Restaurant',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
     
    },
    {
      name: 'Silver',
      selection: 'Book a Gig',
      selection2: 'Book Accommodation',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
     
    },
    {
      name: 'Gold',
      selection: 'Book a Gig',
      selection2: 'Book Accommodation',
      selection3: "Book a Restaurant",
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
     
    },
    // More people...
  ]
  
  export default function Example({location}) {
    const [selection, setSelections] = useState("")

    if (selection === "Bronze") { 
  return <PackageBronze location = {{location:location.location}}/> 
 
} if (selection === "Silver") {
  return <PackageSilver location = {{location:location.location}}/> 

}
if (selection === "Gold") {
  return <PackageGold location = {{location:location.location}}/> 

}
  

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {selections.map((selections) => (
              <li key={selections.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={selections.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{selections.name}</h3>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                  </li>
                  <li>
                  <h5>Location: {location.location}</h5>
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    <button
               type="button" onClick={function Selection (event) {
                event.preventDefault()
                setSelections(selections.name)
                console.log(selections.name)
               }}
               className="rounded-full bg-indigo-600 py-2 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
               Select
             </button>
                  </li>
              </ul>
              </li>
              
              
            ))}
          </ul>
        </div>
      </div>
    )
  }
  