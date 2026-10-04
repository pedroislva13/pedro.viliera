export { AnimatedTitle as ContactHeroTitle } from './AnimatedTitle';
}
// O Contact é a referência original dessa animação. A lógica inteira agora vive em AnimatedTitle.tsx
// (para poder ser reutilizada na Home e no About também), e este arquivo só reexporta o mesmo
// componente com o nome antigo — o comportamento do Contact continua EXATAMENTE o mesmo de antes.
