<script setup lang="ts">
import { ref } from 'vue'
import SvgLoader from '@/components/SvgLoader.vue'

const profileImage = ref<string | null>('/rsm-img.jpg')

const openCV = () => {
  window.open('/denis_cv_html_pdf.pdf', '_blank', 'width=900,height=1200,scrollbars=yes,resizable=yes')
}
</script>

<template>
  <div class="container">
    <header>
      <div class="greeting">
        Hi! I'm a Vue Frontend Developer passionate about creating amazing web experiences
      </div>
    </header>

    <main>
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

      <section class="profile-section">
        <h2 class="section-title">Professional Experience</h2>

        <div class="bio-item">
          <div class="bio-year">1993</div>
          <div class="bio-position">Born in Beloyarsky</div>
        </div>

        <div class="bio-item">
          <div class="bio-year">2021</div>
          <div class="bio-position">
            Frontend Developer –
            <a href="https://bb.market/us-ru" class="bio-company" target="_blank">GridPix</a>
          </div>
          <div class="bio-location">Tyumen</div>
        </div>

        <div class="bio-item">
          <div class="bio-year">2023</div>
          <div class="bio-position">
            Frontend Developer –
            <a href="https://fic.fan/" class="bio-company" target="_blank">Breakpoint SIA</a>
          </div>
          <div class="bio-location">Latvia</div>
        </div>

        <div class="bio-item">
          <div class="bio-year">2024</div>
          <div class="bio-position">
            Frontend Developer –
            <a href="https://www.renins.ru/" class="bio-company" target="_blank">Renaissance Insurance Group</a>
          </div>
          <div class="bio-location">Moscow</div>
        </div>
      </section>

      <section class="profile-section">
        <h2 class="section-title">What I Love</h2>
        <div class="interests">
          <div class="interest-item">🏍️ Motorcycles</div>
          <div class="interest-item">✈️ Travelling</div>
          <div class="interest-item">🍰 Cakes</div>
          <div class="interest-item">☀️ Hot Weather</div>
        </div>
      </section>

      <section class="profile-section">
        <h2 class="section-title">Get In Touch</h2>
        <ul class="contacts-list">
          <li>
            <a href="https://t.me/Denis_Mnemonick" class="contact-item" target="_blank">
              <SvgLoader height="16" width="16" src="/svg/icons8-telegram.svg" />
              <span>Telegram: @Denis_Mnemonick</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/DenisMnemonik" class="contact-item" target="_blank">
              <SvgLoader height="16" width="16" src="/svg/icons8-twitter-bird.svg" />
              <span>Twitter: DenisMnemonik</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/denfelson233/" class="contact-item" target="_blank">
              <SvgLoader height="16" width="16" src="/svg/icons8-instagram.svg" />
              <span>Instagram: denfelson233</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/denis-felbaba-27a478175/" class="contact-item" target="_blank">
              <SvgLoader height="16" width="16" src="/svg/icons8-linkedin.svg" />
              <span>LinkedIn: Denis Felbaba</span>
            </a>
          </li>
          <li>
            <button @click="openCV" class="contact-item">
               <SvgLoader height="16" width="16" src="/svg/icons8-sheet.svg" />
              <span>Denis Felbaba CV</span>
            </button>
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <p>Design by Denis Felbaba, 2025. All rights reserved.</p>
    </footer>
  </div>
</template>
