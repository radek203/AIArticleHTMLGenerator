import {readFromFile, writeToFile} from "./file-helper.js";

export async function generateArticleCode(openAIHelper, file) {
    const fileContent = await readFromFile("txt-files/" + file + ".txt");
    const response = await openAIHelper.makeRequest("Edit given text to include html tags and make it properly structured article. Remember to use 'figure' with 'img' and 'figcaption' tags to each longer section of text. 'img' tags must include src='image_placeholder.jpg' attribute, and 'img' must include alt attribute with exemplary prompt to generate it based on content. Under the pictures add very short description using proper tag. Remember to not include any css/js codes, and do not use any of 'html', 'head', 'body' tags. " + fileContent);
    await writeToFile("html-files/" + file + ".html", response);
}