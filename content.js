// kad se ucita stranica
(async () => {
    const results = await Promise.all(urls.map(processUrl));
    console.log(results);
})();

async function processUrl(url) {
    try {
        const text = await (await fetch(url)).text();
        return { url, text, status: detecting(text) };
    } catch (error) {
        return { url, error };
    }
}