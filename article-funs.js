import {readFromFile, writeToFile} from "./file-helper.js";

export async function generateArticleCode(openAIHelper, file) {
    const fileContent = await readFromFile("txt-files/" + file + ".txt");
    const response = await openAIHelper.makeRequest("Generate article with html tags based on given text. Don't edit given text or add additional headers. Make sure to use <article> tag, <section> tag for each seperated content with headers, and <figure> with <img src='image_placeholder.jpg'> and <figcaption> where it will improve user experience, but avoid placing them in separate sections. <img> must also include alt attribute with detailed AI prompt in english to generate it based on content. Under the pictures add very short description in polish using proper tag. Remember to not include any css/js codes. Don't use any of <html>, <head>, <body> tags. " + fileContent);
    await writeToFile("html-files/" + file + ".html", response);
}

export async function generateArticlePreview(file) {
    const template = await readFromFile("html-files/szablon.html");
    const articleContent = await readFromFile("html-files/" + file + ".html");
    const fileContent = template.replace("<body></body>", "<body>\n" + articleContent + "\n</body>");
    await writeToFile("html-files/podglad.html", fileContent);
}