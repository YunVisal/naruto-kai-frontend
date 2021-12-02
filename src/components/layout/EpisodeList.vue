<template>
    <base-section title="Next Episode">
        <div class="list-container">
            <base-button
                v-for="index in 70"
                :key="index" 
                :title="index < 10 ? '0' + index : index" 
                :url="'/episode/'+index" 
            />
        </div>
    </base-section>
</template>

<style scoped>
.list-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #000;
}
</style>