import React from 'react'
import { Hero } from './Hero'
import {  CarouselComp } from './Carousel'
import { ShowCards } from './ShowCards'

const HomePage = () => {
    const swiperOne = [
        {
            img : "https://s3-alpha-sig.figma.com/img/de86/24e6/39f85edb6078e19d7a6e7fdbb9054f70?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxBCQYh5FK7cJiT6ZepWyOZuvXnEQVtcHzbjpykykfn0f3W~tpLeXrVv5zdK2uPGmFDpwPuP24ql9KJimdPcLRm2gIyh9aOl0fhB3hjuILkyMfrYoRToI-yhgp9p2hS2MCAo-aFOgU98NyM8y9senISQ58qIW7~VgBDkSJx0l6ZJgcXmGExB-1ubaijhAjbAOIMGv-o2CkxSwmb1guwqj5HD2e7Q2agiA98m4xJvfraB0Ieu1axy9St-Nh5A8PTPMm2YhSPR7WkOGgVPFW3SyEJsygq9RmCt0horFnBg4R1XUvXVDTvWDUk0XH~rF2mgTH7zOmgG4oMyv~B6RKDiFQ__"
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/b284/93da/72ad49e23d6d55549e1b5970acfba4c0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iWOeKrR~UBb~a-qZsQJC8g~YWQYlGA3vIxRqhpHeZY0U6Io881CL~zlI-uFxuuXrJ16xYdR-L4r8LmD8w1E112CudMjUYo9VuWfw~fhmHo8rdYJ-jA6f~RzuZnR2pz7~1jB~dGiyKBMtmxtBMjWky3-NKQDsWFE1kHCcOF6oAVPsq6M01NDkpBmJfKK0D1H7P5qMwWk-vY0Vpniz9mRghF-O7eqpoCTG6kbIIuuJlXilp5V1dowGzn4o1Tnzjxcw-Pu6N-JSZBJutmPvuR0fq-~QU0c6Q~YeAYrzvqRhuo3pLZY99sgdPQCS-o1ziofFbdRULoNqW1g30lKek18IAw__",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/de86/24e6/39f85edb6078e19d7a6e7fdbb9054f70?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxBCQYh5FK7cJiT6ZepWyOZuvXnEQVtcHzbjpykykfn0f3W~tpLeXrVv5zdK2uPGmFDpwPuP24ql9KJimdPcLRm2gIyh9aOl0fhB3hjuILkyMfrYoRToI-yhgp9p2hS2MCAo-aFOgU98NyM8y9senISQ58qIW7~VgBDkSJx0l6ZJgcXmGExB-1ubaijhAjbAOIMGv-o2CkxSwmb1guwqj5HD2e7Q2agiA98m4xJvfraB0Ieu1axy9St-Nh5A8PTPMm2YhSPR7WkOGgVPFW3SyEJsygq9RmCt0horFnBg4R1XUvXVDTvWDUk0XH~rF2mgTH7zOmgG4oMyv~B6RKDiFQ__",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/de86/24e6/39f85edb6078e19d7a6e7fdbb9054f70?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxBCQYh5FK7cJiT6ZepWyOZuvXnEQVtcHzbjpykykfn0f3W~tpLeXrVv5zdK2uPGmFDpwPuP24ql9KJimdPcLRm2gIyh9aOl0fhB3hjuILkyMfrYoRToI-yhgp9p2hS2MCAo-aFOgU98NyM8y9senISQ58qIW7~VgBDkSJx0l6ZJgcXmGExB-1ubaijhAjbAOIMGv-o2CkxSwmb1guwqj5HD2e7Q2agiA98m4xJvfraB0Ieu1axy9St-Nh5A8PTPMm2YhSPR7WkOGgVPFW3SyEJsygq9RmCt0horFnBg4R1XUvXVDTvWDUk0XH~rF2mgTH7zOmgG4oMyv~B6RKDiFQ__"
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/b284/93da/72ad49e23d6d55549e1b5970acfba4c0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iWOeKrR~UBb~a-qZsQJC8g~YWQYlGA3vIxRqhpHeZY0U6Io881CL~zlI-uFxuuXrJ16xYdR-L4r8LmD8w1E112CudMjUYo9VuWfw~fhmHo8rdYJ-jA6f~RzuZnR2pz7~1jB~dGiyKBMtmxtBMjWky3-NKQDsWFE1kHCcOF6oAVPsq6M01NDkpBmJfKK0D1H7P5qMwWk-vY0Vpniz9mRghF-O7eqpoCTG6kbIIuuJlXilp5V1dowGzn4o1Tnzjxcw-Pu6N-JSZBJutmPvuR0fq-~QU0c6Q~YeAYrzvqRhuo3pLZY99sgdPQCS-o1ziofFbdRULoNqW1g30lKek18IAw__",
        },
        {
            img : "https://s3-alpha-sig.figma.com/img/de86/24e6/39f85edb6078e19d7a6e7fdbb9054f70?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TxBCQYh5FK7cJiT6ZepWyOZuvXnEQVtcHzbjpykykfn0f3W~tpLeXrVv5zdK2uPGmFDpwPuP24ql9KJimdPcLRm2gIyh9aOl0fhB3hjuILkyMfrYoRToI-yhgp9p2hS2MCAo-aFOgU98NyM8y9senISQ58qIW7~VgBDkSJx0l6ZJgcXmGExB-1ubaijhAjbAOIMGv-o2CkxSwmb1guwqj5HD2e7Q2agiA98m4xJvfraB0Ieu1axy9St-Nh5A8PTPMm2YhSPR7WkOGgVPFW3SyEJsygq9RmCt0horFnBg4R1XUvXVDTvWDUk0XH~rF2mgTH7zOmgG4oMyv~B6RKDiFQ__",
        }
    ]
    return (
        <div>
            <Hero/>
            <CarouselComp imgList = {swiperOne} />
            <br />
            <ShowCards/>
            <br />
        </div>
    )
}

export default HomePage
