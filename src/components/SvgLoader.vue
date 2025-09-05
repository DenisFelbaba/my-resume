<template>
  <svg
    v-if="svgContent"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-html="svgContent"
  ></svg>
  <div v-else-if="loading" class="svg-loading">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="svg-fallback">
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        :width="Number(width) - 4"
        :height="Number(height) - 4"
        rx="2"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: 50
  },
  height: {
    type: [String, Number],
    default: 50
  }
})

const svgContent = ref('')
const loading = ref(false)
const error = ref(false)

const loadSvg = async (src: string) => {
  if (!src) return

  loading.value = true
  error.value = false
  svgContent.value = ''

  try {
    const response = await fetch(src, {
      // Add timeout for slow connections
      signal: AbortSignal.timeout(5000) // 5 second timeout
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()

    const parser = new DOMParser()
    const doc = parser.parseFromString(text, 'image/svg+xml')
    const svgElement = doc.querySelector('svg')

    if (svgElement) {
      svgContent.value = svgElement.innerHTML
    } else {
      throw new Error('Invalid SVG format')
    }
  } catch (err) {
    console.warn('SVG loading failed, showing fallback:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

watch(() => props.src, loadSvg, { immediate: true })

onMounted(() => {
  if (props.src) {
    loadSvg(props.src)
  }
})
</script>

<style scoped>
svg {
  display: inline-block;
}

.svg-loading, .svg-fallback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
}

.svg-fallback {
  opacity: 0.7;
}

.loading-spinner {
  width: calc(v-bind(width + 'px') * 0.6);
  height: calc(v-bind(height + 'px') * 0.6);
  border: 2px solid currentColor;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  opacity: 0.6;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
