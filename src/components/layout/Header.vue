<template>
    <header>
        <router-link to="/"><h1>Unofficial Naruto Kai</h1></router-link>
        <button class="navbar-toggler" @click="toggleNav">
            <i class="fas fa-bars"></i>
        </button>
        <nav :class="{active: isNavToggle}">
            <ul>
                <li><router-link to="/naruto">Naruto</router-link></li>
                <li><router-link to="/shippuden">Naruto Shippuden</router-link></li>
                <li><router-link to="/arc">Arc</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            isNavToggle: false
        };
    },
    methods: {
        toggleNav(){
            this.isNavToggle = !this.isNavToggle;
        }
    }
};
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
    background-color: #195098;
    color: #fff;
}

header a h1,
nav ul li a{
    color: #fff;
    font-size: 1.5em;
}

.navbar-toggler{
    padding: .5em .75em;
    background-color: #195098;
    outline: none;
    border: 2px solid #fff;
    border-radius: .5em;
    color: #fff;
    display: none;
}

nav ul{
    display: flex;
    list-style-type: none;
    align-items: center;
}

nav ul li{
    margin: 1em;
    align-self: center;
}

nav ul li a{
    font-size: 1em;
}

header a h1:hover,
nav ul li a:hover{
    color: #ccc;
}

@media screen and (max-width: 767px) {
    header{
        flex-wrap: wrap;
    }

    .navbar-toggler{
        display: block;
    }

    nav{
        display: none;
    }

    nav.active{
        display: block;
    }

    nav.active ul{
        display: block;
        padding: 0;
    }

    nav.active ul li{
        margin: 1em 0;
    }
}
</style>