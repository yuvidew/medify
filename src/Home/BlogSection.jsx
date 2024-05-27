import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React from 'react'

export const BlogSection = () => {

    return (
        <section className='py-10'>
            <div className=' container'>
                <h4 className=' text-center font-medium text-[#2AA7FF]'>Blog & News</h4>
                <h1 className=' text-center  text-[#1B3C74] font-medium text-[3rem]'>Read Our Latest News</h1>

                <div className=' grid lg:grid-cols-3 gap-5 mt-5'>
                    {[1 ,2 ,3].map(ele => (
                    <Card key={ele} className = "h-[25rem] border-none">
                        <CardHeader className = "p-1 h-[70%] overflow-hidden">
                            <img 
                                src="https://s3-alpha-sig.figma.com/img/fef4/882d/e0f1c8f91238e726af61b531dfa4b505?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6Ebk90yI0Nx-G3oSpuld2lThCOo0W3eEN4khqVrA4BLDFN4njqq~1LbOpPZBW4PQB4JV84nXZKY5qN7k68kyoZoCE0PdNU5TFMyRe9kOe3~5k3O1jBYpnyXnzxtkZxh~W2UsvZxRKLOfYrNjwQTaYKUiC55XxuFZ94tCixYyfl0pgOtMfprqq64xDadG~DJ76Cs88IlXQHr~W3MT5y~~CBRXbRsIEUOJKvzbFQho9ANMCxsOJBRhG27yEAl1gbQsGbK2mu~xDPgUN16vw4ZhV9jST9S-eIwq0Bn20b3YTxq4GaQdqxgtPkn77il8qwvFFdqOWnDxea6UXAGaVgVzA__" 
                                alt="" 
                                className="h-full object-cover rounded-md shadow-sm"
                            />
                        </CardHeader>
                        <CardContent className = "p-1 px-3">
                            <div className=" flex items-center gap-3 text-[#77829D]">
                                <h4>Medical</h4>
                                <h4>March 31, 2022</h4>
                            </div>
                            <p className="mt-2 font-medium text-[#1B3C74]">
                            6 Tips To Protect Your Mental Health When You’re Sick
                            </p>
                            <div className=" flex items-center gap-2 mt-3">
                                <img 
                                    src="https://s3-alpha-sig.figma.com/img/f2b1/95b8/8432b7bc2559a85010e594f78aacfc8c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDnqnN-907yCUk09E~XJCEzQvVJqwIJ8tu~bSX4USwZvxFcsEvYhvV1Mz8QjFlGods0b3dClR45~b85ZRVsSI-lCYG7kPw87m5gOWwg6yWrMsjdSJZPUItgAD~x9szsLmgjCkYpPL5PeRVenSnBEbEoFTEbOXhcxCP3z38vKp4UW2yl~6mSdBjPZV7eBEiBgpSRRlv0myojVKPjr7LdYAz8CdN7Xu~J3~MFPPJzDIplqcwa4nyxu3es9e7wmXRJzYEe5UkL0q~HhZjMC~d6vH7POGaa0nh7tYTj9cDSrKuyv5vXwcMxzlImd6zuwERhUr4jOvzHnxs2vuzBe1jxS~w__" 
                                    alt="" 
                                    className=" rounded-full w-10 h-10"
                                />
                                <p className="mt-2 font-medium text-[#1B3C74]">
                                    Rebecca Lee
                                </p>
                            </div>
                        </CardContent>
                    </Card>)
                    )}

                </div>
            </div>
        </section>
    )
}
