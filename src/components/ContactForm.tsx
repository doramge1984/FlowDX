import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Icon } from '@iconify/react';

const supabaseUrl = 'https://ytellljvravskfvhvjsx.supabase.co';
const supabaseKey = 'sb_publishable_D3g_11-vwqZXMI8Qz1mzmg_Nj2EWcBs';
const supabase = createClient(supabaseUrl, supabaseKey);

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    category: '🏫 학교·기관 DX 컨설팅 및 연수',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('inquiries')
      .insert([formData]);

    setIsSubmitting(false);

    if (error) {
      console.error('Supabase Error:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } else {
      setIsSuccess(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      contact: '',
      category: '🏫 학교·기관 DX 컨설팅 및 연수',
      message: ''
    });
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <Icon icon="solar:check-circle-bold" className="text-6xl text-green-600 mb-4 mx-auto" />
        <h3 className="font-serif text-3xl mb-3">접수 완료</h3>
        <p className="text-lg text-neutral-500">전문가가 확인 후 빠르게 연락드리겠습니다.</p>
        <button onClick={resetForm} className="mt-8 text-sm font-mono underline opacity-40 hover:opacity-100 transition-opacity">
          새로 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block font-sans text-sm font-semibold tracking-wider text-neutral-500 mb-3">성함 및 직함</label>
          <input 
            type="text" 
            required 
            placeholder="성함 / 직함" 
            className="form-input"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block font-sans text-sm font-semibold tracking-wider text-neutral-500 mb-3">소속 기관</label>
          <input 
            type="text" 
            required 
            placeholder="학교명 또는 기업명" 
            className="form-input"
            value={formData.organization}
            onChange={e => setFormData({...formData, organization: e.target.value})}
          />
        </div>
      </div>
      <div>
        <label className="block font-sans text-sm font-semibold tracking-wider text-neutral-500 mb-3">연락처</label>
        <input 
          type="text" 
          required 
          placeholder="이메일 또는 전화번호" 
          className="form-input"
          value={formData.contact}
          onChange={e => setFormData({...formData, contact: e.target.value})}
        />
      </div>
      <div>
        <label className="block font-sans text-sm font-semibold tracking-wider text-neutral-500 mb-3">문의 카테고리</label>
        <div className="relative">
          <select 
            className="form-input pr-8"
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value})}
          >
            <option>🏫 학교·기관 DX 컨설팅 및 연수</option>
            <option>🤝 사회공헌 및 디지털 격차 해소 프로젝트</option>
            <option>🏢 기업 AI 생산성 혁신 솔루션</option>
            <option>💡 기타 제휴 및 협업 문의</option>
          </select>
          <Icon icon="solar:alt-arrow-down-linear" className="absolute right-0 bottom-4 text-neutral-400 text-xl" />
        </div>
      </div>
      <div>
        <label className="block font-sans text-sm font-semibold tracking-wider text-neutral-500 mb-3">메시지</label>
        <textarea 
          rows={4} 
          required 
          placeholder="문의 내용을 자유롭게 적어주세요" 
          className="form-input resize-none"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-slate-900 text-white py-5 rounded-sm font-sans text-lg font-semibold tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-all group shadow-xl shadow-slate-900/20 disabled:opacity-70"
      >
        {isSubmitting ? (
          <Icon icon="solar:refresh-linear" className="animate-spin text-2xl" />
        ) : (
          <>
            <span>문의 등록하기</span>
            <Icon icon="solar:send-linear" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-2xl" />
          </>
        )}
      </button>
    </form>
  );
}
