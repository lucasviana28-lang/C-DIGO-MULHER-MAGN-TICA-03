/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const CTA_LABEL = "QUERO ACESSAR AGORA";
  const PRIMARY_RED = "bg-[#8B0000]";
  const CTA_GREEN = "bg-[#00C853] hover:bg-[#00A344]";

  const CTAButton = () => (
    <div className="flex flex-col items-center w-full py-4">
      <motion.button 
        id="cta-button"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.2, 
          ease: "easeInOut" 
        }}
        className={`${CTA_GREEN} text-white font-bold text-xl md:text-2xl py-5 px-8 rounded-lg w-full max-w-md shadow-[0_4px_15px_rgba(0,200,83,0.3)] transition-transform active:scale-95 uppercase tracking-wider cursor-pointer`}
      >
        {CTA_LABEL}
      </motion.button>
    </div>
  );

  const SectionBox = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`section-box mb-6 ${className}`}>
      {children}
    </div>
  );

  const Bullet = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3 mb-3 text-sm md:text-base">
      <CheckCircle2 className="text-[#00C853] shrink-0" size={20} />
      <span>{text}</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* TOP FIXED BAR */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-[#8B0000] text-white py-2 text-center text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg">
        Oferta promocional disponível apenas hoje!
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen pt-[32px] md:pt-[36px]">
        {/* HERO SIDEBAR - FIXED ON DESKTOP */}
        <aside className="lg:w-[450px] lg:h-screen lg:sticky lg:top-0 bg-black border-b lg:border-b-0 lg:border-r-2 border-[#8B0000] p-6 md:p-10 flex flex-col justify-between overflow-y-auto shrink-0">
          <div className="top-hero">
            <span className="text-[#8B0000] uppercase font-bold text-sm tracking-widest block mb-4">CÓDIGO MULHER MAGNÉTICA</span>
            <h1 className="headline text-2xl md:text-4xl font-extrabold mb-6 leading-tight text-white uppercase italic">
              ❤️ A ÚNICA SEQUÊNCIA BIOLÓGIA QUE FAZ O CÉREBRO DELE VOLTAR A SENTIR APEGO POR VOCÊ — MESMO DEPOIS DE ESFRIAR, TE BLOQUEAR, SE AFASTAR OU DIZER QUE ACABOU
            </h1>
            
            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
              ❤️ Ative o protocolo emocional que reacende os estímulos internos que fazem um homem sentir conexão, saudade e vontade de voltar.
            </p>

            <div id="hero-image-container" className="mb-8 rounded-lg overflow-hidden border border-[#8B0000]/40">
              <img 
                src="https://i.imgur.com/ejDOLnj.jpeg" 
                alt="Conexão emocional"
                className="w-full h-auto object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2 mb-8">
              <Bullet text="Método simples" />
              <Bullet text="Baseado em gatilhos emocionais reais" />
              <Bullet text="Para mulheres que querem reconquistar" />
            </div>
          </div>

          <div className="bottom-hero pt-6 border-t border-white/10">
            <h3 className="text-[#00C853] font-bold text-center text-sm mb-2">
              👉 Acesso imediato por apenas <span className="text-white text-lg">R$29,90</span>
            </h3>
            <CTAButton />
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 editorial-gradient flex flex-col">
          <div className="flex-1 p-6 md:p-10 space-y-10">
            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {/* COLUMN 1 */}
              <div className="space-y-6">
                {/* TESTIMONIALS */}
                <SectionBox>
                  <h2 className="headline text-xl font-bold mb-6 uppercase border-l-4 border-[#8B0000] pl-4">
                    “Mulheres comuns. Situações reais.”
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    <img 
                      src="https://i.imgur.com/i0RcSI2.jpeg" 
                      alt="Depoimento 1" 
                      className="w-full rounded-lg shadow-lg border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://i.imgur.com/AjxjUVF.jpeg" 
                      alt="Depoimento 2" 
                      className="w-full rounded-lg shadow-lg border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://i.imgur.com/WImrjWK.jpeg" 
                      alt="Depoimento 3" 
                      className="w-full rounded-lg shadow-lg border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CTAButton />
                </SectionBox>

                {/* QUEBRA */}
                <SectionBox>
                  <h2 className="headline text-xl font-bold mb-4 uppercase border-l-4 border-[#8B0000] pl-4">Seja honesta com você mesma…</h2>
                  <div className="text-sm text-[#CCCCCC] space-y-4">
                    <p>Você quer que ele:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pense em você todos os dias</li>
                      <li>Sinta sua falta sem entender por quê</li>
                      <li>Volte a puxar assunto</li>
                      <li>Se arrependa de ter se afastado</li>
                    </ul>
                    <p className="font-bold text-[#8B0000]">Mas isso não aconteceu. E não foi por falta de amor.</p>
                  </div>
                </SectionBox>

                {/* MECANISMO */}
                <SectionBox>
                  <h2 className="headline text-xl font-bold mb-4 uppercase border-l-4 border-[#8B0000] pl-4">O Mecanismo</h2>
                  <div className="text-sm text-[#CCCCCC] space-y-4">
                    <p>O interesse de um homem depende de estímulos internos que criam apego, conexão e vínculo. Quando esses estímulos “desligam”, ele esfria e se afasta.</p>
                  </div>
                </SectionBox>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-6">
                {/* SOLUÇÃO */}
                <SectionBox className="bg-[#8B0000] border-0">
                  <h2 className="headline text-xl font-bold mb-4 uppercase border-l-4 border-white pl-4 text-white">A Solução</h2>
                  <div className="text-sm text-white space-y-4">
                    <p>O Código Mulher Magnética mostra exatamente o que dizer, quando dizer e como reativar esses gatilhos no cérebro dele. Sem implorar ou se humilhar.</p>
                  </div>
                </SectionBox>

                {/* BENEFÍCIOS */}
                <SectionBox>
                  <h2 className="headline text-xl font-bold mb-6 uppercase border-l-4 border-[#8B0000] pl-4">Você recebe:</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Código Mulher Magnética",
                      "Mensagens prontas de reconexão",
                      "Plano de reaproximação",
                      "Checklist anti-erros"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <span className="text-[#00C853] font-bold">✔</span> 
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </SectionBox>

                {/* GARANTIA */}
                <div className="guarantee-badge">
                  <h2 className="headline text-lg font-bold mb-2 uppercase text-white">Teste por 7 dias.</h2>
                  <p className="text-xs text-[#CCCCCC]">Ou funciona… Ou você recebe 100% do dinheiro de volta. Sem perguntas.</p>
                </div>

                {/* FAQ */}
                <SectionBox>
                  <h2 className="headline text-xl font-bold mb-6 uppercase border-l-4 border-[#8B0000] pl-4">Perguntas Frequentes</h2>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <p className="font-bold text-sm mb-1 text-white">Como recebo o acesso?</p>
                      <p className="text-xs text-[#CCCCCC]">O acesso é enviado imediatamente para o seu e-mail logo após a confirmação do pagamento.</p>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <p className="font-bold text-sm mb-1 text-white">Por quanto tempo terei acesso?</p>
                      <p className="text-xs text-[#CCCCCC]">O acesso é vitalício. Você pode consultar as mensagens e o método sempre que precisar.</p>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <p className="font-bold text-sm mb-1 text-white">Funciona mesmo se ele estiver frio ou com outra?</p>
                      <p className="text-xs text-[#CCCCCC]">Sim. Os gatilhos do Código Mulher Magnética atuam no sistema límbico dele, a parte do cérebro responsável pelas emoções e pelo apego involuntário.</p>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <p className="font-bold text-sm mb-1 text-white">E se eu não gostar?</p>
                      <p className="text-xs text-[#CCCCCC]">Você tem 7 dias de garantia incondicional. Se não ficar 100% satisfeita, devolvemos cada centavo.</p>
                    </div>
                  </div>
                </SectionBox>

                {/* ENCERRAMENTO */}
                <SectionBox className="text-center pt-8 border-0 bg-transparent">
                  <p className="text-sm italic text-[#CCCCCC] mb-4">Enquanto você tenta entender o que aconteceu… Existe algo que pode fazer ele voltar a sentir tudo de novo.</p>
                  <p className="headline text-[#8B0000] font-black uppercase text-xl mb-4">👉 E você pode ativar isso.</p>
                  <h2 className="headline text-2xl font-black mb-2 uppercase">Código Mulher Magnética</h2>
                  <p className="text-sm font-bold opacity-80">Porque conexão não se implora. Se ativa.</p>
                  <CTAButton />
                </SectionBox>
              </div>
            </div>
          </div>

          {/* FOOTER BAR */}
          <footer className="footer-bar mt-auto p-6 flex justify-between items-center text-white sticky bottom-0 z-50">
            <div>
              <p className="text-base font-bold uppercase headline">CÓDIGO MULHER MAGNÉTICA</p>
              <p className="text-[10px] opacity-70">Conexão não se implora. Se ativa.</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-60 line-through">De R$297</p>
              <p className="text-2xl font-black headline italic">R$ 29,90</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
