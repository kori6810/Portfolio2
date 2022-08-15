import React from "react";
import Login from "./form";
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
	
	return (
		<div className='refContact' id="Contact"  >
			<div className="contact__window">
				<div className="contact__header-container">
					<h1>
					  Contact
					</h1>
					<p>
						Feel free to drop  a line below!
					</p>
				</div>
			  <Login></Login>
			</div>

			
		</div>
	);
};


