import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-pink-accent selection:text-gray-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest text-pink-accent">RARA<span className="text-foreground">.</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-light">
          <a href="#about" className="hover:text-pink-accent transition-colors">Tentang</a>
          <a href="#experience" className="hover:text-pink-accent transition-colors">Pengalaman</a>
          <a href="#education" className="hover:text-pink-accent transition-colors">Pendidikan</a>
          <a href="#skills" className="hover:text-pink-accent transition-colors">Keahlian</a>
        </div>
        <a href="#contact" className="hidden md:block border border-pink-accent text-pink-accent px-5 py-2 rounded-full font-medium hover:bg-pink-accent hover:text-gray-dark transition-colors">
          Kontak
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-accent/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-dark/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-pink-accent mb-8 relative p-1">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-dark">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" 
              alt="Rara Farohah Placeholder" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-pink-accent">Rara</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-light max-w-2xl font-light">
          Bimbingan Konseling <span className="text-pink-accent">&</span> Sales Enthusiast
        </p>
        <p className="mt-6 text-gray-light max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Seorang individu teliti dan mandiri yang menggabungkan empati mendalam dengan kemampuan analitis tajam. Berprestasi secara akademis dan sangat adaptif terhadap dinamika pasar.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-pink-accent text-gray-dark px-8 py-3 rounded-full font-bold hover:bg-pink-dark transition-colors shadow-[0_0_20px_rgba(255,182,193,0.4)]">
            Mari Berdiskusi
          </a>
          <a href="#experience" className="border border-gray-light text-foreground px-8 py-3 rounded-full font-bold hover:border-pink-accent hover:text-pink-accent transition-colors">
            Jelajahi Profil
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tentang <span className="text-pink-accent">Saya</span></h2>
            <p className="text-gray-light leading-relaxed mb-4">
              Saya adalah individu yang teliti dan mandiri dengan kemampuan analisis yang cukup. Saya terbiasa bekerja secara fokus serta mendalam dalam setiap tanggung jawab yang diberikan.
            </p>
            <p className="text-gray-light leading-relaxed mb-6">
              Kemampuan saya terbukti melalui pencapaian peringkat pertama di sekolah 5 tahun berturut-turut, mewakili sekolah di berbagai lomba, hingga mendapat kepercayaan sebagai penerima tamu dalam organisasi sekolah. Saya juga aktif mengembangkan diri melalui berbagai seminar.
            </p>
            <div className="flex gap-4">
              <div className="glass p-4 rounded-2xl w-1/2">
                <h3 className="text-3xl font-bold text-pink-accent mb-1">5 <span className="text-sm font-normal text-gray-light">Tahun</span></h3>
                <p className="text-sm text-gray-light">Juara 1 Berturut-turut</p>
              </div>
              <div className="glass p-4 rounded-2xl w-1/2">
                <h3 className="text-3xl font-bold text-pink-accent mb-1">100<span className="text-sm font-normal text-gray-light">%</span></h3>
                <p className="text-sm text-gray-light">Fokus & Mandiri</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="glass rounded-3xl p-8 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-accent/20 blur-2xl rounded-full"></div>
              <h3 className="text-xl font-bold mb-4 text-pink-accent">Karakteristik Utama</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-pink-accent text-xs">✓</span>
                  </div>
                  <p className="text-gray-light text-sm">Mampu menganalisis data agar mudah dipahami.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-pink-accent text-xs">✓</span>
                  </div>
                  <p className="text-gray-light text-sm">Bekerja mandiri dengan tingkat fokus yang tinggi.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-pink-accent text-xs">✓</span>
                  </div>
                  <p className="text-gray-light text-sm">Keinginan kuat untuk belajar (Aktif mengikuti seminar).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-20 bg-gray-dark/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Pengalaman <span className="text-pink-accent">Kerja</span></h2>
          
          <div className="glass glass-hover rounded-3xl p-8 md:p-10 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Seller di Rumah</h3>
                <p className="text-pink-accent font-medium">Part-Time (Paruh Waktu)</p>
              </div>
              <div className="mt-2 md:mt-0 bg-pink-accent/10 text-pink-accent px-4 py-2 rounded-full h-fit text-sm font-medium border border-pink-accent/20">
                Jan 2025 – Feb 2025
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-light">
                <div className="w-2 h-2 rounded-full bg-pink-accent shrink-0"></div>
                Bertanggung jawab dalam menjaga keamanan dan kerapian barang.
              </li>
              <li className="flex items-center gap-3 text-gray-light">
                <div className="w-2 h-2 rounded-full bg-pink-accent shrink-0"></div>
                Memperhatikan secara teliti kualitas pakaian sebelum ditawarkan.
              </li>
              <li className="flex items-center gap-3 text-gray-light">
                <div className="w-2 h-2 rounded-full bg-pink-accent shrink-0"></div>
                Melakukan restock pakaian berdasarkan analisis kebutuhan pasar.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Riwayat <span className="text-pink-accent">Pendidikan</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UIN 1 */}
          <div className="glass rounded-3xl p-8 border-t-4 border-t-pink-accent">
            <h3 className="text-xl font-bold mb-2">UIN Siber Syekh Nurjati Cirebon</h3>
            <p className="text-gray-light text-sm mb-4">S1 - Bimbingan dan Konseling Islam</p>
            <div className="text-xs font-bold text-pink-accent bg-pink-accent/10 px-3 py-1 rounded-full inline-block">
              Agu 2024 – Sekarang
            </div>
          </div>

          {/* UIN 2 */}
          <div className="glass rounded-3xl p-8 border-t-4 border-t-gray-light">
            <h3 className="text-xl font-bold mb-2">UIN Siber Syekh Nurjati Cirebon</h3>
            <p className="text-gray-light text-sm mb-4">SMA/SMK/MA - Bimbingan dan Konseling Islam</p>
            <div className="text-xs font-bold text-gray-light bg-gray-light/10 px-3 py-1 rounded-full inline-block">
              Agu 2024 – Sekarang
            </div>
          </div>

          {/* GONTOR 1 */}
          <div className="glass rounded-3xl p-8 border-t-4 border-t-pink-accent">
            <h3 className="text-xl font-bold mb-2">Pondok Modern Darussalam Gontor Putri 2</h3>
            <p className="text-gray-light text-sm mb-4">SMA/SMK/MA - Bimbingan dan Konseling Islam</p>
            <div className="text-xs font-bold text-pink-accent bg-pink-accent/10 px-3 py-1 rounded-full inline-block">
              Agu 2024 – Sekarang
            </div>
          </div>

          {/* GONTOR 2 */}
          <div className="glass rounded-3xl p-8 border-t-4 border-t-gray-light">
            <h3 className="text-xl font-bold mb-2">Pondok Modern Darussalam Gontor Putri 2</h3>
            <p className="text-gray-light text-sm mb-4">SMA/SMK/MA - Bahasa Arab</p>
            <div className="text-xs font-bold text-gray-light bg-gray-light/10 px-3 py-1 rounded-full inline-block">
              Mei 2017 – Sekarang
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-20 bg-gray-dark/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Keahlian <span className="text-pink-accent">Utama</span></h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Adaptasi Pencahayaan",
              "Adaptasi Perubahan Kebutuhan Pelanggan",
              "Adaptasi Tren Fashion",
              "Adaptasi Perubahan Pasar",
              "Adaptasi Perubahan Kebijakan",
              "Advokasi Anak",
              "Alat Analisis Data Pelanggan",
              "Akuisisi Data",
              "Akurasi Tanda Baca (Penerjemahan)",
              "Akurasi Ejaan (Penerjemahan)"
            ].map((skill, index) => (
              <div key={index} className="glass px-6 py-3 rounded-full text-sm md:text-base font-medium text-gray-light hover:text-pink-accent hover:border-pink-accent/50 transition-colors cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates/Awards Section */}
      <section id="certificates" className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pencapaian <span className="text-pink-accent">&</span> Sertifikat</h2>
        <p className="text-gray-light mb-12 max-w-2xl mx-auto">Sebuah dedikasi untuk selalu memberikan yang terbaik dan terus belajar hal baru.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass glass-hover rounded-2xl p-6 aspect-square flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-pink-accent/20 flex items-center justify-center mb-4 text-3xl">🏆</div>
            <h3 className="font-bold mb-2 text-sm">Peringkat Pertama</h3>
            <p className="text-xs text-gray-light">5 Tahun Berturut-turut di Sekolah</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 aspect-square flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-pink-accent/20 flex items-center justify-center mb-4 text-3xl">🎤</div>
            <h3 className="font-bold mb-2 text-sm">Perwakilan Sekolah</h3>
            <p className="text-xs text-gray-light">Berbagai lomba mewakili sekolah</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 aspect-square flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-pink-accent/20 flex items-center justify-center mb-4 text-3xl">🤝</div>
            <h3 className="font-bold mb-2 text-sm">Penerima Tamu</h3>
            <p className="text-xs text-gray-light">Terpilih dalam organisasi sekolah</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 aspect-square flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-pink-accent/20 flex items-center justify-center mb-4 text-3xl">📚</div>
            <h3 className="font-bold mb-2 text-sm">Seminar Bedah Buku</h3>
            <p className="text-xs text-gray-light">Peserta aktif seminar & pelatihan</p>
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer id="contact" className="pt-24 pb-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tertarik Bekerja <span className="text-pink-accent">Sama?</span></h2>
          <p className="text-gray-light mb-10 max-w-xl mx-auto">Saya selalu terbuka untuk mendiskusikan peluang kerja, proyek baru, atau sekadar berbagi pandangan tentang dunia konseling dan sales.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="mailto:rarafarohah975@gmail.com" className="glass glass-hover px-8 py-4 rounded-full flex items-center justify-center gap-3">
              <span className="text-xl">✉</span>
              <span>rarafarohah975@gmail.com</span>
            </a>
            <a href="https://wa.me/6281288345645" target="_blank" rel="noreferrer" className="glass glass-hover px-8 py-4 rounded-full flex items-center justify-center gap-3">
              <span className="text-xl">📞</span>
              <span>+62 812 8834 5645</span>
            </a>
          </div>
          
          <p className="text-sm text-gray-light/50">
            © {new Date().getFullYear()} Rara Farohah. Kabupaten Bekasi, Jawa Barat.
          </p>
        </div>
      </footer>
    </main>
  );
}
