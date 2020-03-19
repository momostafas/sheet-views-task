<template>
<v-form>
    <v-row>
        <v-text-field type="email" label="Email" name="email" id="email" />
    </v-row>
    <v-row>
        <v-text-field type="password" label="Password" name="password" id="password" />
    </v-row>
    <v-row>
        <v-text-field type="password" label="Confirm Password" name="onfirmPassword" id="confirmPassword" />
    </v-row>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="primary">sign up</v-btn>
    </v-card-actions>
</v-form>
</template>
