<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">A1Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <nuxt-link class="nav-link" exact-active-class="active" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown">Profile</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><nuxt-link class="dropdown-item" exact-active-class="active" to="/profile">My Profile</nuxt-link></li>
                        <li v-if="$auth.$state.loggedIn"><nuxt-link class="dropdown-item" exact-active-class="active" to="/updateuser">Update Profile</nuxt-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" exact-active-class="active" to="/login">Login</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" exact-active-class="active" to="/register">Register</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>
