<template>
   <v-data-table
      :headers="headers"
      :items="data"
    ></v-data-table>
</template>
<script>
import data from '@/imports/data.json'
export default {
    data() {
        return {
            headers:[
                {text: 'name', value: 'name'},
                {text: 'age', value: 'age'},
                {text: 'address', value: 'address'},
                {text: 'phone', value: 'phone'},
            ],
            data: data
        }
    },
}
</script>