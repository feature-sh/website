import { useEffect, useRef } from 'react'

// Slightly modified version of overreacted's useInterval hook
// See: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export const useInterval = (callback: Function, delay: number) => {
	const savedCallback = useRef<Function | null>(null)

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current!()
		}
		let id = setInterval(tick, delay)
		return () => clearInterval(id)
	}, [delay])
}

export default useInterval
