import axios from "axios";
import { ref } from "vue";

const instance = axios.create({
    baseURL: 'https://node-app-co47.onrender.com/', 
})

const employees = ref([])
const loading = ref(false)

export default function useAPI() {

    const getEmployees = async () => {
        if (employees.value.length === 0) {
            const response = await instance.get('api/employees/fetch')
            employees.value = response.data
        }

        loading.value = false 
    }

    return {instance, employees, getEmployees, loading} 
}