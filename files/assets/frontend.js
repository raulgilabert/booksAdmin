function test() {
    const CURRENT_URL = window.location.href;

    console.log(CURRENT_URL);

    let url = CURRENT_URL + "getData";


    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}