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
      <div v-if="posts && posts.length > 0" class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Loop semua post -->
        <div 
          v-for="post in posts" 
          :key="post._path"
          class="group transform overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
        >
          <NuxtLink :to="post._path">
            <img 
              :src="post.image || 'https://placehold.co/600x400/5222e3/white?text=HMMatika'" 
              :alt="post.title"
              class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
            
            <div class="p-6">
              <h3 class="font-display text-xl font-semibold text-slate-800 line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="mt-2 text-sm text-slate-600 line-clamp-3">
                {{ post.description }}
              </p>
              <span class="mt-4 inline-block text-sm font-semibold text-primary">
                Baca Selengkapnya &rarr;
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Tampilan jika tidak ada post -->
      <div v-else class="mt-16 text-center">
        <p class="text-lg text-slate-500">Belum ada artikel yang dipublikasikan.</p>
      </div>

    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Blog'
})

// Mengambil SEMUA artikel dari folder /content/blog
// Diurutkan berdasarkan tanggal terbaru
const { data: posts } = await useAsyncData('all-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 }) // -1 = descending
    .find()
)
</script>
