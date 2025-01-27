import React, { useEffect, useState } from "react";

interface TimerProps {
	time: string;
	timeoutAction?: () => void;
}

export const Timer: React.FC<TimerProps> = ({ time, timeoutAction }) => {
	const [timeLeft, setTimeLeft] = useState(+time);

	useEffect(() => {
		if (timeLeft <= 0) {
			if (timeoutAction) {
				timeoutAction();
			} else {
				return;
			}
		}

		const timer = setInterval(() => {
			setTimeLeft(prev => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, timeoutAction]);

	return <span>{timeLeft > 0 ? `${timeLeft}` : "0"}</span>;
};
