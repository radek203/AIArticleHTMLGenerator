import {OpenAIHelper} from "./openai-helper.js";
import {generateArticleCode} from "./article-funs.js";

const openAIHelper = new OpenAIHelper();

await generateArticleCode(openAIHelper, "article");