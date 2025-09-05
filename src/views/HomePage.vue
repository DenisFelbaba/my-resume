<script setup lang="ts">
import { ref } from 'vue'
import {
  NTimeline,
  NTimelineItem,
  NButton,
} from 'naive-ui'

import SvgLoader from '@/components/SvgLoader.vue'

const profileImage = ref<string | null>('/rsm-img.JPG')

const openCV = () => {
  window.open('/denis_cv_html_pdf.pdf', '_blank', 'width=900,height=1200,scrollbars=yes,resizable=yes')
}

const experiences = [
  {
    year: '1993',
    title: 'Born in Beloyarsky',
    type: 'info' as const
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'GridPix',
    location: 'Tyumen',
    link: 'https://bb.market/us-ru',
    type: 'success' as const
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    company: 'Breakpoint SIA',
    location: 'Latvia',
    link: 'https://fic.fan/',
    type: 'success' as const
  },
  {
    year: '2024',
    title: 'Frontend Developer',
    company: 'Renaissance Insurance Group',
    location: 'Moscow',
    link: 'https://www.renins.ru/',
    type: 'success' as const
  }
]

const interests = [
  { emoji: '🏍️', text: 'Motorcycles' },
  { emoji: '✈️', text: 'Travelling' },
  { emoji: '🍰', text: 'Cakes' },
  { emoji: '☀️', text: 'Hot Weather' }
]

const contacts = [
  {
    text: 'Telegram: @Denis_Mnemonick',
    link: 'https://t.me/Denis_Mnemonick',
    svg: '/svg/icons8-telegram.svg'
  },
  {
    text: 'Twitter: DenisMnemonik',
    link: 'https://x.com/DenisMnemonik',
    svg: '/svg/icons8-twitter-bird.svg'
  },
  {
    text: 'Instagram: denfelson233',
    link: 'https://www.instagram.com/denfelson233/',
    svg: '/svg/icons8-instagram.svg'
  },
  {
    text: 'LinkedIn: Denis Felbaba',
    link: 'https://www.linkedin.com/in/denis-felbaba-27a478175/',
    svg: '/svg/icons8-linkedin.svg'
  }
]
</script>

<template>
  <div class="container">
    <!-- Header Section -->
    <header>
      <div class="greeting">
        Hi! I'm a Vue Frontend Developer passionate about creating amazing web experiences
      </div>
    </header>

    <main>
      <!-- Profile Section -->
      <section class="profile-section">
        <div class="profile-header">
          <div class="photo-container">
            <div class="photo-placeholder">
              <img
                v-if="profileImage"
                :src="profileImage"
                alt="Denis Felbaba"
                class="profile-image"
                @error="profileImage = null"
              />
              <span v-else>DF</span>
            </div>
          </div>
          <div class="name-title">
            <h1 class="name">Denis Felbaba</h1>
            <p class="title">Vue.js Frontend Developer</p>
          </div>
        </div>

        <div class="about">
          <p>
            I'm a passionate frontend developer specializing in Vue.js and modern web technologies.
            With years of experience in creating responsive, user-friendly applications, I bring
            creativity and technical expertise to every project. I love turning complex problems
            into simple, beautiful, and intuitive solutions. My goal is to build digital experiences
            that not only look great but also provide exceptional user experiences. I'm always
            eager to learn new technologies and take on challenging projects that push the boundaries
            of what's possible on the web.
          </p>
        </div>
      </section>

      <!-- Experience Section with Naive UI Timeline -->
      <section class="profile-section">
        <h2 class="section-title">Professional Experience</h2>

        <NTimeline class="custom-timeline">
          <NTimelineItem
            v-for="exp in experiences"
            :key="exp.year"
            :type="exp.type"
            :title="exp.year"
            :line-type="exp.type === 'info' ? 'dashed' : 'default'"
          >
            <template #default>
              <div class="timeline-content">
                <div class="bio-position">{{ exp.title }}</div>
                <div v-if="exp.company" class="company-info">
                  –
                  <a
                    v-if="exp.link"
                    :href="exp.link"
                    target="_blank"
                    class="bio-company"
                  >
                    {{ exp.company }}
                  </a>
                  <span v-else>{{ exp.company }}</span>
                </div>
                <div v-if="exp.location" class="bio-location">
                  {{ exp.location }}
                </div>
              </div>
            </template>
          </NTimelineItem>
        </NTimeline>
      </section>

      <!-- Interests Section -->
      <section class="profile-section">
        <h2 class="section-title">What I Love</h2>
        <div class="interests">
          <div v-for="interest in interests" :key="interest.text" class="interest-item">
            {{ interest.emoji }} {{ interest.text }}
          </div>
        </div>
      </section>

      <!-- Contact Section with Enhanced Styling -->
      <section class="profile-section">
        <h2 class="section-title">Get In Touch</h2>
        <ul class="contacts-list">
          <li v-for="contact in contacts" :key="contact.text">
            <a :href="contact.link" class="contact-item" target="_blank">
              <SvgLoader height="16" width="16" :src="contact.svg" />
              <span>{{ contact.text }}</span>
            </a>
          </li>
          <li>
            <NButton
              class="contact-item contact-button cv-download"
              type="primary"
              size="large"
              @click="openCV"
              block
            >
              <template #icon>
                <SvgLoader height="16" width="16" src="/svg/icons8-sheet.svg" />
              </template>
              Denis Felbaba CV
            </NButton>
          </li>
        </ul>
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <p>Design by Denis Felbaba, 2025. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Keep your existing container and layout styles */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background: var(--header-bg);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px var(--shadow-light);
  border: 1px solid var(--border-color);
}

