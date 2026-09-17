const res = await fetch(`https://api.telegram.org/bot8326242450:ImyM4YRwkPmQmXFUGkaWCcyQVonY/setWebhook`, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		url: `https://denzle.vercel.app/eve/v1/telegram`,
        secret_token:"8326242450",
		allowed_updates: ["message", "callback_query"],
	}),
});