"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caveatBrush } from "./layout";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(bgRef.current, {
      scale: 1.25,
      ease: "none",
      scrollTrigger: {
        trigger: cloudsRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <main ref={container} className="text-foreground font-sans selection:bg-pink-accent selection:text-gray-dark">
      
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/30 shadow-xl rounded-full z-50 py-3.5 px-10 flex gap-8 items-center">
        <a href="#about" className="text-[14.5px] font-normal text-white hover:text-white/70 transition-colors tracking-wide drop-shadow-sm">Tentang</a>
        <a href="#experience" className="text-[14.5px] font-normal text-white hover:text-white/70 transition-colors tracking-wide drop-shadow-sm">Pengalaman</a>
        <a href="#education" className="text-[14.5px] font-normal text-white hover:text-white/70 transition-colors tracking-wide drop-shadow-sm">Pendidikan</a>
        <a href="#skills" className="text-[14.5px] font-normal text-white hover:text-white/70 transition-colors tracking-wide drop-shadow-sm">Keahlian</a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="sticky top-0 h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden z-10">
        
        {/* Animated Background */}
        <div ref={bgRef} className="absolute inset-0 w-full h-full bg-[url('/bg-hero.jpg')] bg-cover bg-center origin-center -z-10"></div>
        
        <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center w-full">
          
          {/* Main Hand-drawn Title with Crayon Texture */}
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 
              className="text-[9rem] md:text-[14rem] leading-[0.7] -rotate-3 drop-shadow-lg"
              style={{ 
                fontFamily: "'Caveat Brush', cursive",
                background: "url('https://www.transparenttextures.com/patterns/stucco.png'), #FFD700",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Rara
            </h1>
            <h1 
              className="text-[9rem] md:text-[14rem] leading-[0.7] rotate-2 ml-8 md:ml-16 drop-shadow-lg"
              style={{ 
                fontFamily: "'Caveat Brush', cursive",
                background: "url('https://www.transparenttextures.com/patterns/stucco.png'), #FFD700",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Farohah
            </h1>
          </div>

          {/* Hand-drawn Subtitle */}
          <p 
            className="mt-4 text-[#FFD700] max-w-2xl mx-auto text-3xl md:text-4xl tracking-wide drop-shadow-lg -rotate-1"
            style={{ 
              fontFamily: "'Just Another Hand', cursive",
              background: "url('https://www.transparenttextures.com/patterns/stucco.png'), #FFD700",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Hadir dengan empati, untuk setiap potensi.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-3.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all shadow-xl">
              Jelajahi Profil
            </a>
          </div>
        </div>

        {/* Liquid Glass Card (Baked Image) */}
        <div className="absolute hidden md:flex bottom-16 right-8 w-[361px] h-[172px] p-5 gap-4 items-center z-30 bg-[url('/glass-baked.png')] bg-cover bg-center bg-no-repeat rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/20">
          <div className="w-[110px] h-[110px] rounded-xl overflow-hidden shrink-0 ml-1 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <img src="/rara.jpg" alt="Rara Farohah" className="w-full h-full object-cover" />
          </div>
          <div className="text-left flex flex-col justify-center">
            <h3 className="font-bold text-white text-[17px] leading-tight mb-1 drop-shadow-md">Kenali Lebih Jauh</h3>
            <p className="text-[11px] text-white/90 leading-tight mb-4 drop-shadow-md pr-2">Unduh Resume (CV) lengkap untuk melihat pencapaian dan rekam jejak.</p>
            <a href="#certificates" className="bg-black text-white text-xs font-bold px-6 py-2.5 rounded-full w-fit hover:scale-105 transition-transform shadow-xl">
              Unduh CV
            </a>
          </div>
        </div>
      </section>

      {/* Clouds Transition */}
      <div ref={cloudsRef} className="w-full relative z-30 pointer-events-none flex justify-center">
        <img src="/clouds.png" alt="Clouds" className="w-full h-auto min-w-[1200px] object-cover block" />
      </div>

      <div className="bg-[#F8F3E0] relative z-20 -mt-[25vh] pt-[25vh] overflow-x-clip overflow-y-visible pb-20">
        {/* Flower Decorations */}
        <img src="/bunga%20kiri.png" alt="Bunga Kiri" className="absolute left-0 top-[20vh] h-[100vh] w-auto object-contain pointer-events-none z-0" />
        <img src="/bunga%20kanan.png" alt="Bunga Kanan" className="absolute -right-[10vw] top-[15vh] h-[120vh] w-auto object-contain pointer-events-none z-0 rotate-12" />

        {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 drop-shadow-sm">Tentang <span className="text-pink-600 font-caveat">Saya</span></h2>
            <p className="text-gray-800 leading-relaxed mb-4 font-medium">
              Saya adalah individu yang teliti dan mandiri dengan kemampuan analisis yang cukup. Saya terbiasa bekerja secara fokus serta mendalam dalam setiap tanggung jawab yang diberikan.
            </p>
            <p className="text-gray-800 leading-relaxed mb-6 font-medium">
              Kemampuan saya terbukti melalui pencapaian peringkat pertama di sekolah 5 tahun berturut-turut, mewakili sekolah di berbagai lomba, hingga mendapat kepercayaan sebagai penerima tamu dalam organisasi sekolah. Saya juga aktif mengembangkan diri melalui berbagai seminar.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-2xl w-1/2 shadow-lg">
                <h3 className="text-3xl font-bold text-pink-600 mb-1 drop-shadow-sm">5 <span className="text-sm font-normal text-gray-700">Tahun</span></h3>
                <p className="text-sm text-gray-700 font-medium">Juara 1 Berturut-turut</p>
              </div>
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-2xl w-1/2 shadow-lg">
                <h3 className="text-3xl font-bold text-pink-600 mb-1 drop-shadow-sm">100<span className="text-sm font-normal text-gray-700">%</span></h3>
                <p className="text-sm text-gray-700 font-medium">Fokus & Mandiri</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 relative shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-400/30 blur-2xl rounded-full"></div>
              <h3 className="text-xl font-bold mb-4 text-pink-600 drop-shadow-sm">Karakteristik Utama</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-pink-600 text-xs">✓</span>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Mampu menganalisis data agar mudah dipahami.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-pink-600 text-xs">✓</span>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Bekerja mandiri dengan tingkat fokus yang tinggi.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-pink-600 text-xs">✓</span>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Keinginan kuat untuk belajar (Aktif mengikuti seminar).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow-sm">Pengalaman <span className="text-pink-600">Kerja</span></h2>
          
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Seller di Rumah</h3>
                <p className="text-pink-600 font-medium">Part-Time (Paruh Waktu)</p>
              </div>
              <div className="mt-2 md:mt-0 bg-pink-100 text-pink-600 px-4 py-2 rounded-full h-fit text-sm font-medium border border-pink-200">
                Jan 2025 – Feb 2025
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-800 font-medium">
                <div className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></div>
                Bertanggung jawab dalam menjaga keamanan dan kerapian barang.
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium">
                <div className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></div>
                Memperhatikan secara teliti kualitas pakaian sebelum ditawarkan.
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium">
                <div className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></div>
                Melakukan restock pakaian berdasarkan analisis kebutuhan pasar.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 md:px-20 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow-sm">Riwayat <span className="text-pink-600">Pendidikan</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UIN 1 */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl p-8 border-t-4 border-t-pink-500">
            <h3 className="text-xl font-bold mb-2 text-gray-900">UIN Siber Syekh Nurjati Cirebon</h3>
            <p className="text-gray-700 text-sm mb-4 font-medium">S1 - Bimbingan dan Konseling Islam</p>
            <div className="text-xs font-bold text-pink-700 bg-pink-100 px-3 py-1 rounded-full inline-block">
              Agu 2024 – Sekarang
            </div>
          </div>

          {/* UIN 2 */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl p-8 border-t-4 border-t-gray-400">
            <h3 className="text-xl font-bold mb-2 text-gray-900">UIN Siber Syekh Nurjati Cirebon</h3>
            <p className="text-gray-700 text-sm mb-4 font-medium">SMA/SMK/MA - Bimbingan dan Konseling Islam</p>
            <div className="text-xs font-bold text-gray-700 bg-gray-200 px-3 py-1 rounded-full inline-block">
              Agu 2024 – Sekarang
            </div>
          </div>

          {/* GONTOR 1 */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl p-8 border-t-4 border-t-pink-500">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Pondok Modern Darussalam Gontor Putri 2</h3>
            <p className="text-gray-700 text-sm mb-4 font-medium">SMA/SMK/MA - Bimbingan dan Konseling Islam</p>
            <div className="text-xs font-bold text-pink-700 bg-pink-100 px-3 py-1 rounded-full inline-block">
              Agu 2024 – Sekarang
            </div>
          </div>

          {/* GONTOR 2 */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl p-8 border-t-4 border-t-gray-400">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Pondok Modern Darussalam Gontor Putri 2</h3>
            <p className="text-gray-700 text-sm mb-4 font-medium">SMA/SMK/MA - Bahasa Arab</p>
            <div className="text-xs font-bold text-gray-700 bg-gray-200 px-3 py-1 rounded-full inline-block">
              Mei 2017 – Sekarang
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow-sm">Keahlian <span className="text-pink-600">Utama</span></h2>
          
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
              <div key={index} className="bg-white/50 backdrop-blur-md border border-white/60 shadow-sm px-6 py-3 rounded-full text-sm md:text-base font-semibold text-gray-800 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300 transition-colors cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates/Awards Section */}
      <section id="certificates" className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 drop-shadow-sm">Pencapaian <span className="text-pink-600">&</span> Sertifikat</h2>
        <p className="text-gray-800 font-medium mb-12 max-w-2xl mx-auto">Sebuah dedikasi untuk selalu memberikan yang terbaik dan terus belajar hal baru.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl p-6 aspect-square flex flex-col justify-center items-center hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-3xl shadow-sm">🏆</div>
            <h3 className="font-bold mb-2 text-sm text-gray-900">Peringkat Pertama</h3>
            <p className="text-xs text-gray-700 font-medium">5 Tahun Berturut-turut di Sekolah</p>
          </div>
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl p-6 aspect-square flex flex-col justify-center items-center hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-3xl shadow-sm">🎤</div>
            <h3 className="font-bold mb-2 text-sm text-gray-900">Perwakilan Sekolah</h3>
            <p className="text-xs text-gray-700 font-medium">Berbagai lomba mewakili sekolah</p>
          </div>
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl p-6 aspect-square flex flex-col justify-center items-center hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-3xl shadow-sm">🤝</div>
            <h3 className="font-bold mb-2 text-sm text-gray-900">Penerima Tamu</h3>
            <p className="text-xs text-gray-700 font-medium">Terpilih dalam organisasi sekolah</p>
          </div>
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl p-6 aspect-square flex flex-col justify-center items-center hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-3xl shadow-sm">📚</div>
            <h3 className="font-bold mb-2 text-sm text-gray-900">Seminar Bedah Buku</h3>
            <p className="text-xs text-gray-700 font-medium">Peserta aktif seminar & pelatihan</p>
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer id="contact" className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 drop-shadow-sm">Tertarik Bekerja <span className="text-pink-600">Sama?</span></h2>
          <p className="text-gray-800 font-medium mb-10 max-w-xl mx-auto">Saya selalu terbuka untuk mendiskusikan peluang kerja, proyek baru, atau sekadar berbagi pandangan tentang dunia konseling dan sales.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="mailto:rarafarohah975@gmail.com" className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:scale-105 hover:bg-white/80 transition-all text-gray-900 font-semibold">
              <span className="text-xl">✉</span>
              <span>rarafarohah975@gmail.com</span>
            </a>
            <a href="https://wa.me/6281288345645" target="_blank" rel="noreferrer" className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:scale-105 hover:bg-white/80 transition-all text-gray-900 font-semibold">
              <span className="text-xl">📞</span>
              <span>+62 812 8834 5645</span>
            </a>
          </div>
          
          <p className="text-sm text-gray-600 font-medium">
            © {new Date().getFullYear()} Rara Farohah. Kabupaten Bekasi, Jawa Barat.
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
}
