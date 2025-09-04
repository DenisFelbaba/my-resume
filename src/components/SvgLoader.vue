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
    Loading...
  </div>
  <div v-else-if="error" class="svg-error">
    Failed to load SVG
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

// Define props
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

// Reactive state
const svgContent = ref('')
const loading = ref(false)
const error = ref(false)

// Function to load SVG content
const loadSvg = async (src: string) => {
  if (!src) return

  loading.value = true
  error.value = false
  svgContent.value = ''

  try {
    const response = await fetch(src)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()

    // Extract content between <svg> tags, excluding the outer svg element
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, 'image/svg+xml')
    const svgElement = doc.querySelector('svg')

    if (svgElement) {
      svgContent.value = svgElement.innerHTML
    } else {
      throw new Error('Invalid SVG format')
    }
  } catch (err) {
    console.error('Error loading SVG:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

// Watch for src changes
watch(() => props.src, loadSvg, { immediate: true })

// Load on mount
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

.svg-loading, .svg-error {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
  font-size: 12px;
  color: #666;
}

.svg-error {
  color: #e74c3c;
}
</style>
