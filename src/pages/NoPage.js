import React from 'react'

export default function NoPage() {
    return (
        <>
            <section classname="section-404 padding-top padding-bottom">
                <div classname="container">
                    <div classname="thumb-404">
                        <img src="assets/images/404.png" alt={404} />
                    </div>
                    <h3 classname="title">Oops.. looks like you got lost :( </h3>
                    <a href="/" classname="custom-button">Back To Home <i className="flaticon-right" /></a>
                </div>
            </section>
        </>
    )
}
