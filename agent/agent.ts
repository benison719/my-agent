// agent/agent.ts
import { defineAgent } from "eve";
import { createSarvam } from "sarvam-ai-sdk";
import { SarvamChatModelInfo } from "sarvam-ai-sdk/info";

const sarvam = createSarvam({
	"apiKey": "sk_t8uflnb3_PmwE2eythwq2TjbPQt6mgBKj"
})

export default defineAgent({
	model: sarvam("sarvam-105b", {
		reasoning_effort: "low",
	}),
	modelContextWindowTokens: SarvamChatModelInfo["sarvam-105b"].context_window,
	defaultTools: false,
});