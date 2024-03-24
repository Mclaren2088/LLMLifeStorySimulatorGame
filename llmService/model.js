import { fileURLToPath } from 'url';
import path from 'path';
import {
  LlamaModel,
  LlamaContext,
  LlamaChatSession,
  ChatPromptWrapper
} from 'node-llama-cpp';


class CustomChatPromptWrapper extends ChatPromptWrapper {
    constructor() {
        super();
        this.wrapperName = "MyCustomChat";
    }

    wrapPrompt(prompt, { systemPrompt, promptIndex }) {
        if (promptIndex === 0) {
            return "SYSTEM: " + systemPrompt + "\nUSER: " + prompt + "\nASSISTANT:";
        } else {
            return "USER: " + prompt + "\nASSISTANT:";
        }
    }
    getWrapperName(){
        return this.wrapperName;
    }
    getStopStrings() {
        return ["USER:"];
    }

    getDefaultStopString() {
        return "USER:";
    }
}

const model = new LlamaModel({
    modelPath: 'llama2-13b-estopia.Q4_K_M.gguf'
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({
    context,
    promptWrapper: new CustomChatPromptWrapper()
});

// const q1 = "Hi there, how are you?";
// console.log("User: " + q1);

// session.prompt(q1)
//     .then(a1 => {
//         console.log("AI: " + a1);
//     });

// const q2 = "Summarize what you said";
// console.log("User: " + q2);

// session.prompt(q2)
//     .then(a2 => {
//         console.log("AI: " + a2);
//     });

export default model;