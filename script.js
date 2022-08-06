const upcomingEl = document.querySelector('main');
const topRatedEl = document.querySelector('.top-rated');

const upcomingVideoEl = document.querySelector('.upcoming-video');
const topratedVideoEl = document.querySelector('.toprated-video');

const searchMovieEl = document.querySelector('.search-movies');
const searchTermEl = document.querySelector('.search-term');
const searchEl = document.querySelector('.search');

const popupContainerEl = document.querySelector('.pop-c');
// api key
const apiKey = '90d1e1f4b5759c0ccd7dd6a205899105';
// img url
const imgUrl = 'https://image.tmdb.org/t/p/w500/';
// video url
const videoUrl = `https://api.themoviedb.org/3/movie/560144/videos?api_key=90d1e1f4b5759c0ccd7dd6a205899105`;

// upcoming
async function fetchupcoming() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=90d1e1f4b5759c0ccd7dd6a205899105`
  );
  const data = await response.json();
  addUpcoming(data.results);
}

fetchupcoming();

// add upcoming
function addUpcoming(results) {
  upcomingEl.innerHTML = '';
  results.map((result) => {
    let poster_path;
    if (result.poster_path) {
      poster_path = result.poster_path;
    } else {
      return;
    }

    upcomingEl.innerHTML += `
    <div class="movie">
        <img
          src="${imgUrl + poster_path}"
          alt=""
          class="movie-img"
          data-movie-id="${result.id}"
        />
        <div class="movie-info">
          <h3 class="title">${result.title}</h3>
          <p class="rating">${result.vote_average}</p>
        </div>
      </div>
    `;

    const ratingEl = upcomingEl.querySelectorAll('.rating');
    ratingEl.forEach((rating) => {
      if (result.vote_average >= 8) {
        rating.style.color = 'green';
      } else {
        rating.style.color = 'red';
      }
    });
  });

  const upcomingImg = upcomingEl.querySelectorAll('.movie-img');
  upcomingImg.forEach((upcoming) => {
    upcoming.addEventListener('click', (e) => {
      upcomingVideoEl.classList.remove('hidden');
      window.scrollBy(0, 500);
      upcomingVideo(e.target.dataset.movieId);
    });
  });
}

async function upcomingVideo(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=90d1e1f4b5759c0ccd7dd6a205899105`
  );
  const data = await response.json();
  addUpcomingVideo(data.results[0]);
}

function addUpcomingVideo(videos) {
  upcomingVideoEl.innerHTML = '';
  upcomingVideoEl.innerHTML += `
    <div>
    <button class="close"><i class="fas fa-times"></i></button>
        <div class="videos">
        <iframe src="https://www.youtube.com/embed/${videos.key}" frameborder="0" allowfullscreen width="600px" height="300px"></iframe>
        </div>
        <div>
    `;

  const videosEl = upcomingVideoEl.querySelector('.videos');
  const closeEl = upcomingVideoEl.querySelectorAll('.close');
  closeEl.forEach((close) => {
    close.addEventListener('click', () => {
      upcomingVideoEl.classList.add('hidden');
    });
  });
}

// top rated
async function fetchtopRated() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=90d1e1f4b5759c0ccd7dd6a205899105`
  );
  const data = await response.json();
  addTopRated(data.results);
}

fetchtopRated();

// add top rated
function addTopRated(results) {
  results.map((result) => {
    let poster_path;
    if (result.poster_path) {
      poster_path = result.poster_path;
    } else {
      return;
    }
    topRatedEl.innerHTML += `
    <div class="movie">
        <img
          src="${imgUrl + poster_path}"
          alt=""
          class="movie-img"
          data-movie-id="${result.id}"
        />
        <div class="movie-info">
          <h3 class="title">${result.title}</h3>
          <p class="rating">${result.vote_average}</p>
        </div>
      </div>
    `;

    const ratingEl = topRatedEl.querySelectorAll('.rating');
    ratingEl.forEach((rating) => {
      if (result.vote_average >= 8) {
        rating.style.color = 'green';
      } else {
        rating.style.color = 'red';
      }
    });
  });

  const topratedImg = topRatedEl.querySelectorAll('.movie-img');
  // console.log(topratedImg)
  topratedImg.forEach((toprated) => {
    toprated.addEventListener('click', (e) => {
      topratedVideoEl.classList.remove('hidden');
      window.scrollBy(0, 500);
      topratedVideo(e.target.dataset.movieId);
    });
  });
}

async function topratedVideo(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=90d1e1f4b5759c0ccd7dd6a205899105`
  );
  const data = await response.json();
  addtopratedVideo(data.results[0]);
}

function addtopratedVideo(videos) {
  topratedVideoEl.innerHTML = '';
  topratedVideoEl.innerHTML += `
    <div>
    <button class="close"><i class="fas fa-times"></i></button>
        <div class="videos">
        <iframe src="https://www.youtube.com/embed/${videos.key}" width="600px" frameborder="0" allowfullscreen></iframe>
        </div>
        <div>
    `;

  const videosEl = topratedVideoEl.querySelector('.videos');
  const closeEl = topratedVideoEl.querySelectorAll('.close');
  closeEl.forEach((close) => {
    close.addEventListener('click', () => {
      topratedVideoEl.classList.add('hidden');
    });
  });
}

