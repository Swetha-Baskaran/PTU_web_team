import React, {useState} from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {SlSocialInstagram, SlSocialLinkedin,SlSocialTwitter,SlSocialGithub} from "react-icons/sl";
import "./style.css";
import 'aos/dist/aos.css'

const Card = ({image}) => {
	const [open, setOpen] = useState(false);
	const handleShowProfile = () => {
		setOpen(!open);
	};

	return (
		<div className='full_card' data-aos="zoom-in" data-aos-offset='200' data-aos-duration='700'  data-aos-anchor-easing='ease-in-out'>
			<div className='card'>
				<div className='inner_card outer'>
					<div className='view_profile' onClick={handleShowProfile}>
						<div
							className='material-icons arrow'
							style={
								open === true
									? {transform: "rotate(-140deg)"}
									: {transform: "rotate(45deg)"}
							}
						>
							<AiOutlineArrowRight />
						</div>
					</div>
					<div className='profile_pic'>
						<img
							id='pic'
							src={image.img}
							alt={image.name}
						/>
					</div>
					<div className='short'>
						<div className='what_i_am'>
							<div className='name'>{image.name}</div>
							<div className='Who_i_am'>web developer | Freelancer</div>
						</div>
						<div className='social_media'>
							<span>
								<div className='icon'>
									<SlSocialLinkedin />
								</div>
							</span>
							<span>
								<div className='icon'>
									<SlSocialInstagram />
								</div>
							</span>
							<span>
								<div className='icon'>
									<SlSocialTwitter />
								</div>
							</span>
							<span>
								<div className='icon'>
									<SlSocialGithub />
								</div>
							</span>
						</div>
					</div>
				</div>
				<div className={`${"inner_card inner"} ${open ? "in" : ""}`}>
					<div className='parts description'>
						<h4>About me</h4>
						I'm Maya. A b.tech student specialised on Information
						Technology. I was fascinated on programming. That made me to
						learn web development. Now I am a frontend developer working
						as an intern and also intented to do freelansing works. My
						desire is to be a full strack developer within a short period
						of time.
					</div>
					<div className='parts skills'>
						<h4>Skills</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JS</li>
							<li>PYTHON</li>
							<li>MYSQL</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
