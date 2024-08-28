import React from 'react'

const Contact = () => {
  return (
    <section class="py-10 bg-green-600 sm:py-16 lg:py-24">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div class="flex flex-col justify-between lg:py-5">
                <div>
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">Plan your North Bengal trip with us!</h2>
                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Are you planning to explore North Bengal? Look no further! Travelbound will plan a holistic and immersive trip for you. Plan with Travelbound for a holistic trip that includes a cultural, natural and historic experience. </p>

                    <img class="relative z-10 max-w-xs mx-auto -mb-16 md:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg" alt="" />

                    <img class="hidden w-full translate-x-24 translate-y-8 md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg" alt="" />
                </div>
            </div>

            <div class="lg:pl-12">
                <div class="overflow-hidden bg-white rounded-md">
                    <div class="p-6 sm:p-10">
                        <h3 class="text-3xl font-semibold text-black">Get in touch with us!</h3>
                        <p class="mt-4 text-base text-gray-600">Have questions? Let us know your queries and our team will reach you soon.</p>

                        <form action="#" method="POST" class="mt-4">
                            <div class="space-y-6">
                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                    <div class="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your full name"
                                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                    <div class="mt-2.5 relative">
                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            placeholder="Enter your email"
                                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                    <div class="mt-2.5 relative">
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="Write your message"
                                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none hover:bg-white-600 hover:outline-green-600 focus:bg-green-600">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Contact