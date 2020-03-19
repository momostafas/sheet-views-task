<template>
    <v-form>
        <v-row>
            <v-text-field type="email" label="Email" name="email" id="email">
            </v-text-field>
        </v-row>
        <v-row>
            <v-text-field type="password" label="password" name="password" id="password">
            </v-text-field>
        </v-row>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary">sign up</v-btn>
        </v-card-actions>
    </v-form>
</template>