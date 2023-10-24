import React, { FC } from 'react'
import Link from 'next/link'


type Props = {
	children: React.ReactNode
}


const AboutLayout: FC<Props> = ({ children }) => {
	return <div>
		<h3>About us</h3>
		<ul>
			<li><Link href='/about/contacts'>Contacts</Link></li>
			<li><Link href='/about/team'>Team</Link></li>
		</ul>
		<div>
			{children}
		</div>
	</div>
}

export default AboutLayout