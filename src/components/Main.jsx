import React from "react";
import videoBg from "../assets/video.mp4";
import "../styles/main.scss"

const Main = () => {
	return (
		<div className="main">
			<video src={videoBg} autoPlay loop muted/>
			 <div className="content">
					<h1>MEGAKEMPER</h1>
					<p>12.-21.08</p>
					<p>2021</p>
        </div>
		</div>
	)
}
export default Main