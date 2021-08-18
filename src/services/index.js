var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_API_KEY}`);

const params = {
    headers: myHeaders,
};
const URL = "https://newsapi.org/v2/";
const END_POINTS = {
    EVERYTHING: 'everything',
    TOP_HEADLINE: 'top-headlines'
}
const getNews = (subject) => {
    return fetch(`${URL}${END_POINTS.TOP_HEADLINE}?country=us&category=${subject}`,params)
        .then(response => response.json())
        .catch(err => {
            console.error('Ocorreu um erro',err);
        })
}

const searchNews = (searchStr) => {
    return fetch(`${URL}${END_POINTS.EVERYTHING}?language=en&q=${searchStr}&sortBy=popularity`,params)
        .then(response => response.json())
        .catch(err => {
            console.error('Ocorreu um erro',err);
        })
}

const exportValues = {
    getNews,
    searchNews,
}
export default exportValues