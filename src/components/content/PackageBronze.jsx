import { useState } from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
] 

  
 
  
  export default function Example({location}) {
    const [artist, setArtist] = useState()

const handleClick = (event) => {

  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artist}&apikey=I71rSGwulwznNcHFcIbcGrwcHuC0T9S6`)
  .then(response => response.json()) //&dmaId=${cityCode}
  .then (function(response){
console.log(response._embedded.events[0].url)})

  
console.log(artist)
}


    return (
       
        
      
            <div className="overflow-hidden bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book Your Gig</p>

    <div>
     
      <div className="mt-2">
        <input onChange={function email(event) {
                        event.preventDefault()
                        event.stopPropagation()
                     setArtist(event.target.value)}}
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Artist Name"

        /> <button
        type="button" onClick={handleClick}
        className="rounded-full bg-indigo-600 py-1.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
      </div>

    </div>


                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                              <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                              {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <div className="sm:px-6 lg:px-0">
                    <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                                NotificationSetting.jsx
                              </div>
                              <div className="border-r border-gray-600/10 py-2 px-4">App.jsx</div>
                            </div>
                          </div>
                          <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }


//search for artist

//random artist 

// fetch gig information 

//date 

// new component resturant fetch 

