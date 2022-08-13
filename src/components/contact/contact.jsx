import React from "react";
import Login from "./form";
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
	const { ref, inView} = useInView();
	return (
		<div className='refContact' id="Contact"  ref={ref}>
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


