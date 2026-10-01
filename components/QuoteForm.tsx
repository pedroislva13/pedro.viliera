'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

// ✏️ PEDRO — opções dos selects. Edite livremente.
const PROJECT_TYPES = ['Branding', 'Social Media', 'Site / Digital', 'Fotografia', 'Vídeo / Motion', 'Outro'];
const BUDGETS = ['Até R$ 1.000', 'R$ 1.000 – R$ 3.000', 'R$ 3.000 – R$ 8.000', 'Acima de R$ 8.000', 'Prefiro conversar'];

// Formulário de orçamento do Contact — layout editorial, uma pergunta grande por vez.
// Envia via Web3Forms (serviço gratuito, sem backend próprio necessário).
// 🔌 PEDRO — veja as instruções no final da resposta para pegar sua ACCESS KEY gratuita.
export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

    // Campos obrigatórios, na ordem em que aparecem no formulário. O `label` é o nome mostrado na mensagem.
   // Campos obrigatórios, na ordem em que aparecem no formulário. O `label` é o nome mostrado na mensagem.
  const REQUIRED = [
    { name: 'name', label: 'Nome' },
    { name: 'email', label: 'E-mail' },
    { name: 'whatsapp', label: 'WhatsApp / Telefone' },
    { name: 'projectType', label: 'Tipo de projeto' },
    { name: 'briefing', label: 'Descrição do projeto' },
  ];
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Retorna só o PRIMEIRO problema encontrado (campo vazio ou e-mail inválido), na ordem do formulário.
  const validate = (data: FormData) => {
    for (const f of REQUIRED) {
      const value = String(data.get(f.name) || '').trim();
      if (!value) return { [f.name]: `Preencha o campo ${f.label} para enviar.` };
      if (f.name === 'email' && !EMAIL_RE.test(value)) return { email: 'E-mail inválido.' };
    }
    return {} as Record<string, string>;
  };

  // Some com o erro assim que o campo for preenchido corretamente.
  const onFieldChange = (ev: React.FormEvent<HTMLFormElement>) => {
    const el = ev.target as HTMLInputElement;
    if (!el.name || !errors[el.name]) return;
    const value = el.value.trim();
    const ok = el.name === 'email' ? EMAIL_RE.test(value) : !!value;
    if (ok) setErrors((prev) => { const next = { ...prev }; delete next[el.name]; return next; });
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
      <div className="qform qform__done" role="status">
        <p className="qform__q">Orçamento enviado.</p>
        <p className="t-subtitle">Retorno em breve pelo e-mail ou WhatsApp informado.</p>
      </div>
    );
  }

  return (
    <form className="qform" onSubmit={onSubmit} noValidate>
      {/* honeypot: campo invisível, só bots preenchem */}
      <input type="text" name="botcheck" className="qform__bot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="qform__field">
        <label className="qform__q" htmlFor="qf-name">COMO VOCÊ SE CHAMA?</label>
        <input id="qf-name" name="name" type="text" autoComplete="name" />
        {errors.name && <span className="qform__err t-micro" role="alert">{errors.name}</span>}
      </div>

      <div className="qform__field">
        <p className="qform__q">COMO POSSO TE CHAMAR?</p>
        <div className="qform__sub">
          <label className="qform__subfield">
            <span className="t-micro">E-MAIL</span>
            <input name="email" type="email" autoComplete="email" />
            {errors.email && <span className="qform__err t-micro" role="alert">{errors.email}</span>}
          </label>
          <label className="qform__subfield">
            <span className="t-micro">WHATSAPP / TELEFONE</span>
            <input name="whatsapp" type="tel" autoComplete="tel" />
            {errors.whatsapp && <span className="qform__err t-micro" role="alert">{errors.whatsapp}</span>}
          </label>
        </div>
      </div>

      <div className="qform__field">
        <label className="qform__q" htmlFor="qf-type">O QUE VOCÊ PRECISA?</label>
        <select id="qf-type" name="projectType" defaultValue="">
          <option value="" disabled>Selecione</option>
          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.projectType && <span className="qform__err t-micro" role="alert">{errors.projectType}</span>}
        <input name="need" type="text" className="qform__secondary" placeholder="Algo mais específico? (opcional)" />
      </div>

      <div className="qform__field">
        <label className="qform__q" htmlFor="qf-briefing">ME CONTE SOBRE O SEU PROJETO.</label>
        <textarea id="qf-briefing" name="briefing" className="qform__briefing" placeholder="Contexto, objetivo, referências — o que for relevante." />
        {errors.briefing && <span className="qform__err t-micro" role="alert">{errors.briefing}</span>}
      </div>

      <div className="qform__field">
        <p className="qform__q">QUANDO VOCÊ PRECISA DISSO?</p>
        <div className="qform__sub">
          <label className="qform__subfield">
            <span className="t-micro">PRAZO</span>
            <input name="deadline" type="text" placeholder="Ex: 30 dias, sem pressa..." />
          </label>
          <label className="qform__subfield">
            <span className="t-micro">FAIXA DE ORÇAMENTO</span>
            <select name="budget" defaultValue="">
              <option value="" disabled>Selecione</option>
              {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </label>
        </div>
      </div>

      <div className="qform__field">
        <label className="qform__q" htmlFor="qf-extra">MAIS ALGUMA COISA QUE EU DEVERIA SABER?</label>
        <textarea id="qf-extra" name="extra" className="qform__textarea-sm" placeholder="Opcional" />
      </div>

      {status === 'error' && (
        <p className="qform__err t-micro" role="alert">Não foi possível enviar agora. Tente de novo ou chame no WhatsApp.</p>
      )}

      <button type="submit" className="qform__submit" disabled={status === 'sending'} data-cursor="view" data-cursor-label="ENVIAR">
        {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR ORÇAMENTO →'}
      </button>
    </form>
  );
}
