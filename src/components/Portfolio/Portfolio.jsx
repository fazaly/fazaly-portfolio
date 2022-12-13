import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import PortfolioData from "./PortfolioData"

const Portfolio = () => {
    return (
        <>
        <section className='Portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center '>
                    <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                    <h1>My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {PortfolioData.map((value, index) => {
                    return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} liveLink={value.liveLink} codeClient={value.codeClient} codeServer={value.codeServer} />
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default Portfolio;