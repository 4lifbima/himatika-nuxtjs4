<template>
  <section id="blog-detail" class="bg-white py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
      <div v-if="pending" class="text-center text-lg text-slate-500">
        Memuat artikel...
      </div>

      <article v-else-if="postData">
        <!-- Featured image -->
        <img
          v-if="postData.post_image"
          :src="postData.post_image"
          :alt="postData.post_title"
          class="mb-10 w-full rounded-2xl object-cover shadow-lg"
        />

        <!-- Judul -->
        <h1 class="font-display text-4xl font-bold text-slate-900 mb-6">
          {{ postData.post_title }}
        </h1>

        <div class="text-sm text-slate-500 mb-8">
          Dipublikasikan pada:
          <span class="font-medium text-primary">{{ formatDate(postData.post_date) }}</span>
        </div>

        <!-- Isi artikel -->
        <div class="prose prose-lg max-w-none text-slate-700" v-html="postData.post_content"></div>

        <!-- Navigasi Artikel -->
        <div
          v-if="prevPost || nextPost"
          class="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-between"
        >
          <div v-if="prevPost" class="text-left">
            <NuxtLink
              :to="`/blog/${prevPost.slug}`"
              class="block text-primary hover:underline"
            >
              ← {{ prevPost.title }}
            </NuxtLink>
          </div>

          <div v-if="nextPost" class="text-right">
            <NuxtLink
              :to="`/blog/${nextPost.slug}`"
              class="block text-primary hover:underline"
            >
              {{ nextPost.title }} →
            </NuxtLink>
          </div>
        </div>

        <!-- Tombol kembali -->
        <div class="mt-12 text-center">
          <NuxtLink
            to="/blog"
            class="inline-block rounded-full bg-primary px-8 py-3 text-white font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            ← Kembali ke Daftar Artikel
          </NuxtLink>
        </div>
      </article>

      <div v-else class="text-center text-lg text-slate-500">
        Artikel tidak ditemukan.
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// === Fetch artikel berdasarkan slug ===
const { data: apiResponse, pending } = await useFetch(`https://gopos.id/wp-json/wp/v2/posts?slug=${slug}&_embed`)

// === Fetch semua artikel untuk navigasi ===
const { data: allPosts } = await useFetch('https://gopos.id/wp-json/wp/v2/posts?_embed&per_page=100')

// === Format data artikel aktif ===
const postData = computed(() => {
  if (!apiResponse.value || !Array.isArray(apiResponse.value) || apiResponse.value.length === 0) return null
  const post = apiResponse.value[0]
  return {
    id: post.id,
    slug: post.slug,
    post_title: post.title.rendered,
    post_excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    post_content: post.content.rendered,
    post_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    post_date: post.date,
    post_url: `https://hm-matika.vercel.app/blog/${post.slug}`
  }
})

// === Cari artikel sebelumnya & berikutnya ===
const prevPost = computed(() => {
  if (!postData.value || !allPosts.value) return null
  // Urutkan semua artikel dari terbaru ke terlama
  const sorted = [...allPosts.value].sort((a, b) => new Date(b.date) - new Date(a.date))
  const index = sorted.findIndex(p => p.slug === postData.value.slug)
  return index < sorted.length - 1
    ? { slug: sorted[index + 1].slug, title: sorted[index + 1].title.rendered }
    : null
})

const nextPost = computed(() => {
  if (!postData.value || !allPosts.value) return null
  const sorted = [...allPosts.value].sort((a, b) => new Date(b.date) - new Date(a.date))
  const index = sorted.findIndex(p => p.slug === postData.value.slug)
  return index > 0
    ? { slug: sorted[index - 1].slug, title: sorted[index - 1].title.rendered }
    : null
})

// === SEO Meta Dinamis ===
watchEffect(() => {
  if (postData.value) {
    useHead({
      title: postData.value.post_title,
      meta: [
        { name: 'description', content: postData.value.post_excerpt },
        { property: 'og:title', content: postData.value.post_title },
        { property: 'og:description', content: postData.value.post_excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: postData.value.post_url },
        { property: 'og:image', content: postData.value.post_image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: postData.value.post_title },
        { name: 'twitter:description', content: postData.value.post_excerpt },
        { name: 'twitter:image', content: postData.value.post_image }
      ],
      link: [{ rel: 'canonical', href: postData.value.post_url }]
    })
  }
})

// === Format tanggal Indonesia ===
function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<style scoped>
.prose img {
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
