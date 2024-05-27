import React from 'react'
import A from "@/assets/FAQImg.svg"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"




export const FAQ = () => {
    const FAQTest = [
        {
            test : "Why choose our medical for your family?",
        },
        {
            test : "Why we are different from others?",
        },
        {
            test : "Trusted & experience senior care & love",
        },
        {
            test : "How to get appointment for emergency cases?",
        },        
    ]
    return (
        <section>
            <div className=' container py-3'>
                <h5 className=' text-[#2AA7FF] text-center mt-2'>
                    Get Your Answer
                </h5>
                <h1 className='text-center text-[2.5rem] mt-1 font-medium text-[#1B3C74]'>
                    Frequently Asked Questions
                </h1>
                <div className=' grid lg:grid-cols-2 gap-3'>
                    <div className=' lg:w-[40%] h-[30rem]  text-left'>
                        <img className=' h-full object-contain' src={A} alt="" />
                    </div>
                    <div className=' lg:w-[60%] h-[30rem] flex items-center justify-center'>
                        <div className=' lg:w-[70%] m-auto'>
                        {FAQTest.map((ele , index) => (
                            <Accordion key={ele.test} type="single" collapsible>
                            <AccordionItem value={index + 1}>
                                <AccordionTrigger className = " text-[#1B3C74]">{ele.test}</AccordionTrigger>
                                <AccordionContent className = "text-[.9rem] text-[#77829D]">
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
