<template>
    <div>
        <QueryError>Drawer imported from /libs</QueryError>
    </div>
</template>

<script>
const QueryError = () => import("@test/libs/QueryError.vue");
console.warn(222, QueryError);
export default {
    components: {
        QueryError,
    },
};
</script>

