/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Palette, 
  AlertCircle, 
  History, 
  BookOpen, 
  Lightbulb, 
  ClipboardList, 
  Layout, 
  CheckCircle2, 
  MessageSquare,
  Quote,
  Mic,
  Vote,
  Users,
  Info
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  image?: string;
  narrative?: string;
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "De Start",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/zuyderland/1200/800" 
              alt="Zuyderland" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h1 className="text-4xl font-display font-bold text-white">Project 2.3: Interactieve Kunstparticipatie bij Zuyderland</h1>
            </div>
          </motion.div>
          <div className="max-w-xl">
            <p className="text-xl text-slate-600 italic">
              "Ik ben Jelger en ik onderzoek hoe we de kloof dichten tussen de professionele kunstcollectie van Zuyderland en de beleving van de medewerkers op de werkvloer."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Het Probleem: De \"Shitkunst\"-paradox",
      content: (
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-500">
              <AlertCircle size={32} />
              <h2 className="text-3xl font-display font-bold">De Paradox</h2>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              De kunstcommissie koopt kwaliteit, maar de vloer voelt zich niet gehoord.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-bold text-red-700 mb-2">Inzicht:</h3>
              <p className="text-red-900">Kunst wordt na 2 weken onzichtbaar ("behang") of roept weerstand op door gebrek aan context.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center space-y-4 transform rotate-2">
              <span className="text-4xl font-bold text-slate-300">#1</span>
              <p className="font-display font-bold text-xl text-slate-800">"Shitkunst"</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center space-y-4 transform -rotate-3">
              <span className="text-4xl font-bold text-slate-300">#2</span>
              <p className="font-display font-bold text-xl text-slate-800">Behang-effect</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "De \"Rebellie\" in de Praktijk",
      content: (
        <div className="space-y-12 h-full flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">KNO-afdeling</h3>
              <p className="text-slate-600">Eigen kunst buiten de commissie om. Een bewuste keuze voor herkenbaarheid.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <History size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">Intensive Care (IC)</h3>
              <p className="text-slate-600">"Illegale" foto's die er al 10 jaar hangen. Emotionele waarde wint van beleid.</p>
            </motion.div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl text-center">
            <p className="text-xl font-medium">"De behoefte aan eigen regie en herkenbaarheid is zo groot dat medewerkers het systeem omzeilen."</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Onderzoek & Theoretisch Kader",
      content: (
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <BookOpen size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold">Theoretische Basis</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <p className="text-lg text-slate-700"><strong>Evidence-Based Design (Ulrich):</strong> De omgeving beïnvloedt herstel en welzijn.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <p className="text-lg text-slate-700"><strong>Participatory Design:</strong> Gebruikers betrekken bij het ontwerpproces.</p>
              </li>
            </ul>
            <div className="p-6 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
              <p className="text-xl font-bold">"Context is de brug naar waardering."</p>
              <p className="text-indigo-100 mt-2">Kunstwaardering stijgt zodra er context is en wanneer mensen zelf mogen kiezen.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center justify-center">
            <img 
              src="https://picsum.photos/seed/university/400/400" 
              alt="Erasmus Logo Placeholder" 
              className="w-48 h-48 object-contain mb-6"
              referrerPolicy="no-referrer"
            />
            <p className="text-slate-400 font-medium">Eline van de Pas Rapport</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Belangrijkste Inzichten",
      content: (
        <div className="h-full flex flex-col justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { text: "Humor", color: "bg-yellow-100 text-yellow-800" },
              { text: "Menselijkheid", color: "bg-pink-100 text-pink-800" },
              { text: "Snackable Info", color: "bg-green-100 text-green-800" },
              { text: "Rotatie", color: "bg-blue-100 text-blue-800" },
              { text: "Persoonlijke Verhalen", color: "bg-purple-100 text-purple-800" },
              { text: "Afleiding & Rust", color: "bg-orange-100 text-orange-800" },
            ].map((note, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${note.color} p-8 rounded-xl shadow-md font-display font-bold text-xl flex items-center justify-center text-center aspect-square transform hover:scale-105 transition-transform cursor-default`}
              >
                {note.text}
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-xl text-slate-500">
            Medewerkers willen humor en verhalen; patiënten willen afleiding en rust.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: "Ontwerpeisen (PvE)",
      content: (
        <div className="grid md:grid-cols-2 gap-12 h-full items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <ClipboardList size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold">Programma van Eisen</h2>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Lightbulb />, title: "Snackable", desc: "Info binnen 30-60 sec te verwerken." },
                { icon: <Layout />, title: "Gelaagd", desc: "Prikkel → Keuze → Diepgang." },
                { icon: <Users />, title: "Inclusief", desc: "Voor het hele team en de patiënt." },
                { icon: <Mic />, title: "Audio-first", desc: "Lean-back ervaring ipv lappen tekst." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-emerald-500 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full" />
            <img 
              src="https://picsum.photos/seed/design/600/600" 
              alt="Design Process" 
              className="relative rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Het Concept: Interactief Stem-model",
      content: (
        <div className="space-y-8 h-full flex flex-col justify-center">
          <div className="bg-white p-1 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm font-medium text-slate-400">Zuyderland Art Portal</span>
              <div className="w-8" />
            </div>
            <div className="p-8 grid grid-cols-3 gap-6">
              {[
                { name: "Bas", img: "https://picsum.photos/seed/art1/300/400" },
                { name: "Nico", img: "https://picsum.photos/seed/art2/300/400" },
                { name: "Sophie", img: "https://picsum.photos/seed/art3/300/400" },
              ].map((artist, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden relative group">
                    <img src={artist.img} alt={artist.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                        <Vote size={18} /> Stem
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg">{artist.name}</h4>
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mt-1">
                      <Mic size={14} /> 30s audio
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Quote size={20} /></div>
              <p className="text-slate-600"><strong>Innovatie:</strong> Toevoeging van "Collega-quotes" en 30-seconden audio-fragmenten van kunstenaars.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Info size={20} /></div>
              <p className="text-slate-600"><strong>Doel:</strong> Een iPad-interface op de afdeling waar men kan stemmen op nieuwe kunst.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Het Prototype (Demo)",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-4xl bg-slate-900 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center space-y-6">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto"
                  >
                    <Layout className="text-white" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-white">Interactieve Demo</h3>
                  <p className="text-slate-400 max-w-md mx-auto">
                    Hoe werkt de interface? De "Stem Nu" knop en de "Wist je dat?" feitjes verlagen de drempel voor participatie.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <div className="px-4 py-2 bg-white/10 rounded-full text-white text-sm border border-white/20">Stem Nu</div>
                    <div className="px-4 py-2 bg-white/10 rounded-full text-white text-sm border border-white/20">Wist je dat?</div>
                  </div>
               </div>
            </div>
            {/* Mock UI elements floating */}
            <div className="absolute top-10 left-10 w-32 h-40 bg-white/5 rounded-xl border border-white/10" />
            <div className="absolute bottom-10 right-10 w-48 h-12 bg-white/5 rounded-full border border-white/10" />
          </div>
          <p className="text-slate-500 italic">"Een interface die uitnodigt tot dialoog, niet alleen tot kijken."</p>
        </div>
      )
    },
    {
      id: 9,
      title: "Status & Validatie",
      content: (
        <div className="grid md:grid-cols-2 gap-12 h-full items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold">Volgende Stappen</h2>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              Ik sta nu aan de vooravond van de validatie. Het model is klaar om getoetst te worden in de praktijk.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold">A</div>
                <div>
                  <h4 className="font-bold">Test met Arts</h4>
                  <p className="text-sm text-slate-500">Focus op efficiëntie en waarde.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold">V</div>
                <div>
                  <h4 className="font-bold">Test met Verpleegkundige</h4>
                  <p className="text-sm text-slate-500">Focus op beleving en toegankelijkheid.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative">
              <img src="https://picsum.photos/seed/person1/400/400" alt="Pathman" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">Pathman</div>
            </div>
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative">
              <img src="https://picsum.photos/seed/person2/400/400" alt="José" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">José</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Vraag aan de Coach",
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center space-y-12">
          <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
            <MessageSquare size={48} />
          </div>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
              "Hoe waarborg ik de balans tussen de artistieke kwaliteit (commissie) en de volledige vrijheid (vloer) in dit model?"
            </h2>
            <p className="text-xl text-slate-500">
              Bedankt voor de aandacht! Ik hoor graag jullie inzichten.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSlide(0)}
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 shadow-xl"
          >
            Terug naar begin
          </motion.button>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      {/* Header */}
      <header className="p-6 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <Palette size={24} />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-slate-900">Zuyderland Art</h1>
            <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">Project 2.3</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-400">
            Slide {currentSlide + 1} / {slides.length}
          </span>
          <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-12 lg:p-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-6xl h-full min-h-[60vh]"
          >
            <div className="mb-8">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2">
                Slide {slides[currentSlide].id}
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                {slides[currentSlide].title}
              </h3>
            </div>
            <div className="h-full">
              {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Navigation */}
      <footer className="p-8 flex items-center justify-center gap-8 bg-white/80 backdrop-blur-md border-t border-slate-200">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full transition-all ${currentSlide === 0 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 active:scale-90'}`}
        >
          <ChevronLeft size={32} />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-indigo-600 w-8' : 'bg-slate-200 hover:bg-slate-300'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-4 rounded-full transition-all ${currentSlide === slides.length - 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 active:scale-90'}`}
        >
          <ChevronRight size={32} />
        </button>
      </footer>
    </div>
  );
}
