import fs from "fs";
import OpenAI from "openai";
import { OPENAI_KEY } from "./constant.js";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
});

async function createFineTunedModel(training_file) {
  const fineTune = await openai.fineTuning.jobs.create({
    training_file,
    model: "gpt-3.5-turbo",
  });
  console.log(fineTune);
}

createFineTunedModel("file-wkJRNbFYo3A7pS2RR94whthf");
