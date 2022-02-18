import { useEffect, useRef } from 'react'

// Slightly modified version of overreacted's useInterval hook
// See: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export const useInterval = (callback: Function, delay: number) => {
	const savedCallback = useRef<Function | null>(null)
	const currentInterval = useRef<number | null>(null)

	const resetInterval = () => {
		if (currentInterval.current) {
			clearInterval(currentInterval.current)
		}
	}

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current!()
		}
		currentInterval.current = window.setInterval(tick, delay)

		return () => {
			resetInterval()
		}
	}, [delay, resetInterval])

	return resetInterval
}

export default useInterval