// search

const formEl = document.querySelector('form');
const inputEl = document.querySelector('.input-field');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  let inputValue = inputEl.value;

  window.scrollBy(0, 500);
  fetchSearchUrl(inputValue);
});

async function fetchSearchUrl(value) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=90d1e1f4b5759c0ccd7dd6a205899105&query=${value}&page=1`
    );
    const data = await response.json();
    searchTermEl.innerHTML = value;
    searchEl.classList.remove('hidden');
    addSearchMovie(data.results);
  } catch {
    alert('Not found');
  }
}

function addSearchMovie(results) {
  searchMovieEl.innerHTML = '';
  results.forEach((result) => {
    let poster_path;
    if (result.poster_path) {
      poster_path = result.poster_path;
    } else {
      return;
    }
    searchMovieEl.innerHTML += `
    <div class="search-movie">
        <img
          src="${imgUrl + result.poster_path}"
          alt=""
          class="search-img"
          data-movie-id="${result.id}"
        />
        <div class="search-info">
          <h3 class="search-title">${result.title}</h3>
          <p class="release-date">
            ${result.release_date} <span class="language">${
      result.original_language
    }</span>
          </p>
          <p class="search-rating"><i class="fas fa-star"></i> ${
            result.vote_average
          }</p>
    `;
  });
  inputEl.value = '';

  const searchImgEl = searchMovieEl.querySelectorAll('.search-img');
  searchImgEl.forEach((img) => {
    img.addEventListener('click', (e) => {
      popupContainerEl.classList.remove('hidden');
      fetchBannerVideo(e.target.dataset.movieId);
    });
  });
}

const bannerContainerEl = document.querySelector('.banner-c');

fetchtopRatedBanner();

async function fetchtopRatedBanner() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=90d1e1f4b5759c0ccd7dd6a205899105`
  );
  const data = await response.json();
  addBanner(data.results);
}

function addBanner(results) {
  bannerContainerEl.innerHTML = '';
  const random = Math.floor(Math.random() * results.length);
  bannerContainerEl.innerHTML = `
  <img
  src="${imgUrl + results[random].poster_path}"
  alt=""
  class="banner-img"
  data-movie-id="${results[random].id}"
/>
<div class="banner-info">
  <h3 class="banner-title">${results[random].title}</h3>
  <button class="play">Play</button>
  <button class="my-list">My list</button>
  <p class="over-view">${results[random].overview.slice(0, 300) + '...'}</p>
</div>
  `;

  const bannerImgEL = document.querySelector('.banner-img');
  bannerImgEL.addEventListener('click', (e) => {
    popupContainerEl.classList.remove('hidden');
    fetchBannerVideo(e.target.dataset.movieId);
  });

  const playBtn = document.querySelector('.play');
  playBtn.addEventListener('click', (e) => {
    popupContainerEl.classList.remove('hidden');
    const imgElId =
      playBtn.parentElement.previousElementSibling.getAttribute(
        'data-movie-id'
      );
    fetchBannerVideo(imgElId);
  });
}

async function fetchBannerVideo(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=90d1e1f4b5759c0ccd7dd6a205899105`
  );
  const data = await response.json();
  addBannerVideo(data.results[0]);
}

function addBannerVideo(video) {
  popupContainerEl.innerHTML = `
  <div class="popup">
  // <button class="mini-btn"><i class="fas fa-minus"></i></button>
  <button class="close-banner"><i class="fas fa-times"></i></button>
  <iframe src="https://www.youtube.com/embed/${video.key}" frameborder="0" class="banner-video" allowfullscreen width="600px" height="300px"></iframe>
</div>
  `;

  const bannerVideo = document.querySelector('.banner-video');

  const closeBannerBtn = popupContainerEl.querySelector('.close-banner');
  closeBannerBtn.addEventListener('click', () => {
    bannerVideo.pause = true;
    popupContainerEl.classList.add('hidden');
  });

  const miniContainerEl = document.querySelector('.mini-c');
  const miniBtn = popupContainerEl.querySelector('.mini-btn');
  miniBtn.addEventListener('click', () => {
    miniContainerEl.classList.remove('hidden');
    popupContainerEl.classList.add('hidden');
    miniContainerEl.innerHTML = `
    <div class="mini">
    <button class="mini-close"><i class="fas fa-times"></i></button>
    <iframe src="https://www.youtube.com/embed/${video.key}" frameborder="0" width="300px" height="150px"></iframe>
  </div>
    `;

    const miniCloseBtn = miniContainerEl.querySelector('.mini-close');
    miniCloseBtn.addEventListener('click', () => {
      miniContainerEl.classList.add('hidden');
    });
  });
}