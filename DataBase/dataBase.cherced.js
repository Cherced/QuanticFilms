const apiKey = "46f93e78273c9f1e02fe641b51f0328d";

export async function getTrendingMoviesPreview() {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
                });
        const request = new Request(res);
        console.log(request);
        const data = await res.json();
        const status = res.status;
        if (status !== 200) {
            throw Error(data.status_message + " " + data.status_code);
        } else {
            return data.results;
        }
    } catch (error) {
        console.log(error);
    }

}

