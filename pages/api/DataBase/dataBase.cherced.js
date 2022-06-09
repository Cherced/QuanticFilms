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

export async function getActorsPreview() {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`, {
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

export async function getGenresPreview() {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`, {
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
            return data.genres;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getTopRated(){
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, {
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
export async function getNowPlaying() {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, {
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
