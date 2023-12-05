import OpenAI from "openai";
import { OPENAI_KEY } from "./constant.js";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
});

async function main() {
  const stream = await openai.chat.completions.create({
    messages: [{ role: "user", content: "do you know T1 kerib" }],
    model: "gpt-3.5-turbo",
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}
main();

// response
// {
//   completion: {
//     id: 'chatcmpl-8SHMxVCNJrTKOLfHKahACgQV4CYYm',
//     object: 'chat.completion',
//     created: 1701750643,
//     model: 'gpt-3.5-turbo-0613',
//     choices: [ [Object] ],
//     usage: { prompt_tokens: 17, completion_tokens: 11, total_tokens: 28 },
//     system_fingerprint: null
//   }
// }
