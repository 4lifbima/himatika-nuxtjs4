<template>
  <main class="py-24 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Menggunakan ContentDoc untuk ambil artikel -->
      <ContentDoc v-slot="{ doc }">
        <!-- ✅ tampilkan artikel jika doc ditemukan -->
        <template v-if="doc">
          <!-- Header Artikel -->
          <header class="mx-auto max-w-4xl text-center">
            <h1 class="font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
              {{ doc.title }}
            </h1>
            <p class="mt-6 text-lg leading-relaxed text-slate-600">
              {{ doc.description }}
            </p>
            <div class="mt-6 text-sm text-slate-500">
              <span>
                Dipublikasikan pada
                {{ new Date(doc.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </span>
            </div>
            <img
              :src="doc.image || 'https://placehold.co/1200x600/5222e3/white?text=HMMatika'"
              :alt="doc.title"
              class="mt-12 h-auto w-full rounded-2xl object-cover shadow-lg"
            >
          </header>

          <!-- Konten Artikel -->
          <article
            class="
              prose prose-primary prose-lg 
              lg:prose-xl 
              max-w-4xl 
              mx-auto 
              mt-16
              prose-img:rounded-xl 
              prose-a:transition-colors
            "
          >
            <ContentRenderer :value="doc" />
          </article>
        </template>

        <!-- ❌ tampilkan fallback jika artikel tidak ada -->
        <template v-else>
          <div class="text-center py-32">
            <h1 class="text-3xl font-bold text-slate-800">Artikel tidak ditemukan</h1>
            <p class="mt-4 text-slate-600">Silakan periksa kembali URL atau kembali ke halaman blog.</p>
            <NuxtLink to="/blog" class="mt-6 inline-block text-primary hover:underline">
              ← Kembali ke daftar blog
            </NuxtLink>
          </div>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
// Tidak perlu script tambahan di sini — ContentDoc sudah handle semuanya
</script>
