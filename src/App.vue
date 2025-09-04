<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <div class="app">
    <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
    <RouterView />
  </div>
</template>

<style>
:root {
  /* Light theme colors */
  --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-accent: #3b82f6;
  --bg-card: #ffffff;
  --bg-card-hover: #f8fafc;
  --border-color: #e2e8f0;
  --shadow-light: rgba(0, 0, 0, 0.08);
  --shadow-medium: rgba(0, 0, 0, 0.12);
  --gradient-primary: linear-gradient(135deg, #3b82f6, #1d4ed8);
  --gradient-accent: linear-gradient(135deg, #6366f1, #4f46e5);
  --header-bg: rgba(255, 255, 255, 0.8);
}

[data-theme="dark"] {
  /* Dark theme colors */
  --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-accent: #60a5fa;
  --bg-card: #1e293b;
  --bg-card-hover: #334155;
  --border-color: #334155;
  --shadow-light: rgba(0, 0, 0, 0.3);
  --shadow-medium: rgba(0, 0, 0, 0.4);
  --gradient-primary: linear-gradient(135deg, #1e40af, #3b82f6);
  --gradient-accent: linear-gradient(135deg, #4338ca, #6366f1);
  --header-bg: rgba(30, 41, 59, 0.8);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--bg-gradient);
  min-height: 100vh;
  font-size: 14px;
  transition: all 0.3s ease;
}

.app {
  position: relative;
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px var(--shadow-light);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--bg-card-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--shadow-medium);
}
</style>
