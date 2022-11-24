import React from 'react'
import img_1 from '../assets/rev-1.png'
import img_2 from '../assets/rev-2.png'
import img_3 from '../assets/rev-3.png'
import img_4 from '../assets/rev-4.png'
import cover from '../assets/Untitled-1.jpg'


export const Review = () => {
    var review = [
        {
            name: "Professionalism",
            desc: "Sample text,Click to select the text Element",
            img: img_1
        },
        {
            name: "Individuality",
            desc: "Sample text,Click to select the text Element",
            img: img_2
        },
        {
            name: "Uniqueness",
            desc: "Sample text,Click to select the text Element",
            img: img_3
        },
        {
            name: "Quality",
            desc: "Sample text,Click to select the text Element",
            img: img_4
        },
    ]
    return (
        <div>
            <div className='container-fluid w-100 p-5 fit-content-style' style={{ "height": "100vh" ,"backgroundImage": `url(${cover})`}}>
                <div className='container w-75 h-100 cover-img p-5'>
                    <div className='row d-flex flex-wrap align-items-center justify-content-center h-100'>
                        {review.map((single) => {
                            return (
                                <div className='col-md-6 text-center'>
                                    <img src={single.img} />
                                    <p className='fs-5 m-3'>{single.name}</p>
                                    <p className='p m-3'>{single.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
