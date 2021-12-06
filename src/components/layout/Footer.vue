<template>
    <footer>
        <div class="info">
            <div class="logo">
                <router-link to="/">
                    <h2>Unofficial Naruto Kai</h2>
                </router-link>
            </div>
            <p>Naruto Kai is a fan project dedicated to removing filler, padding and any other executive-minded nonsense that made the Naruto animated series the mess that it is.</p>
        </div>
        <div class="contact">
            <p><b>Credit: </b><a href="https://www.reddit.com/r/Naruto/comments/91wdjv/naruto_kai_ultimate_subbed_edition/" target="_blank">Naruto Kai Reddit Site</a></p>
            <p><b>GitHub Repo: </b><a href="https://github.com/YunVisal/naruto-kai-frontend" target="_blank">Naruto Kai GitHub</a></p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    color: white;
    background-color: #195098;
    margin-top: 2em;
    position: absolute;
    bottom: 0;
    left: 0;
}
footer .info{
    width: 50%;
}
.logo a{
    text-decoration: underline;
    color: white;
}
.logo h2:hover{
    color: #cccccc;
    cursor: pointer;
}
footer .contact{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
footer .contact a{
    color: white;
    font-weight: bolder;
    text-decoration: underline;
}
footer .contact a:hover{
    color: #cccccc;
    cursor: pointer;
}
@media screen and (max-width: 767px) {
    footer{
        flex-direction: column;
    }
    footer .info{
        width: 100%;
        text-align: center;
    }
    footer .info p{
        display: none;
    }
}
</style>