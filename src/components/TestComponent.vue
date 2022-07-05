<template>
    <div class="wrapper">
        <h1>This is the component with the title of: {{ title }} </h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Storybook test",
        }
    }
}
</script>

<style>
    .wrapper {
        border: 1px solid red; 
    }
</style>