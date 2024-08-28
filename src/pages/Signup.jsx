import React from 'react'

const Signup = () => {
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <form action='' method=''>
                        <h1 class="mb-8 text-4xl text-center font-bold text-green-400">Sign up</h1>
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />
    
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
    
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />
    
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded-xl bg-green-400 text-black hover:bg-green-400 focus:outline-none my-1"
                        >Create Account</button>
    
                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a class="underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a class="underline border-b border-grey-dark text-grey-dark" href="#">
                                 Privacy Policy
                            </a>
                        </div>
                        </form>
                       
                    </div>
    
                    <div class="text-grey-dark mt-6">
                        Already have an account? 
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>  )
}

export default Signup