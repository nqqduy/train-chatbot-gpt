import fs from "fs";
import OpenAI from "openai";
import { OPENAI_KEY } from "./constant.js";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
});

async function uploadTrainingFile() {
  const result = await openai.files.create({
    file: fs.createReadStream("mydata.jsonl"),
    purpose: "fine-tune",
  });

  console.log(result);
}

uploadTrainingFile();
// file-wkJRNbFYo3A7pS2RR94whthf
