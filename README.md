# bangla-magazine-clientside

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) +
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
-----



````md


<template>
  <div class="relative group">
    <button
      :class="{
        'border-b-2 border-amber-400 text-amber-200':
          isParentRouteActive(basePath),
        'text-white hover:text-amber-200': !isParentRouteActive(basePath),
      }"
      class="font-medium focus:outline-none"
    >
      {{ title }}
    </button>
    <div
      class="absolute left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
    >
      <router-link
        v-for="(item, index) in links"
        :key="item.path"
        :to="item.path"
        :class="[
          'block px-4 py-2',
          isActiveRoute(item.path)
            ? 'text-amber-200 font-bold'
            : 'text-white hover:bg-amber-500',
          index === links.length - 1 && !isActiveRoute(item.path) ? 'hover:rounded-b-md' : ''
        ]"
      >
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    basePath: String,
    links: Array,
  },
  methods: {
    isActiveRoute(route) {
      return this.$route.path === route;
    },
    isParentRouteActive(parentRoute) {
      return this.$route.path.startsWith(parentRoute);
    },
  },
};
</script>
