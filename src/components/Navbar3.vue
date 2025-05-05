<template>
    <header
      class="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0a192f] to-[#1f2937] backdrop-blur-md z-50 text-white px-6 py-3 flex items-center justify-between"
    >
      <!-- Logo -->
      <router-link to="/">
        <img src="./img/logo.png" alt="logo" class="h-12" />
      </router-link>
  
      <!-- Menu burger pour mobile -->
      <button class="md:hidden focus:outline-none z-[100]" @click="toggleMenu">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
  
      <!-- Navigation desktop -->
      <nav
        class="hidden md:flex mx-auto bg-white/5 border border-white/10 rounded-full px-6 py-2 space-x-4 backdrop-blur-md shadow-md"
      >
        <router-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.path"
          class="px-4 py-2 rounded-full transition duration-300"
          :class="{
            'bg-[#1f2937] text-white font-medium': $route.path === item.path,
            'text-gray-200 hover:text-white hover:bg-[#243447]': $route.path !== item.path
          }"
        >
          {{ item.name }}
        </router-link>
      </nav>
  
      <!-- Menu mobile full screen -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 w-full h-screen bg-[#0a192fee] backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-[99]"
        >
          <router-link
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="text-2xl text-white font-semibold px-6 py-3 rounded-full hover:bg-[#243447] transition"
            @click="toggleMenu"
          >
            {{ item.name }}
          </router-link>
        </div>
      </transition>
    </header>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { onMounted } from 'vue'
  
  // DARK MODE
  const isDark = ref(false)

  const toggleDark = () => {
    isDark.value = !isDark.value
    const html = document.documentElement
    html.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  })

  const isOpen = ref(false)
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  
  // Empêche le scroll quand le menu mobile est ouvert
  watch(isOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  })
  
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Entreprise', path: '/entreprise' },
    { name: 'Projets', path: '/projets' },
    { name: 'Veille', path: '/veille' },
    { name: 'Bilan', path: '/bilan' },
  ]
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  