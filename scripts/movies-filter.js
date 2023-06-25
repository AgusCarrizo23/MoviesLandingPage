const users = [
    {
        id: 1,
        name: "Leonel Messi",
        username: "Messi",
        email: "leo10@afa.com",
        address: {
            street: "balcarce 450",
            city: "Rosario",
        },
        company: {
            name: "Inter Miami"
        }
    },
    {
        id: 2,
        name: "Agustina Carrizo",
        username: "aguchi",
        email: "agusC@gmail.com",
        address: {
            street: "Santa Fe 930",
            city: "San Miguel de Tucuman",
        },
        company: {
            name: "Apple"
        }
    },
    {
        id: 3,
        name: "Fernanda Carrizo",
        username: "Ferchi",
        email: "fercita@test.com",
        address: {
            street: "San Juan 315",
            city: "San Miguel de Tucuman",
        },
        company: {
            name: "Intel"
        }
    },
    {
        id: 4,
        name: "Antonio cheff",
        username: "Tony",
        email: "tony@mastercheff.com",
        address: {
            street: "catamarca 80",
            city: "San Miguel de Tucuman",
        },
        company: {
            name: "Master Cheff"
        }
    },
    
];
const movies = [
    {
        userId: 1,
        id: 1,
        title: "The Godfather",
        gender: "Thriller",
        watched: "2023-06-24 09:40:48",
        rate: 1,
        image: "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg"
    },
    {
        userId: 2,
        id: 2,
        title: "The Texas Chain Saw Massacre",
        gender: "Horror",
        watched: "2023-06-18 13:11:24",
        rate: 4,
        image: "https://m.media-amazon.com/images/I/91ei8JE0SDL.jpg"
    },
    {
        userId: 1,
        id: 3,
        title: "The Shining",
        gender: "Horror",
        watched: "2023-06-19 00:21:22",
        rate: 2,
        image: "https://cdn.posteritati.com/posters/000/000/061/864/the-shining-md-web.jpg"
    },
    {
        userId: 3,
        id: 4,
        title: "Toy Story",
        gender: "Animation | Children | Comedy | Fantasy",
        watched: "2023-06-20 23:21:12",
        rate: 5,
        image: "https://m.media-amazon.com/images/I/71aBLaC4TzL.jpg"
    },
    {
        userId: 4,
        id: 5,
        title: "Halloween: The Curse of Michael Myers",
        gender: "Horror | Thriller",
        watched: "2023-06-21 15:47:33",
        rate: 1,
        image: "https://m.media-amazon.com/images/I/91UHof7cKKL.jpg"
    },
    {
        userId: 3,
        id: 6,
        title: "Die Hard",
        gender: "Action | Crime | Thriller",
        watched: "2023-06-22 22:49:31",
        rate: 3,
        image: "https://cdn.shopify.com/s/files/1/1057/4964/products/Die-Hard-Vintage-Movie-Poster-Original-1-Sheet-27x41-7126.jpg"
    },
    {
        userId: 2,
        id: 7,
        title: "The Dark Knight Rises",
        gender: "Action | Adventure | Crime",
        watched: "2023-06-23 04:22:21",
        rate: 5,
        image: "https://m.media-amazon.com/images/I/81G+2LJQJeL.jpg"
    },
    {
        userId: 3,
        id: 8,
        title: "Fight Club",
        gender: "Action | Crime | Drama | Thriller",
        watched: "2023-06-01 07:04:17",
        rate: 4,
        image: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg"
    },
    {
        userId: 2,
        id: 9,
        title: "Avengers: Infinity War",
        gender: "Action | Adventure | Sci-Fi",
        watched: "2023-06-02 20:36:17",
        rate: 3,
        image: "https://i.ebayimg.com/images/g/kukAAOSw-YZa8mLH/s-l1600.jpg"
    },
    {
        userId: 1,
        id: 10,
        title: "The Hangover",
        gender: "Comedy",
        watched: "2023-06-03 01:17:10",
        rate: 2,
        image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-172442538.jpg"
    },
    {
        userId: 4,
        id: 11,
        title: "Your Name",
        gender: "Animation | Drama | Fantasy | Romance",
        watched: "2023-06-04 00:08:50",
        rate: 1,
        image: "https://i0.wp.com/www.septimacaja.com/wp-content/uploads/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
    },
    {
        userId: 2,
        id: 12,
        title: "How to Train Your Dragon",
        gender: "Adventure | Animation | Children | Fantasy",
        watched: "2023-06-05 23:06:04",
        rate: 3,
        image: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        userId: 3,
        id: 13,
        title: "Robin Hood",
        gender: "Adventure | Animation | Children | Comedy | Musical",
        watched: "2023-06-06 18:57:45",
        rate: 4,
        image: "https://pics.filmaffinity.com/Robin_Hood-466796044-large.jpg"
    },
    {
        userId: 4,
        id: 14,
        title: "Whiplash",
        gender: "Drama | Musical",
        watched: "2023-06-07 00:44:02",
        rate: 1,
        image: "https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg"
    },
    {
        userId: 3,
        id: 15,
        title: "Life Is Beautiful",
        gender: "Comedy | Drama | Romance | War",
        watched: "2023-06-24 20:00:04",
        rate: 5,
        image: "https://flxt.tmsimg.com/assets/p22005_p_v8_aa.jpg"
    }
];

const $userId = document.getElementById('userId');
const $rate = document.getElementById('rate');
const $fromDate = document.getElementById('fromDate');
const $toDate = document.getElementById('toDate');
const $btnFilter = document.getElementById('btnFilter');
const $moviesList = document.getElementById('moviesList');
let watchedDate = Date();

users.forEach(e => {
    $userId.innerHTML += `<option value=${e.id}>${e.username}</option>`;
});

const filterMovies = ({ users, movies, userId, fromDate, toDate, rate }) => {
    let filteredMovies = movies;
    if (userId) {
        filteredMovies = filteredMovies.filter(movie => movie.userId == parseInt(userId));
    }
    if (fromDate || toDate) {
        filteredMovies = filteredMovies
            .filter(movie => {
                watchedDate = new Date(movie.watched).toISOString().split('T')[0]
                return watchedDate >= fromDate && watchedDate <= toDate;
            })
    }
    if (rate) {
        filteredMovies = filteredMovies.filter(movie => movie.rate == rate);
    }

    const filterResults = filteredMovies.map(movie => {
        const user = users.find(user => user.id === movie.userId);
        return {
            ...movie,
            user
        };
    });
    return filterResults;

}

const apliFilters = () => {
    const fragment = document.createDocumentFragment();

    const fil = filterMovies({
        users: users,
        movies: movies,
        userId: $userId.value,
        fromDate: $fromDate.value,
        toDate: $toDate.value,
        rate: $rate.value

    })

    $moviesList.innerHTML = '';

    fil.forEach(movie => {
        const listItem = document.createElement('div');
        listItem.innerHTML =
            `<div class="card">
        <img src="${movie.image}" alt="Avatar" style="width:100%">
            <div class="container">
            <h4><b>${movie.title}</b></h4> 
            <p>
            Genero: ${movie.gender}<br> 
            Username: ${movie.user.username} <br>
            Calificacion: ${movie.rate} <br>
            Fecha: ${movie.watched}</p> 
        </div>
        </div>`;
        fragment.appendChild(listItem);
    });
    $moviesList.appendChild(fragment)

    return fil;
}


$btnFilter.addEventListener("click", apliFilters);

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};


