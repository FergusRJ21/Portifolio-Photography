// Documentação: Componente de Formulário de Contato com Notificação Moderna
// src/components/ContactForm.tsx

"use client";

import { useState } from "react";
// Adicionamos o AnimatePresence para animar a saída da notificação
import { AnimatePresence, motion } from "framer-motion";
// Adicionamos o CheckCircle para o ícone de sucesso
import { CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    // NOVO: Estado para armazenar a mensagem da notificação moderna
    const [notification, setNotification] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Definimos a mensagem personalizada usando o nome digitado ANTES de limpar o formulário
        setNotification(`Obrigado, ${nome}! Sua mensagem foi registrada.`);

        // 2. Limpamos os campos do formulário
        setNome("");
        setEmail("");
        setMensagem("");

        // 3. Criamos um temporizador para esconder a notificação após 5 segundos (5000 milissegundos)
        setTimeout(() => {
            setNotification("");
        }, 5000);
    };

    return (
        // position: relative no elemento pai mais externo não é estritamente necessário aqui, 
        // mas garante que o layout base se mantenha estável enquanto a notificação usa position: fixed.
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* =========================================
          COLUNA ESQUERDA: INFORMAÇÕES E REDES SOCIAIS
          ========================================= */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-10 text-gray-300"
            >
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2 text-glow">Vamos criar juntos?</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Estou disponível para ensaios, projetos comerciais e colaborações artísticas.
                        Preencha o formulário ou conecte-se através das redes abaixo.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[var(--neon-accent)] hover:box-glow transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">E-mail</p>
                            <p className="text-lg font-semibold text-white">contato@cyberfoto.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[var(--neon-accent)] hover:box-glow transition-all duration-300">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Base de Operações</p>
                            <p className="text-lg font-semibold text-white">São Paulo, SP - Brasil</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Social</p>
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded bg-[#0a0a0a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[var(--neon-accent)] hover:border-[var(--neon-accent)] hover:box-glow transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={22} />
                        </a>
                        <a
                            href="https://behance.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded bg-[#0a0a0a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[var(--neon-accent)] hover:border-[var(--neon-accent)] hover:box-glow transition-all duration-300"
                            aria-label="Behance"
                        >
                            <FaBehance size={22} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded bg-[#0a0a0a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[var(--neon-accent)] hover:border-[var(--neon-accent)] hover:box-glow transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* =========================================
          COLUNA DIREITA: FORMULÁRIO VISUAL
          ========================================= */}
            <motion.form
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-[#0a0a0a] p-8 rounded-xl border border-gray-800 shadow-2xl flex flex-col gap-6"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-sm text-gray-400 tracking-wider uppercase">Seu Nome</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        placeholder="Ex: João Silva"
                        className="w-full bg-black border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-[var(--neon-accent)] focus:box-glow transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-gray-400 tracking-wider uppercase">Seu E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Ex: joao@email.com"
                        className="w-full bg-black border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-[var(--neon-accent)] focus:box-glow transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="mensagem" className="text-sm text-gray-400 tracking-wider uppercase">Mensagem</label>
                    <textarea
                        id="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                        rows={4}
                        placeholder="Conte-me sobre o seu projeto..."
                        className="w-full bg-black border border-gray-800 rounded p-4 text-white resize-none focus:outline-none focus:border-[var(--neon-accent)] focus:box-glow transition-all duration-300"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-transparent border-2 border-[var(--neon-accent)] text-[var(--neon-accent)] font-bold tracking-widest hover:bg-[var(--neon-accent)] hover:text-black transition-all duration-300 box-glow"
                >
                    ENVIAR MENSAGEM <Send size={18} />
                </button>
            </motion.form>

            {/* =========================================
          SISTEMA DE NOTIFICAÇÃO (TOAST)
          ========================================= */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        // A animação faz o alerta surgir de baixo (y: 20) e subir suavemente
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        // Classes fixam a notificação no canto inferior direito. Em celulares, centraliza embaixo.
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-10 z-[100] flex items-center gap-3 px-6 py-4 bg-[#050505] border-l-4 border-[var(--neon-accent)] rounded shadow-[0_0_20px_rgba(0,240,255,0.2)] text-white w-[90%] md:w-auto"
                    >
                        <CheckCircle className="text-[var(--neon-accent)] flex-shrink-0" size={24} />
                        <span className="font-medium tracking-wide text-sm md:text-base">
                            {notification}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}