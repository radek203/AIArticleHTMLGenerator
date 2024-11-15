import {OpenAIHelper} from "./openai-helper.js";
import {generateArticleCode, generateArticlePreview} from "./article-funs.js";

const openAIHelper = new OpenAIHelper();

await generateArticleCode(openAIHelper, "artykul");
await generateArticlePreview("szablon", "artykul", "podglad");