<template>
<v-container>
    <v-card>
        <v-card-title>
            Sheet Views Data
        </v-card-title>
        <v-card-text>
            <dataTable />
        </v-card-text>
    </v-card>
</v-container>
</template>
<script>
import dataTable from '@/components/home/dataTable'
export default {
    components: {
        dataTable
    }
}
</script>