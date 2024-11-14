import {OpenAIHelper} from "./openai-helper.js";
import {generateArticleCode, generateArticlePreview} from "./article-funs.js";

const openAIHelper = new OpenAIHelper();

await generateArticleCode(openAIHelper, "article");
await generateArticlePreview("article");