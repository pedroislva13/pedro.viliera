'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

// ✏️ PEDRO — opções dos selects. Edite livremente.
const PROJECT_TYPES = ['Branding', 'Social Media', 'Site / Digital', 'Fotografia', 'Vídeo / Motion', 'Outro'];
const BUDGETS = ['Até R$ 1.000', 'R$ 1.000 – R$ 3.000', 'R$ 3.000 – R$ 8.000', 'Acima de R$ 8.000', 'Prefiro conversar'];

// Formulário de orçamento do Contact. Envia via Web3Forms (serviço gratuito, sem backend próprio necessário).
// 🔌 PEDRO — veja as instruções no final da resposta para pegar sua ACCESS KEY gratuita.
export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    if (!String(data.get('name') || '').trim()) e.name = 'Preencha seu nome.';
    const email = String(data.get('email') || '').trim();
    if (!email) e.email = 'Preencha seu e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'E-mail inválido.';
    if (!String(data.get('whatsapp') || '').trim()) e.whatsapp = 'Preencha um telefone ou WhatsApp.';
    if (!String(data.get('projectType') || '').trim()) e.projectType = 'Selecione o tipo de projeto.';
    if (!String(data.get('briefing') || '').trim()) e.briefing = 'Conte um pouco sobre o projeto.';
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (status === 'sending' || status === 'success') return; // evita reenvio duplicado
    const data = new FormData(ev.currentTarget);
    if (String(data.get('botcheck') || '')) return; // honeypot anti-spam — não é um campo real
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus('sending');
    try {
      data.append('access_key', siteConfig.web3formsKey);
      data.append('subject', `Novo orçamento pelo site — ${data.get('name')}`);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      setStatus(json.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="qf qf__done" role="status">
        <p className="t-subtitle">Orçamento enviado.</p>
        <p className="t-micro">Retorno em breve pelo e-mail ou WhatsApp informado.</p>
      </div>
    );
  }

  return (
    <form className="qf" onSubmit={onSubmit} noValidate>
      {/* honeypot: campo invisível, só bots preenchem */}
      <input type="text" name="botcheck" className="qf__bot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="qf__row">
        <label className="qf__field">
          <span className="t-micro">NOME</span>
          <input name="name" type="text" autoComplete="name" />
          {errors.name && <span className="qf__err t-micro" role="alert">{errors.name}</span>}
        </label>
        <label className="qf__field">
          <span className="t-micro">E-MAIL</span>
          <input name="email" type="email" autoComplete="email" />
          {errors.email && <span className="qf__err t-micro" role="alert">{errors.email}</span>}
        </label>
      </div>

      <div className="qf__row">
        <label className="qf__field">
          <span className="t-micro">WHATSAPP / TELEFONE</span>
          <input name="whatsapp" type="tel" autoComplete="tel" />
          {errors.whatsapp && <span className="qf__err t-micro" role="alert">{errors.whatsapp}</span>}
        </label>
        <label className="qf__field">
          <span className="t-micro">TIPO DE PROJETO</span>
          <select name="projectType" defaultValue="">
            <option value="" disabled>Selecione</option>
            {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.projectType && <span className="qf__err t-micro" role="alert">{errors.projectType}</span>}
        </label>
      </div>

      <label className="qf__field">
        <span className="t-micro">O QUE VOCÊ PRECISA</span>
        <input name="need" type="text" placeholder="Ex: identidade visual completa, conteúdo mensal..." />
      </label>

      <label className="qf__field">
        <span className="t-micro">DESCRIÇÃO DO PROJETO</span>
        <textarea name="briefing" rows={4} placeholder="Conte um pouco sobre o contexto, objetivo e referências." />
        {errors.briefing && <span className="qf__err t-micro" role="alert">{errors.briefing}</span>}
      </label>

      <div className="qf__row">
        <label className="qf__field">
          <span className="t-micro">PRAZO DESEJADO</span>
          <input name="deadline" type="text" placeholder="Ex: 30 dias, sem pressa..." />
        </label>
        <label className="qf__field">
          <span className="t-micro">FAIXA DE ORÇAMENTO</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>Selecione</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>
      </div>

      <label className="qf__field">
        <span className="t-micro">INFORMAÇÕES ADICIONAIS</span>
        <textarea name="extra" rows={3} placeholder="Opcional" />
      </label>

      {status === 'error' && (
        <p className="qf__err t-micro" role="alert">Não foi possível enviar agora. Tente de novo ou chame no WhatsApp.</p>
      )}

      <button type="submit" className="qf__submit t-micro" disabled={status === 'sending'}>
        {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR ORÇAMENTO →'}
      </button>
    </form>
  );
}
