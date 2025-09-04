<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}

const resumeUrl = 'https://yunkov.me/resume.pdf'
</script>

<template>
  <div class="container">
    <div class="cv-page">
      <div class="cv-header">
        <button class="back-button" @click="goBack">← Back to Profile</button>
        <a :href="resumeUrl" target="_blank" class="download-button">📄 Download PDF</a>
      </div>

      <div class="pdf-container">
        <iframe
          :src="resumeUrl"
          class="pdf-viewer"
          title="Denis Felbaba - Resume"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cv-page {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 20px var(--shadow-light);
  border: 1px solid var(--border-color);
}

.cv-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;
  flex-wrap: wrap;
}

.back-button, .download-button {
  background: var(--text-accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.back-button:hover, .download-button:hover {
  background: var(--gradient-primary);
  transform: translateY(-1px);
}

.pdf-container {
  width: 100%;
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--shadow-light);
}

.pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

@media (max-width: 768px) {
  .cv-header {
    flex-direction: column;
  }

  .pdf-container {
    height: 70vh;
  }
}
</style>
