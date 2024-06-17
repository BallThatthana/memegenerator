import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://img1.picmix.com/output/stamp/normal/0/6/1/5/1905160_81caa.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Built with React by <a href="https://bonthatthana.netlify.app" target="_blank">Bon Thatthana</a></h4>
        </header>
    )
}