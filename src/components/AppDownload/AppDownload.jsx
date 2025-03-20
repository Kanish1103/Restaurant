import React from 'react'
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div>
            <div className="app-download" id='app-download'>
                <h1>Download Our App</h1>
                <p>Download our app for the best food experience</p>
                <div className="app-download-links">
                    <div className="play-store">
                        <a href=""><img src="https://img.icons8.com/color/48/000000/google-play.png" alt="" /></a>
                        <div className="get-it-on">
                            <h6>GET IT ON</h6>
                            <h3>Google Play</h3>
                        </div>

                    </div>
                    <div className="app-store">
                        <a href=""><img src="https://img.icons8.com/?size=50&id=30840&format=png&color=FFFFFF" alt="" /></a>
                        <div className="get-it-on">
                            <h6>Download on the</h6>
                            <h3>App Store</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload
