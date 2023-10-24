import Link from 'next/link'

import styles from './index.module.scss'
const TheHeader = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>Home</Link>
			<Link href='/blog'>Blog</Link>
			<Link href='/about'>About</Link>
		</header>
	)
}

export { TheHeader }
