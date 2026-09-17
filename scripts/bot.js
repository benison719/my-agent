const res = await fetch(`https://api.telegram.org/bot<token>/setWebhook`, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		url: `<domain_name>/eve/v1/telegram`,
		allowed_updates: ["message", "callback_query"],
	}),
});