.greeting {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 16px;
}

.profile-section {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px var(--shadow-light);
  border: 1px solid var(--border-color);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.profile-section:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px var(--shadow-medium);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.photo-container {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
  box-shadow: 0 6px 20px var(--shadow-light);
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.name-title {
  flex: 1;
  min-width: 250px;
}

.name {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.title {
  font-size: 1.1rem;
  color: var(--text-accent);
  font-weight: 500;
}

.about {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
  text-align: justify;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 8px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: 2px;
}

/* Custom timeline styling to work with your theme */
.custom-timeline {
  --n-icon-color-info: var(--text-secondary);
  --n-icon-color-success: var(--text-accent);
  --n-line-color: var(--border-color);
}

.timeline-content {
  padding: 8px 0;
}

.bio-position {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  font-size: 0.95rem;
}

.company-info {
  display: inline;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.bio-company {
  color: var(--text-accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.bio-company:hover {
  text-decoration: underline;
}

.bio-location {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.9rem;
  margin-top: 4px;
}

.interests {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.interest-item {
  background: var(--gradient-primary);
  color: white;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px var(--shadow-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.interest-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--shadow-medium);
}

.contacts-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  background: var(--bg-card-hover);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px 20px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.contact-item:hover {
  background: var(--text-accent);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 12px var(--shadow-light);
}

/* Special styling for CV download button */
.cv-download {
  margin-top: 8px;
}

/* Override Naive UI button styles to match your theme */
.contact-button {
  --n-color: var(--text-accent) !important;
  --n-color-hover: var(--text-accent) !important;
  --n-color-pressed: var(--text-accent) !important;
  --n-text-color: white !important;
  --n-text-color-hover: white !important;
  --n-text-color-pressed: white !important;
}

footer {
  background: var(--bg-card);
  color: var(--text-secondary);
  text-align: center;
  padding: 24px;
  border-radius: 12px;
  margin-top: 32px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px var(--shadow-light);
}

@media (max-width: 768px) {
  .container {
    padding: 12px;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .name {
    font-size: 1.8rem;
  }

  .greeting {
    font-size: 1.4rem;
  }

  .interests {
    grid-template-columns: 1fr;
  }
}
</style>
