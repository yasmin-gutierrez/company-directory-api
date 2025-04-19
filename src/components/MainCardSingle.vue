<script setup>
import { faker } from '@faker-js/faker'
    
    // const firstname = faker.person.firstName()
    // const lastname = faker.person.lastName() 
    // const jobtitle = faker.person.jobTitle() 
    // const bio = faker.lorem.lines(2)
    // const username = faker.internet.userName({firstName: firstname, lastName: lastname}).toLowerCase()

const props = defineProps({
    employee: {
        type: Object,
        require: true, 
        default: () => {
            return {
                _id: "67f95ab7c5d907ad4af0288f",
                userName: "jperex",
                firstName: "Joseph",
                lastName: "Perez",
                title: "Computer Science Wizard",
                quote: "You shall not pass!!",
                __v: 0
            }
        },
    },
})

</script>

<template>
    <RouterLink :to="{name: 'CardDetail', params: {id: props.employee._id}}">
        <div class="border border-gray-500 rounded-lg shadow bg-gray-400 h-full">
            <img class="object-fill h-480 w-960 rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category: 'cats', height:480, width: 960})" />
            <div class="p-4">
                <p class="mb-2 text-2xl font-bold">{{ props.employee.firstName }} {{ props.employee.lastName }}</p> 
                <p class="mb-3 font-normal text-gray-800">{{ props.employee.title }}</p>
                <p class="mb-3 font-normal text-gray-800">{{ props.employee.quote }}</p>
            </div>
        </div>
    </RouterLink>
</template>