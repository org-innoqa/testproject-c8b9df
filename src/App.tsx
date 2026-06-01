import React from 'react';
import { Phone, MapPin, MessageCircle, Scissors, Clock } from 'lucide-react';

const services = [
  { name: 'Saç Kesimi', price: '450 TL' },
  { name: 'Saç Boyama', price: '1200 TL' },
  { name: 'Fön Çekimi', price: '250 TL' },
  { name: 'Manikür & Pedikür', price: '600 TL' },
  { name: 'Cilt Bakımı', price: '850 TL' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="p-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-light tracking-widest">ELITE KUAFÖR</h1>
        <a href="tel:+905550000000" className="text-sm border border-gray-300 px-4 py-2 hover:bg-gray-100 transition">ARA: 0555 000 00 00</a>
      </nav>

      <header className="relative h-[500px] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c07d?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Salon" />
        <div className="relative text-center">
          <h2 className="text-5xl font-light mb-4">Tarzınızı Yeniden Keşfedin</h2>
          <p className="text-lg">Modern dokunuşlar, profesyonel hizmet.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6">
        <section className="mb-16">
          <h3 className="text-2xl font-light mb-8 flex items-center gap-2"><Scissors size={24} /> Hizmetlerimiz & Fiyatlar</h3>
          <div className="grid gap-4">
            {services.map((s, i) => (
              <div key={i} className="flex justify-between border-b pb-4">
                <span className="text-lg">{s.name}</span>
                <span className="font-semibold">{s.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6 flex items-center gap-2"><MapPin size={24} /> Adres</h3>
            <p className="text-gray-600">Bağdat Caddesi, No: 123/A<br />Kadıköy, İstanbul</p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-6 flex items-center gap-2"><Clock size={24} /> Çalışma Saatleri</h3>
            <p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 20:00<br />Pazar: Kapalı</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-12 text-center">
        <a 
          href="https://wa.me/905550000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition"
        >
          <MessageCircle size={20} /> WhatsApp ile Randevu Al
        </a>
      </footer>
    </div>
  );
}