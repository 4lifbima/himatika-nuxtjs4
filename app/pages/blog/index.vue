<template>
  <section id="blog-list" class="bg-white py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Judul Section -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="font-semibold uppercase tracking-wider text-primary">Blog</span>
        <h2 class="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Semua Artikel
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Jelajahi semua wawasan, tutorial, dan berita yang telah kami publikasikan.
        </p>
      </div>

      <!-- Grid Blog Card -->
      <div v-if="postsFromAPI.length > 0" class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="post in postsFromAPI" 
          :key="post.post_id"
          class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
        >
          <NuxtLink :to="`/blog/${post.post_name}`">
            <img 
              :src="post.post_image || 'https://placehold.co/600x400/5222e3/white?text=HMMatika'" 
              :alt="post.post_title"
              class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <div class="p-6">
              <h3 class="font-display text-xl font-semibold text-slate-800 line-clamp-2">
                {{ post.post_title }}
              </h3>
              <p class="mt-2 text-sm text-slate-600 line-clamp-3" v-html="post.post_excerpt"></p>
              <span class="mt-4 inline-block text-sm font-semibold text-primary">
                Baca Selengkapnya &rarr;
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Loading -->
      <div v-else-if="loading" class="mt-16 text-center text-slate-500">Memuat artikel...</div>

      <!-- Tidak ada post -->
      <div v-else class="mt-16 text-center text-slate-500">Belum ada artikel yang dipublikasikan.</div>

      <!-- Pagination Buttons -->
      <div class="mt-16 flex justify-center items-center gap-4">
        <button 
          @click="goToPage(currentPage - 1)" 
          :disabled="currentPage <= 1"
          class="rounded-full px-6 py-3 font-semibold border border-slate-300 text-slate-700 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          ← Sebelumnya
        </button>

        <span class="text-slate-600 font-medium">
          Halaman {{ currentPage }} dari {{ totalPages }}
        </span>

        <button 
          @click="goToPage(currentPage + 1)" 
          :disabled="currentPage >= totalPages"
          class="rounded-full px-6 py-3 font-semibold border border-slate-300 text-slate-700 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Berikutnya →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Semua Artikel | HIMATIKA',
  meta: [
    { name: 'description', content: 'Kumpulan artikel, berita, dan wawasan terbaru dari Himpunan Mahasiswa Matematika.' },
    { property: 'og:title', content: 'Semua Artikel | HIMATIKA' },
    { property: 'og:description', content: 'Kumpulan artikel, berita, dan wawasan terbaru dari Himpunan Mahasiswa Matematika.' },
    { property: 'og:image', content: 'https://placehold.co/1200x630/5222e3/ffffff?text=HMMatika+Blog' },
    { property: 'og:type', content: 'website' }
  ]
})

const route = useRoute()
const router = useRouter()

// Ambil parameter halaman (default: 1)
const currentPage = ref(parseInt(route.query.page) || 1)
const totalPages = ref(1)
const postsFromAPI = ref([])
const loading = ref(true)

// Fungsi ambil data dari WordPress API
async function fetchPosts(page = 1) {
  loading.value = true
  const url = `https://gopos.id/wp-json/wp/v2/posts?_embed&per_page=9&page=${page}`
  try {
    const res = await $fetch(url)
    postsFromAPI.value = res.map(post => ({
      post_id: post.id,
      post_name: post.slug,
      post_title: post.title.rendered,
      post_excerpt: post.excerpt.rendered,
      post_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
    }))

    // Ambil total halaman dari header API
    const response = await fetch(url)
    totalPages.value = parseInt(response.headers.get('X-WP-TotalPages')) || 1
  } catch (err) {
    console.error('Gagal mengambil data:', err)
  } finally {
    loading.value = false
  }
}

// Ganti halaman
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    router.push({ query: { page } })
    currentPage.value = page
    fetchPosts(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Fetch pertama kali
onMounted(() => fetchPosts(currentPage.value))
</script>
