<template>
    <div class="id">
        <div class="container">
            <div class="row justify-content-center mt-5 text-left">
                <div class="col-md-10">
                    <div class="card" id="box-search">
                        <div class="card-body">
                            <input type="text" placeholder="Movies title" @keyup.enter="getData()" v-model="search">
                            <button id="box-search-icon" @click="getData()">
                                <i class="fa fa-search" :style="{fontSize: `25px`,color: `white`}" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5"  v-if="movies.length != 0">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-4 mb-4" v-for="(item, index) in movies" v-bind:key="index" >
                            <div class="box-movie" @mouseenter="hoverItem = index" :style="{backgroundImage: `url(${item.Poster})`}">
                                <div v-if="hoverItem == index">
                                    <div :class="{'layers-box-movie':true}" @mouseout="hoverItem = null">
                                        <div>
                                            <router-link :to="{name: 'Detail', params: {id: item.imdbID, search: search}}">
                                                <button class="btn-layers-movie">Details</button>
                                            </router-link>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5" v-else>
                <div class="col-md-10">
                    <div :style="{width: `fit-content`, margin: `auto`}">
                        <i class="fa fa-search" :style="{fontSize: `45px`,color: ` #FCEF33`,float:`left`}" aria-hidden="true"></i>
                        <span class="text-find-search">Search movies now...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data : function() {
        return {
            movies : [],
            search : '',
            hoverItem : null
        }
    },
    methods : {
        getData : function() {
            if (this.search.length != 0) {
                axios
                .get(`http://www.omdbapi.com/?apikey=25846230&s="${this.search}"`)
                    .then(response => {
                        if(response.data.Search) {
                            this.movies = response.data.Search
                            this.movies.splice(9, 1)
                        } else {
                            this.$swal("Oppss!", `Movies tidak ditemukan!!` , "error");
                            this.movies = []
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                this.$swal("Oppss!", "Masukan title terlebih dahulu!", "error");
            }
        }
    }
}
</script>