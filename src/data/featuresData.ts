export interface FeatureItem {
  id: string;
  badge: string;
  badgeVariant?: 'accent' | 'neutral' | 'rose';
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  benefits: string[];
}

export const CAMPOS_EXPERIENCIA_BNCC = [
  {
    codigo: 'EO',
    nome: 'O eu, o outro e o nós',
    descricao: 'Foca no desenvolvimento da identidade e relações sociais das crianças.',
    icone: 'Users',
  },
  {
    codigo: 'CG',
    nome: 'Corpo, gestos e movimentos',
    descricao: 'Explora a expressão corporal, sensorial e motora das crianças.',
    icone: 'Activity',
  },
  {
    codigo: 'TS',
    nome: 'Traços, sons, cores e formas',
    descricao: 'Promove o contato com diferentes manifestações artísticas e culturais.',
    icone: 'Palette',
  },
  {
    codigo: 'EF',
    nome: 'Escuta, fala, pensamento e imaginação',
    descricao: 'Desenvolve a linguagem oral e introduz o universo da escrita.',
    icone: 'MessageSquare',
  },
  {
    codigo: 'ET',
    nome: 'Espaços, tempos, quantidades, relações e transformações',
    descricao: 'Estimula a curiosidade sobre o mundo físico e natural.',
    icone: 'Compass',
  },
];

export const SHOWCASE_PERFIS = [
  {
    id: 'diretor',
    label: 'Direção & Gestão',
    roleName: 'ADMINISTRADOR ESCOLAR',
    tagline: 'Controle estratégico, conformidade jurídica e saúde financeira da escola em um só painel.',
    metrics: [
      { label: 'Lucratividade Real', value: 'Por Turma' },
      { label: 'Contratos & Aditivos', value: '100% Digitais' },
      { label: 'Segurança Jurídica', value: 'Logs com Hash' },
    ],
    highlights: [
      'Balanço mensal com fechamento auditável (Snapshot financeiro)',
      'Gestão de modelos de contrato, matrículas e termos aditivos em 1 clique',
      'Livro de ocorrências formal com notificação e ciência dos responsáveis',
      'Visão 360° de turmas, inadimplência e desempenho de professores',
    ],
  },
  {
    id: 'professor',
    label: 'Corpo Docente',
    roleName: 'PROFESSORES & COORDENADORES',
    tagline: 'Menos burocracia, mais tempo para educar: planejamento e pareceres BNCC com IA.',
    metrics: [
      { label: 'Economia em Pareceres', value: '15h+ / semestre' },
      { label: 'Planejamento BNCC', value: 'Sugestões IA' },
      { label: 'Diário de Rotina', value: '4x mais rápido' },
    ],
    highlights: [
      'Assistente de IA para sugerir atividades lúdicas alinhadas aos objetivos da BNCC',
      'Elaboração de Parecer Descritivo nos 5 Campos de Experiência + Síntese com apoio de IA',
      'Chamada digital e diário de rotina (alimentação, sono, fraldas e disposição)',
      'Importação de planejamentos diretamente para as atividades diárias',
    ],
  },
  {
    id: 'responsaveis',
    label: 'Famílias & Pais',
    roleName: 'PAIS & RESPONSÁVEIS',
    tagline: 'Acompanhamento em tempo real, transparência e proximidade com o dia a dia do filho.',
    metrics: [
      { label: 'Assinatura Digital', value: 'Sem Fila/Papel' },
      { label: 'Pareceres Escolares', value: 'Acesso Oficial' },
      { label: 'Notificações', value: 'Instantâneas' },
    ],
    highlights: [
      'Linha do tempo diária com registros de rotina, fotos e avisos',
      'Visualização e ciência formal dos pareceres pedagógicos semestrais',
      'Assinatura de contratos e termos de matrícula direto pelo celular',
      'Canal oficial e protegido, sem exposição de números em grupos de WhatsApp',
    ],
  },
];

export const COMPARATIVO_ITEMS = [
  {
    criterio: 'Elaboração de Pareceres Semestrais',
    whatsapp: 'Inexistente ou textos avulsos sem estrutura formal',
    manual: 'Semanas de digitação manual repetitiva em Word/papel',
    elo: 'IA especializada nos 5 Campos da BNCC + PDF timbrado com hash e ciência dos pais',
  },
  {
    criterio: 'Planejamento de Atividades BNCC',
    whatsapp: 'Não integrado; planejamento fica solto',
    manual: 'Busca manual em livros e anotações impressas',
    elo: 'Sugestões instantâneas de atividades com IA alinhadas por idade e código BNCC',
  },
  {
    criterio: 'Contratos de Matrícula & Aditivos',
    whatsapp: 'Inseguro, sem validade formal de assinatura',
    manual: 'Papéis impressos, perda de vias e filas na secretaria',
    elo: 'Assinaturas digitais/físicas rastreáveis com termos aditivos imediatos',
  },
  {
    criterio: 'Registro de Ocorrências & Incidentes',
    whatsapp: 'Mensagens que se perdem ou geram conflitos em grupos',
    manual: 'Livro de ata físico suscetível a rasuras e extravio',
    elo: 'Registro formal com hash criptográfico, recibo de leitura e aviso via WhatsApp',
  },
  {
    criterio: 'Análise de Lucratividade por Sala',
    whatsapp: 'Inviável',
    manual: 'Planilhas confusas sem rateio real de custos fixos',
    elo: 'Lucro real por turma (Berçário, Maternal, Pré) com Snapshot mensal fechado',
  },
  {
    criterio: 'Privacidade e LGPD',
    whatsapp: 'Risco alto: telefones de pais e professores expostos',
    manual: 'Documentos físicos expostos a qualquer pessoa',
    elo: 'Multi-tenant 100% isolado por escola e acessos restritos por perfil',
  },
];
