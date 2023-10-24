'use client'
const ErrorPost = ({error}: {error: Error}) => {
	return <h1>Ошибка: {error.message}</h1>
}

export default ErrorPost