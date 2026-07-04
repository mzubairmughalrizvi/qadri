import React from 'react'

export default function Card({ title, subtitle, des }) {
    return (
        <>
            <div className="card" style={{ width: "30rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
                    <p className="card-text">{des}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </>
    )
}
