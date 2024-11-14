import {readFromFile, writeToFile} from "./file-helper.js";

export async function generateArticleCode(openAIHelper, file) {
    const fileContent = await readFromFile("txt-files/" + file + ".txt");
    const response = await openAIHelper.makeRequest("Edit given text to include html tags and make it properly structured <article> with <section> tags. Do not add additional headers but do not omit any text. Make sure to use <figure> tags with <img src='image_placeholder.jpg'> and <figcaption> where it will improve user experience, but avoid placing them in separate sections. <img> must also include alt attribute with detailed AI prompt in english to generate it based on content. Under the pictures add very short description in polish using proper tag. Remember to not include any css/js codes, and do not use any of <html>, <head>, <body> tags. " + fileContent);
    await writeToFile("html-files/" + file + ".html", response);
}

export async function generateArticlePreview(file) {
    const template = await readFromFile("html-files/szablon.html");
    const articleContent = await readFromFile("html-files/" + file + ".html");
    const fileContent = template.replace("<body></body>", "<body>" + articleContent + "</body>");
    await writeToFile("html-files/podglad.html", fileContent);
}