<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand" href="/">PILEM?</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-lg-0">
          <li class="nav-item active">
            <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <a href="" class="mr-3">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  </div>
</template>