/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Icon } from '@iconify/react';
import { Background3D } from './components/Background3D';
import { ContactForm } from './components/ContactForm';

export default function App() {
  return (
    <div className="antialiased font-sans bg-paper relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none grid-overlay z-0"></div>
      
      {/* Ambient background blobs for sophisticated color */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px]"></div>
      </div>

      <Background3D />

      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center justify-center bg-white rounded-full px-6 py-2.5 shadow-md group hover:shadow-lg transition-all">
            <span className="font-serif text-2xl tracking-tight font-bold text-[#2a3890]">FlowDX</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#mission" className="font-mono text-sm text-slate-300 hover:text-white uppercase tracking-widest transition-colors">About</a>
            <a href="#experts" className="font-mono text-sm text-slate-300 hover:text-white uppercase tracking-widest transition-colors">Experts</a>
            <a href="#program" className="font-mono text-sm text-slate-300 hover:text-white uppercase tracking-widest transition-colors">Program</a>
            <a href="#impact" className="font-mono text-sm text-slate-300 hover:text-white uppercase tracking-widest transition-colors">Impact</a>
            <a href="#contact" className="font-serif italic text-xl px-6 py-1.5 border border-slate-600 text-slate-200 hover:bg-white hover:text-slate-900 transition-all rounded-full">문의하기</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Section 1: Hero */}
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="animate-scale-up flex flex-col items-center mt-24">
            <div className="brand-circle backdrop-blur-[2px] bg-white/5 shadow-inner">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-[0.05em] leading-none select-none bg-clip-text text-transparent bg-gradient-to-br from-[#2a3890] to-indigo-500">
                FlowDX
              </h1>
            </div>
            
            <div className="mt-12 max-w-2xl md:max-w-4xl text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="font-serif italic text-[26px] md:text-[30px] text-ink/80 mb-8 leading-relaxed">"기술의 소외 없는 흐름을 통해,<br />모두를 위한 디지털 기회를 확장합니다."</p>
              <p className="font-sans text-[18px] md:text-[19px] text-ink/50 font-light leading-relaxed px-4">
                FlowDX의 <strong>Flow</strong>는 우리가 먼저 얻은 지식과 경험을 세상으로 흘려보내어, <br className="hidden lg:block" />
                AI 시대 디지털 기술로 인해 누구도 소외되지 않는 세상을 만들겠다는 우리의 사명을 상징합니다. 
                <br className="mb-4" /> 
                글로벌 표준을 선도하는 Google Certified 전문가 그룹이 데이터(Data)의 흐름을 설계하고, <br className="hidden lg:block" />
                그 위에서 누구나 차별 없이 최신의 <strong>디지털 경험(eXperience)을 누리는 세상을 만드는 것</strong>. <br />
                그것이 FlowDX가 그리는 교육의 미래입니다.
              </p>
            </div>

            <div className="mt-16 flex flex-col items-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-px h-12 bg-neutral-300 mb-4"></div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-[0.3em]">Scroll to Explore</span>
            </div>
          </div>
        </section>

        {/* Section 1.5: Main Mission */}
        <section id="mission" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col justify-center border-t border-neutral-200/30">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-indigo-600"></div>
              <span className="font-mono text-sm text-indigo-600 uppercase tracking-widest">DIGITAL EQUITY — NEXT GENERATION</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-ink tracking-tight mb-12">
              <span className="block mb-4">모두를 위한 AI,</span>
              <span className="italic font-normal text-neutral-500 block leading-[1.2]">격차 없는 디지털 미래를 설계합니다.</span>
            </h2>

            <p className="max-w-3xl font-sans text-neutral-600 font-light text-xl md:text-2xl leading-relaxed mb-12">
              <span className="font-serif font-medium bg-clip-text text-transparent bg-gradient-to-br from-ink via-indigo-900 to-indigo-600">FlowDX</span>는 4차 산업혁명과 AI 시대의 급격한 변화 속에서 발생하는 교육 소외와 디지털 역량 차이를 해소하고, 누구나 기술의 혜택을 누릴 수 있는 평등한 디지털 생태계를 만드는 데 주력합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#program" className="group inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                <span className="font-mono text-sm tracking-widest uppercase font-medium">교육 프로그램 보기</span>
                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform text-xl" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Experts */}
        <section id="experts" className="py-32 px-6 bg-white relative border-t border-neutral-200 overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start mb-24">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-indigo-600"></div>
                  <span className="font-mono text-sm text-indigo-600 uppercase tracking-widest">OUR EXPERTS</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl text-ink tracking-tight leading-tight">
                  <span className="block mb-2">검증된 실력,</span>
                  <span className="italic text-neutral-500 block">현장을 바꾸는 전문가 그룹.</span>
                </h2>
              </div>
              <div className="md:w-1/2 md:pt-12">
                <p className="text-xl text-neutral-600 font-light leading-relaxed border-l-2 border-indigo-100 pl-6">
                  FlowDX는 단순한 강사진이 아닌, 글로벌 기술력을 검증받은 국내 최고 수준의 <strong className="text-indigo-600 font-medium">구글 인증 전문가 집단</strong>과 함께합니다.
                </p>
              </div>
            </div>

            {/* 3 Core Competencies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {/* Card 1 */}
              <div className="group relative p-10 bg-white border border-neutral-200 hover:border-indigo-200 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                  <Icon icon="solar:star-fall-bold-duotone" className="text-3xl text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-sans font-bold text-2xl text-ink mb-4">Certified Trainer</h4>
                <p className="text-base text-neutral-600 font-light leading-relaxed">구글 공식 인증 전문 트레이너진이 최적화된 연수와 설계를 제공합니다.</p>
              </div>
              
              {/* Card 2 */}
              <div className="group relative p-10 bg-white border border-neutral-200 hover:border-indigo-200 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                  <Icon icon="solar:users-group-rounded-bold-duotone" className="text-3xl text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-sans font-bold text-2xl text-ink mb-4">Certified Coach</h4>
                <p className="text-base text-neutral-600 font-light leading-relaxed">1:1 맞춤형 코칭을 통해 조직의 변화를 지속 가능하게 가이드합니다.</p>
              </div>

              {/* Card 3 */}
              <div className="group relative p-10 bg-white border border-neutral-200 hover:border-indigo-200 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                  <Icon icon="solar:cpu-bolt-bold-duotone" className="text-3xl text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-sans font-bold text-2xl text-ink mb-4">High-Tech Insight</h4>
                <p className="text-base text-neutral-600 font-light leading-relaxed">Gemini 등 최신 AI 기술을 교육 현장에 즉각 적용하는 설계 능력을 보유합니다.</p>
              </div>
            </div>

            {/* Value Chain / Process Flow */}
            <div className="relative rounded-3xl bg-gradient-to-br from-ink via-indigo-950 to-indigo-900 p-1 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="relative bg-ink/40 backdrop-blur-xl rounded-[22px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center text-center w-full">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                    <span className="font-mono text-lg text-indigo-300">01</span>
                  </div>
                  <span className="font-mono text-xs text-indigo-300/70 tracking-[0.2em] mb-3 uppercase">글로벌 표준 역량</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">Google Certified</h3>
                </div>

                {/* Divider */}
                <div className="hidden md:flex flex-col items-center justify-center px-4">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"></div>
                  <Icon icon="solar:alt-arrow-right-linear" className="text-2xl text-indigo-400 absolute" />
                </div>
                <div className="md:hidden flex justify-center py-2">
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent opacity-50"></div>
                  <Icon icon="solar:alt-arrow-down-linear" className="text-2xl text-indigo-400 absolute mt-3" />
                </div>

                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center text-center w-full transform md:-translate-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 border border-indigo-400/50 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(79,70,229,0.6)]">
                    <span className="font-mono text-xl text-white font-bold">02</span>
                  </div>
                  <span className="font-mono text-xs text-indigo-200 tracking-[0.2em] mb-3 uppercase">교육 현장 최적화</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-medium">현장 맞춤형<br/>솔루션</h3>
                </div>

                {/* Divider */}
                <div className="hidden md:flex flex-col items-center justify-center px-4">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"></div>
                  <Icon icon="solar:alt-arrow-right-linear" className="text-2xl text-indigo-400 absolute" />
                </div>
                <div className="md:hidden flex justify-center py-2">
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent opacity-50"></div>
                  <Icon icon="solar:alt-arrow-down-linear" className="text-2xl text-indigo-400 absolute mt-3" />
                </div>

                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center text-center w-full">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                    <span className="font-mono text-lg text-indigo-300">03</span>
                  </div>
                  <span className="font-mono text-xs text-indigo-300/70 tracking-[0.2em] mb-3 uppercase">스스로 변화하는 조직</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">지속 가능한 DX</h3>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 3.5: Education Program */}
        <section id="program" className="py-32 px-6 relative border-t border-white/5 overflow-hidden bg-[#0f172a]">
          {/* Subtle Blue Glow / Orbs */}
          <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

          {/* Flowing Wave Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center z-0 opacity-20">
            <svg className="absolute left-0 w-[200%] h-[600px] animate-wave" viewBox="0 0 2400 600" preserveAspectRatio="none">
              <path d="M0,300 C300,500 300,100 600,300 C900,500 900,100 1200,300 C1500,500 1500,100 1800,300 C2100,500 2100,100 2400,300" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-300/10" />
              <path d="M0,350 C300,150 300,550 600,350 C900,150 900,550 1200,350 C1500,150 1500,550 1800,350 C2100,150 2100,550 2400,350" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-300/10" />
              <path d="M0,250 C300,450 300,50 600,250 C900,450 900,50 1200,250 C1500,450 1500,50 1800,250 C2100,450 2100,50 2400,250" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-200/5" />
            </svg>
          </div>

          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-20">
              <span className="font-mono text-sm text-indigo-300 uppercase tracking-widest block mb-4">EDUCATION PROGRAM</span>
              <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tight">
                <span className="block mb-6">모든 수준을 아우르는</span>
                <span className="italic text-indigo-200 block leading-[1.4]">미래를 여는 맞춤형 솔루션.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="program-card p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300 flex flex-col h-full rounded-2xl shadow-xl">
                <span className="font-mono text-5xl text-white/20 mb-8 block font-light">01</span>
                <h3 className="font-sans font-bold text-2xl text-white mb-3">AI 리터러시 & 생성형 AI 활용</h3>
                <p className="font-sans text-[17px] text-indigo-300 font-medium mb-6 leading-snug">학생, 교원, 학부모, 공공기관 임직원</p>
                <p className="text-base text-indigo-50/80 font-light leading-relaxed">생성형 AI의 원리 이해부터 프롬프트 엔지니어링, AI 윤리, 업무 자동화까지 현장에서 즉시 활용 가능한 커리큘럼을 제공합니다.</p>
              </div>
              <div className="program-card p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300 flex flex-col h-full rounded-2xl shadow-xl">
                <span className="font-mono text-5xl text-white/20 mb-8 block font-light">02</span>
                <h3 className="font-sans font-bold text-2xl text-white mb-3">공공 및 학교 디지털 전환 (DX)</h3>
                <p className="font-sans text-[17px] text-indigo-300 font-medium mb-6 leading-snug">교육청, 초중고등학교, 대학교, 공공기관</p>
                <p className="text-base text-indigo-50/80 font-light leading-relaxed">구글 인증 전문가 그룹이 참여하여 기관별 최적의 디지털 학습 환경을 구축합니다. 교사 업무 경감과 맞춤형 학습 시스템을 설계합니다.</p>
              </div>
              <div className="program-card p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300 flex flex-col h-full rounded-2xl shadow-xl">
                <span className="font-mono text-5xl text-white/20 mb-8 block font-light">03</span>
                <h3 className="font-sans font-bold text-2xl text-white mb-3">미래 인재 역량 강화 워크숍</h3>
                <p className="font-sans text-[17px] text-indigo-300 font-medium mb-6 leading-snug">초·중·고등학생, 대학생</p>
                <p className="text-base text-indigo-50/80 font-light leading-relaxed">바이브 코딩(Vibe Coding), AI 콘텐츠 제작 등 기술과 창의성이 결합된 프로젝트 중심 학습(PBL)을 통해 미래 필수 역량을 배양합니다.</p>
              </div>
              <div className="program-card p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300 flex flex-col h-full rounded-2xl shadow-xl">
                <span className="font-mono text-5xl text-white/20 mb-8 block font-light">04</span>
                <h3 className="font-sans font-bold text-2xl text-white mb-3">배리어 프리(Barrier-free) AI 교육</h3>
                <p className="font-sans text-[17px] text-indigo-300 font-medium mb-6 leading-snug">특수학급, 특수학교 교사 및 복지 기관</p>
                <p className="text-base text-indigo-50/80 font-light leading-relaxed">신체적·인지적 제약을 보완하는 보조공학적 AI 활용법 교육. 음성 제어, 시각 보조 등을 통해 자립할 수 있는 '디지털 평등'을 실현합니다.</p>
              </div>
              <div className="program-card p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300 flex flex-col h-full rounded-2xl shadow-xl">
                <span className="font-mono text-5xl text-white/20 mb-8 block font-light">05</span>
                <h3 className="font-sans font-bold text-2xl text-white mb-3">디지털 격차 해소 & 리터러시</h3>
                <p className="font-sans text-[17px] text-indigo-300 font-medium mb-6 leading-snug">시니어, 다문화 가정, 저소득층 청소년</p>
                <p className="text-base text-indigo-50/80 font-light leading-relaxed">AI 시대의 속도가 소외의 이유가 되지 않도록, 기초 리터러시부터 실무 기술까지 맞춤형 프로그램을 통해 지역 사회 격차를 해소합니다.</p>
              </div>
              <div className="program-card p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300 flex flex-col h-full rounded-2xl shadow-xl">
                <span className="font-mono text-5xl text-white/20 mb-8 block font-light">06</span>
                <h3 className="font-sans font-bold text-2xl text-white mb-3">기업용 AI 업무 생산성 혁신</h3>
                <p className="font-sans text-[17px] text-indigo-300 font-medium mb-6 leading-snug">기업 임직원, 스타트업, 소상공인</p>
                <p className="text-base text-indigo-50/80 font-light leading-relaxed">실제 산업 현장의 워크플로우를 분석하여 생성형 AI와 구글 워크스페이스를 결합한 전사적 맞춤형 DX 로드맵을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3.8: Media & Key Records */}
        <section className="py-32 px-6 bg-[#f8fafc] relative border-t border-slate-200">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              
              {/* Media Press */}
              <div>
                <div className="flex items-center gap-4 mb-12 justify-center">
                  <div className="w-12 h-px bg-indigo-300"></div>
                  <h2 className="font-serif text-4xl md:text-5xl text-slate-900 italic tracking-tight text-center">
                    Media Press
                  </h2>
                  <div className="w-12 h-px bg-indigo-300"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Media Card 1 */}
                  <div className="group flex flex-col gap-6 p-10 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all duration-400">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">MEDIA TODAY ASIA</span>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-700 transition-colors">파주교육지원청, AI 소통 역량<br/>강화 연수 운영</h4>
                      <p className="text-[15px] text-slate-600 line-clamp-3 leading-relaxed font-light">'2025 파주 通通통통 교육공동체'의 디지털 전환을 위해 FlowDX가 함께했습니다. 미래 교육의 새로운 패러다임을 제시하며 성공적으로 마무리되었습니다.</p>
                    </div>
                  </div>
                  
                  {/* Media Card 2 */}
                  <div className="group flex flex-col gap-6 p-10 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all duration-400">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">J NEWS TIMES</span>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-700 transition-colors">인천교육연수원, 초·중등<br/>교실수업혁명 직무연수 성료</h4>
                      <p className="text-[15px] text-slate-600 line-clamp-3 leading-relaxed font-light">공교육 현장의 근본적 변화를 이끄는 파트너로서, 인천시교육청 교원들의 미래 교육 역량을 한층 끌어올렸다는 평가를 받았습니다.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Infinite Ticker Records */}
        <section className="py-24 border-y border-slate-200 bg-white overflow-hidden flex flex-col justify-center relative">
          {/* Subtle gradient overlay for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="mb-16 px-6 md:px-12 max-w-screen-2xl mx-auto w-full flex flex-col items-center text-center">
            <span className="font-mono text-sm text-indigo-500 uppercase tracking-widest block mb-3">Our Footprints</span>
            <h3 className="font-serif text-4xl text-slate-900 italic">Impact & Records</h3>
          </div>
          
          <div className="relative w-full flex overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
              {[
                { date: "2026. 01", title: "경기도교육연구원", desc: "박사급 연구원 대상 AI 역량 강화 강의", category: "Public & Gov" },
                { date: "2025. 11", title: "인천시교육청 교육연수원", desc: "AI 주도 시대, 구글로 수업하기", category: "Public & Gov" },
                { date: "2025. 10", title: "경기도교육청 율곡연수원", desc: "5급 공무원 정책보고서 작성 AI 강의", category: "Public & Gov" },
                { date: "2025. 02~", title: "대원외고·위례한빛고 등", desc: "특목고 및 일반고 교원연수", category: "Edu & Teachers" },
                { date: "2025. 12~", title: "위례중·명륜여중·송전중 등", desc: "전국 소재 중학교 교원연수", category: "Edu & Teachers" },
                { date: "2025. 06", title: "고려대학교 사업단", desc: "교원연수 강사양성과정 실전 연수 진행", category: "Edu & Teachers" },
                { date: "2025. 01~", title: "한국과학창의재단", desc: "찾아가는 학교 컨설팅", category: "Edu & Teachers" },
                { date: "2025. 06", title: "구글코리아 본사", desc: "제미나이 아카데미(Gemini Academy) 강의", category: "Global & Spec" },
                { date: "2025. 10", title: "파주교육청 관내 초등학교", desc: "AI 시대 우리 아이와 함께 성장하기", category: "Global & Spec" },
                // Duplicate for seamless infinite scroll
                { date: "2026. 01", title: "경기도교육연구원", desc: "박사급 연구원 대상 AI 역량 강화 강의", category: "Public & Gov" },
                { date: "2025. 11", title: "인천시교육청 교육연수원", desc: "AI 주도 시대, 구글로 수업하기", category: "Public & Gov" },
                { date: "2025. 10", title: "경기도교육청 율곡연수원", desc: "5급 공무원 정책보고서 작성 AI 강의", category: "Public & Gov" },
                { date: "2025. 02~", title: "대원외고·위례한빛고 등", desc: "특목고 및 일반고 교원연수", category: "Edu & Teachers" },
                { date: "2025. 12~", title: "위례중·명륜여중·송전중 등", desc: "전국 소재 중학교 교원연수", category: "Edu & Teachers" },
                { date: "2025. 06", title: "고려대학교 사업단", desc: "교원연수 강사양성과정 실전 연수 진행", category: "Edu & Teachers" },
                { date: "2025. 01~", title: "한국과학창의재단", desc: "찾아가는 학교 컨설팅", category: "Edu & Teachers" },
                { date: "2025. 06", title: "구글코리아 본사", desc: "제미나이 아카데미(Gemini Academy) 강의", category: "Global & Spec" },
                { date: "2025. 10", title: "파주교육청 관내 초등학교", desc: "AI 시대 우리 아이와 함께 성장하기", category: "Global & Spec" },
              ].map((record, i) => (
                <div key={i} className="inline-flex flex-col justify-center px-12 py-10 border-y border-r border-slate-100 min-w-[420px] hover:bg-slate-50 transition-colors cursor-default first:border-l group/card">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[11px] font-bold tracking-widest uppercase rounded-full border border-indigo-100">{record.category}</span>
                    <span className="font-mono text-sm text-slate-400 flex items-center gap-2">
                      <Icon icon="solar:calendar-linear" className="text-indigo-300" />
                      {record.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover/card:text-indigo-600 transition-colors">{record.title}</h4>
                  <p className="text-[15px] text-slate-500 font-light truncate">{record.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Section 6: Contact */}
        <section id="contact" className="py-32 px-6 relative border-t border-neutral-200 overflow-hidden">
          {/* Ambient glow to highlight the particles and text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
            <div className="w-full md:w-1/2">
              <div className="mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-ink leading-relaxed mb-6">
                  미래 교육의 흐름,<br /><span className="font-serif font-medium bg-clip-text text-transparent bg-gradient-to-br from-ink via-indigo-900 to-indigo-600">FlowDX</span>와 함께 시작하세요.
                </h2>
                <p className="text-lg text-neutral-500 font-light italic leading-relaxed">
                  디지털 격차 해소를 위한 파트너십, <br />
                  FlowDX가 가장 혁신적인 길을 제안합니다.
                </p>
              </div>

              <div className="space-y-8 border-l pl-8 border-neutral-300">
                <div>
                  <span className="block font-mono text-xs uppercase text-neutral-400 mb-2">Official Email</span>
                  <span className="font-mono text-xl text-ink">ai@flowdx.kr</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase text-neutral-400 mb-2">Our Slogan</span>
                  <p className="text-lg text-neutral-500 font-light italic leading-relaxed">"기술의 소외 없는 흐름을 통해,<br />모두를 위한 디지털 기회를 확장합니다."</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 vellum-glass p-8 md:p-10 rounded-sm border-t-4 border-ink">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-neutral-200 text-center relative z-10 bg-paper">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-col items-center">
          <div className="w-32 h-32 border border-indigo-600/20 rounded-full flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(79,70,229,0.05)] bg-white/5">
            <span className="font-serif text-3xl tracking-[0.05em] bg-clip-text text-transparent bg-gradient-to-br from-ink via-indigo-900 to-indigo-600">
              FlowDX
            </span>
          </div>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-[0.2em] flex items-center gap-2">
            © <span className="font-serif text-sm tracking-normal capitalize bg-clip-text text-transparent bg-gradient-to-br from-ink via-indigo-900 to-indigo-600">FlowDX</span> — NEXT GENERATION AI EDUCATION PARTNER
          </span>
        </div>
      </footer>
    </div>
  );
}

