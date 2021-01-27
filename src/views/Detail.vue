<template>
    <div id="app">
        <div class="container mb-5">
            <div class="row justify-content-center mt-3">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box-detail-img" :style="{backgroundImage: `url(${movie.Poster})`}">
                                <div class="layers-detail-image"></div>
                            </div>
                        </div>
                        <div class="col-md-8 text-left">
                            <div class="box-right">
                                <h5 class="text-production">{{ movie.Production }}</h5>
                                <h1 class="text-title-movie-detail">{{ movie.Title }}</h1>
                                <p class="text-more">{{ movie.Year }} | {{ movie.Runtime }} | {{ movie.Rated }}</p>
                                <p class="text-plot mb-4">
                                    {{ movie.Plot }}
                                </p>
                                <div>
                                    <tr>
                                        <td>
                                            <h6 class="more-info-left">Actor</h6>
                                        </td>
                                        <td class="ml-5">
                                            <h6 class="ml-5 more-info-right">{{ movie.Actors }}</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="more-info-left">Directors</h6>
                                        </td>
                                        <td class="ml-5">
                                            <h6 class="ml-5 more-info-right">{{ movie.Director }}</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="more-info-left">Genres</h6>
                                        </td>
                                        <td class="ml-5">
                                            <h6 class="ml-5 more-info-right">{{ movie.Genre }}</h6>
                                        </td>
                                    </tr>
                                </div>
                                <div class="mt-4">
                                    <VueSlickCarousel v-bind="settings" v-if="movies.length">
                                        <div v-for="item in movies" :key="item.imdbID">
                                            <div class="box-movie-more"  :style="{backgroundImage: `url(${item.Poster})`}" @mouseenter="hover = item.imdbID">
                                                <div class="layers-detail-image text-white" @mouseout="hover = null" v-if="hover == item.imdbID">
                                                    <span @click="refresh()">
                                                        <router-link :to="{name: '', params:{id:item.imdbID, search:$route.params.search}}">
                                                            <h5 class="text-production" :style="{textAlign: `center`, lineHeight: `140px`}">
                                                                    Details
                                                                </h5>
                                                        </router-link>    
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </VueSlickCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import '../assets/css/detail.css'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components : {
        VueSlickCarousel
    },
    data : function() {
        return {
            hover : null,
            movie : {},
            movies : [],
            settings : {
                "dots": false,
                "arrows" : false,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "touchThreshold": 5
            }
        }
    },
    methods : {
        getData : function() {
            axios
                .get(`http://www.omdbapi.com/?apikey=25846230&i=${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data);
                    if (response.data.Response == "False") {
                        this.$swal("Oppss!", "Movie tidak ditemukan", "error");
                        window.location = "http://localhost:8080/"
                    } else {
                        this.movie = response.data
                    }
                })
                .catch(err => console.log(err))
        },
        getAllMovie() {
            axios
                .get(`http://www.omdbapi.com/?apikey=25846230&s="${this.$route.params.search}"`)
                    .then(response => {
                        this.movies = response.data.Search
                        this.movies.splice(9, 1)
                        console.log(this.movies)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        },
        refresh: function() {
            this.getData()
        }
    },
    created() {
        this.getData()
        this.getAllMovie()
    }
}
</script>