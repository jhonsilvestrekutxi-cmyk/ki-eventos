import { WeddingConfig, Guest, ClientWeddingSaaS, SystemAuditLog } from '../types';

export const THEME_PRESETS = [
  {
    id: 'classic-romance',
    name: 'Romance Clássico',
    primaryColor: '#881337', // Rose 900
    secondaryColor: '#fdf2f8', // Rose 50
    accentColor: '#fb7185', // Rose 400
    bgColor: '#fafaf9', // Stone 50
    textColor: '#1c1917', // Stone 900
    fontHeading: 'serif' as const,
    fontBody: 'sans' as const,
    buttonStyle: 'rounded-full' as const,
    glassEffect: true,
    spacing: 'relaxed' as const,
    borderRadius: 'full' as const,
    bgPattern: 'floral',
  },
  {
    id: 'minimal-modern',
    name: 'Mínimo Moderno',
    primaryColor: '#0f172a', // Slate 900
    secondaryColor: '#f8fafc', // Slate 50
    accentColor: '#64748b', // Slate 500
    bgColor: '#ffffff',
    textColor: '#0f172a',
    fontHeading: 'display' as const,
    fontBody: 'sans' as const,
    buttonStyle: 'rounded-none' as const,
    glassEffect: false,
    spacing: 'compact' as const,
    borderRadius: 'none' as const,
    bgPattern: 'minimal',
  },
  {
    id: 'gold-luxury',
    name: 'Ouro Luxuoso',
    primaryColor: '#78350f', // Amber 900
    secondaryColor: '#fffbeb', // Amber 50
    accentColor: '#d97706', // Amber 600
    bgColor: '#fffcf5',
    textColor: '#292524',
    fontHeading: 'serif' as const,
    fontBody: 'serif' as const,
    buttonStyle: 'rounded-md' as const,
    glassEffect: true,
    spacing: 'spacious' as const,
    borderRadius: 'lg' as const,
    bgPattern: 'ornate',
  },
  {
    id: 'forest-boho',
    name: 'Boho Floresta',
    primaryColor: '#14532d', // Green 950
    secondaryColor: '#f0fdf4', // Green 50
    accentColor: '#16a34a', // Green 600
    bgColor: '#fafaf9',
    textColor: '#1c1917',
    fontHeading: 'serif' as const,
    fontBody: 'sans' as const,
    buttonStyle: 'rounded-full' as const,
    glassEffect: true,
    spacing: 'relaxed' as const,
    borderRadius: 'lg' as const,
    bgPattern: 'botanical',
  }
];

export const INITIAL_WEDDING_CONFIG: WeddingConfig = {
  id: 'w_gabriel_sofia',
  slug: 'gabriel-sofia',
  clientId: 'client_1',
  brideGroom: {
    groomName: 'Gabriel',
    groomFullName: 'Gabriel Pureza dos Santos',
    groomBio: 'Engenheiro apaixonado pelo mar de Luanda, pela música clássica e por construir uma vida repleta de cumplicidade, honra e amor ao lado da Sofia.',
    groomParents: 'Sr. Manuel dos Santos & Sra. Rosa Pureza dos Santos',
    groomPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    brideName: 'Sofia',
    brideFullName: 'Sofia Kiala de Oliveira',
    brideBio: 'Arquiteta de interiores com profunda paixão pela arte, gastronomia contemporânea e design. Radiante em consagrar esta união sagrada ao lado do Gabriel.',
    brideParents: 'Sr. Alberto de Oliveira & Sra. Teresa Kiala de Oliveira',
    bridePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    couplePhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
  },
  date: '2026-09-19T16:00:00',
  storyTitle: 'Nossa História de Amor',
  storyContent: 'Nos conhecemos num fim de tarde inesquecível na Baía de Luanda. O Gabriel admirava o pôr do sol após um dia de trabalho, enquanto a Sofia registrava esboços urbanos no seu caderno de arquitetura. Um tropeço acidental, um café na Ilha de Luanda e incontáveis conversas sobre sonhos, família e raízes... Três anos de cumplicidade nos levaram a um entardecer mágico no Mussulo, onde o Gabriel fez o pedido sob as estrelas de Angola.',
  timeline: [
    {
      id: 't1',
      time: '16:00',
      title: 'A Cerimônia Religiosa',
      description: 'Troca de votos solenes e bênção matrimonial nos jardins ao entardecer. Traje Esporte Fino.',
      icon: 'Heart',
    },
    {
      id: 't2',
      time: '17:15',
      title: 'Coquetel de Boas-Vindas & Jazz',
      description: 'Canapés angolanos, espumante refrescante e sessão de fotos dos noivos sob o pôr do sol de Luanda.',
      icon: 'GlassWater',
    },
    {
      id: 't3',
      time: '18:45',
      title: 'Banquete Nupcial & Brindes',
      description: 'Jantar gastronômico no Salão Nobre com sabores tradicionais e contemporâneos de Angola e vinhos selecionados.',
      icon: 'Utensils',
    },
    {
      id: 't4',
      time: '21:30',
      title: 'Corte do Bolo & Abertura da Pista',
      description: 'Primeira dança dos noivos e início da festa com Kizomba, Semba clássico e hits internacionais.',
      icon: 'Music',
    },
    {
      id: 't5',
      time: '23:45',
      title: 'After-Party & Caldo da Meia-Noite',
      description: 'Lounge privativo com DJ, petiscos e muita celebração até o amanhecer.',
      icon: 'Sparkles',
    }
  ],
  venue: {
    ceremonyName: 'Espaço Jardins da Welwitschia — Talatona',
    ceremonyAddress: 'Via AL 15, Condomínio Welwitschia, Talatona, Luanda, Angola',
    ceremonyTime: '19 de Setembro de 2026, às 16:00',
    ceremonyMapsUrl: 'https://maps.google.com/?q=Talatona+Luanda+Angola',
    ceremonyWazeUrl: 'https://waze.com/ul?q=Talatona+Luanda+Angola',
    receptionName: 'Salão Nobre Luanda Prestige',
    receptionAddress: 'Via AL 15, Condomínio Welwitschia, Talatona, Luanda, Angola',
    receptionTime: '19 de Setembro de 2026, às 17:15',
    receptionMapsUrl: 'https://maps.google.com/?q=Talatona+Luanda+Angola',
    receptionWazeUrl: 'https://waze.com/ul?q=Talatona+Luanda+Angola',
    afterPartyName: 'Sunset Lounge Ilha & Talatona',
    afterPartyAddress: 'Subsolo VIP Welwitschia, Talatona, Luanda',
    afterPartyTime: '23:45 - Até o amanhecer'
  },
  dressCode: {
    title: 'Tons Terrosos Nobres & Esporte Fino Elegante',
    description: 'Convidamos carinhosamente os nossos convidados a vestirem trajes de estilo esporte fino ou formal dentro da nossa paleta de cores. Tecidos nobres e vestidos longos ou midi são ideais. Recomendamos calçados confortáveis para aproveitar os jardins e a pista de dança.',
    colorPalette: ['#5C4033', '#C19A6B', '#E5A93B', '#8F9779', '#D2B48C', '#F5F5DC'],
  },
  entourage: {
    bridesmaids: ['Dra. Isabella Kiala (Madrinha de Honra)', 'Cláudia dos Santos', 'Mariana de Oliveira', 'Neuza Panzo'],
    groomsmen: ['Eng. Lucas Vance Pureza (Padrinho de Honra)', 'Arthur Jenkins dos Santos', 'Marcos Avery Kiala', 'Daniel Muanza']
  },
  faq: [
    {
      id: 'f1',
      question: 'Qual é a data limite para confirmar presença (RSVP)?',
      answer: 'Por favor, confirme a sua presença até ao dia 10 de Agosto de 2026 pelo site para podermos finalizar os preparativos de buffet e assentos com o nosso espaço.'
    },
    {
      id: 'f2',
      question: 'Existe estacionamento seguro no local?',
      answer: 'Sim, haverá serviço gratuito de manobrista (valet parking) e segurança privada reforçada na entrada principal do Espaço Welwitschia em Talatona.'
    },
    {
      id: 'f3',
      question: 'Como funciona o acesso de convidados na portaria?',
      answer: 'Ao confirmar a presença no site, você terá acesso ao seu Passe Digital VIP com QR Code. Basta apresentá-lo na tela do telemóvel na portaria para entrada rápida sem filas.'
    },
    {
      id: 'f4',
      question: 'Posso levar acompanhantes adicionais?',
      answer: 'Devido à capacidade do espaço, o convite é nominal e abrange o número exato de assentos reservados que aparece no seu bilhete digital.'
    }
  ],
  giftRegistry: {
    pixKey: '+244 923 456 789',
    pixQrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AO06000600420001947200901',
    bankName: 'BFA — Banco de Fomento Angola',
    bankAgency: 'Agência Talatona (0042)',
    bankAccount: '194720090',
    iban: 'AO06 0006 0042 0001 9472 0090 1',
    multicaixaPhone: '+244 923 456 789',
    bankRecipient: 'Gabriel P. dos Santos & Sofia K. de Oliveira',
    customInstructions: 'As contribuições podem ser efetuadas diretamente via Multicaixa Express (MCX) ou transferência por IBAN bancário angolano. Agradecemos imensamente o carinho!',
    registryItems: [
      { 
        id: 'g1', 
        name: 'Batedeira Planetária KitchenAid Artisan', 
        price: 250000, 
        category: 'eletro',
        description: 'Perfeita para preparar doces e massas especiais para receber os amigos no novo lar.',
        imageUrl: 'https://images.unsplash.com/photo-1594385208974-2e75f9d8a8be?auto=format&fit=crop&q=80&w=400' 
      },
      { 
        id: 'g2', 
        name: 'Aparelho de Jantar Porcelana Fina (12 Lugares)', 
        price: 380000, 
        category: 'cozinha',
        description: 'Conjunto completo com pratos rasos, fundos, sobremesa e xícaras para grandes jantares de família.',
        imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=400' 
      },
      { 
        id: 'g3', 
        name: 'Máquina de Café Espresso DeLonghi Magnifica', 
        price: 490000, 
        category: 'eletro',
        description: 'Para as manhãs cheias de energia e aroma dos noivos!',
        imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400', 
        claimedBy: 'Tia Eleonora',
        claimedDate: '2026-06-12',
        guestMessage: 'Desejo a vocês um casamento repleto de momentos doces e muito amor! Com todo o carinho da Tia Eleonora.'
      },
      { 
        id: 'g4', 
        name: 'Cota de Lua de Mel: Passeio de Barco Privativo no Mussulo', 
        price: 85000, 
        totalCollected: 45000,
        category: 'lua_de_mel',
        description: 'Cota para um passeio romântico privativo de lancha pela costa paradisíaca do Mussulo.',
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400',
        contributors: [
          {
            id: 'c1',
            name: 'Madrinha Isabella',
            amount: 25000,
            date: '14/06/2026',
            avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
            message: 'Que esse passeio no Mussulo seja inesquecível para vocês! Amamos muito os dois!'
          },
          {
            id: 'c2',
            name: 'Lucas & Patrícia Vance',
            amount: 20000,
            date: '16/06/2026',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
            message: 'Com carinho dos padrinhos! Aproveitem cada minuto desse amor.'
          }
        ]
      },
      { 
        id: 'g5', 
        name: 'Cota de Lua de Mel: Jantar Romântico à Beira-Mar', 
        price: 75000, 
        totalCollected: 50000,
        category: 'lua_de_mel',
        description: 'Jantar à luz de velas a dois com degustação gastronômica no litoral de Luanda.',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400',
        contributors: [
          {
            id: 'c3',
            name: 'Família Mendonça',
            amount: 50000,
            date: '18/06/2026',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
            message: 'Que a mesa de vocês seja sempre farta de amor e companheirismo!'
          }
        ]
      },
      { 
        id: 'g6', 
        name: 'Smart TV 65" 4K OLED para Sala de Estar', 
        price: 680000, 
        category: 'sala_quarto',
        description: 'Para as noites de cinema e séries juntinhos no sofá.',
        imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400' 
      },
      { 
        id: 'g7', 
        name: 'Jogo de Panelas Antiaderente Cerâmica Le Creuset', 
        price: 310000, 
        category: 'cozinha',
        description: 'Conjunto durável com caçarolas e frigideiras de alta performance.',
        imageUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=400' 
      },
      { 
        id: 'g8', 
        name: 'Jogo de Lençóis 1000 Fios Algodão Egípcio King', 
        price: 195000, 
        category: 'sala_quarto',
        description: 'Conforto e maciez extrema para a suíte do novo lar.',
        imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400' 
      },
      { 
        id: 'g9', 
        name: 'Dia de Spa Completo para os Noivos (Massagem Dupla)', 
        price: 140000, 
        category: 'experiencias',
        description: 'Momento de relaxamento e equilíbrio pós-casamento no Epic Sana Spa.',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400' 
      }
    ]
  },
  media: {
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600',
    storyImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    photos: [
      'https://images.unsplash.com/photo-1519225495810-7517ccd358ee?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1482618722475-5531547346c7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1520854221256-17451cc359df?auto=format&fit=crop&q=80&w=600',
    ]
  },
  accomTrans: {
    accommodationNotes: 'Para os convidados e familiares que chegam de outras províncias (Benguela, Huíla, Cabinda) ou do exterior, negociamos tarifas exclusivas nos hotéis parceiros em Talatona. Mencione o código "KUTXI GABRIEL & SOFIA".',
    transportNotes: 'Disponibilizaremos serviço de transfer privativo em vans executivas saindo dos hotéis recomendados às 15:15 com destino ao Espaço Welwitschia, com retorno contínuo das 22:30 até às 04:00.',
    recommendedHotels: [
      { name: 'Hotel Talatona Convention (HCTA)', stars: 5, phone: '+244 226 424 000', link: 'https://hcta.co.ao' },
      { name: 'Hotel Epic Sana Luanda', stars: 5, phone: '+244 222 642 600', link: 'https://epicsana.com' },
      { name: 'Palmeiras Suite Hotel Talatona', stars: 4, phone: '+244 226 420 800', link: 'https://palmeiras.co.ao' }
    ]
  },
  spotifyPlaylistUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX50mN7fI63vX',
  youtubeVideoId: 'EngW7tLk6f0',
  theme: THEME_PRESETS[0],
  customFooter: 'Com amor, sempre. — Gabriel & Sofia',
  contactInfo: {
    phone: '+244 923 456 789',
    email: 'casamento@gabrielesofia.ao',
  },
  isActive: true,
  todoList: [
    { id: 'td1', label: 'Definição de Local & Data em Talatona', completed: true, urgency: 'alta' },
    { id: 'td2', label: 'Customização de Layout & Fotos dos Noivos', completed: true, urgency: 'media' },
    { id: 'td3', label: 'Habilitação da Lista de Presentes Multicaixa Express', completed: true, urgency: 'alta' },
    { id: 'td4', label: 'Envio de Convites Digitais Individuais com QR Code', completed: false, urgency: 'alta' },
    { id: 'td5', label: 'Credenciamento da Equipe de Portaria Digital', completed: false, urgency: 'media' },
  ],
};

export const INITIAL_GUESTS: Guest[] = [
  {
    id: 'g_1',
    name: 'Eleanor Montgomery',
    email: 'eleanor@example.com',
    phone: '+244 923 111 222',
    group: 'Family',
    tableNumber: 'Mesa 1 (Honra)',
    maxPlusOnes: 1,
    plusOnesConfirmed: 0,
    status: 'Pending',
    dietaryRequirements: 'Vegetariana',
    rsvpToken: 'eleanor-m-tahoe',
    invitationViews: 2,
    checkedIn: false,
    notes: 'Irmã da noiva'
  },
  {
    id: 'g_2',
    name: 'Marcos Avery',
    email: 'marcos.avery@example.com',
    phone: '+244 924 333 444',
    group: 'Friends',
    tableNumber: 'Mesa 3',
    maxPlusOnes: 2,
    plusOnesConfirmed: 1,
    status: 'Confirmed',
    dietaryRequirements: '',
    rsvpToken: 'marcos-avery-vows',
    invitationViews: 3,
    checkedIn: false,
    notes: 'Padrinho do noivo'
  },
  {
    id: 'g_3',
    name: 'Madrinha Isabella',
    email: 'isabella.m@example.com',
    phone: '+244 925 555 666',
    group: 'Bride Side',
    tableNumber: 'Mesa 1 (Honra)',
    maxPlusOnes: 1,
    plusOnesConfirmed: 1,
    status: 'Confirmed',
    dietaryRequirements: 'Sem lactose',
    rsvpToken: 'isabella-madrinha',
    invitationViews: 4,
    checkedIn: false,
    notes: 'Madrinha de honra'
  },
  {
    id: 'g_4',
    name: 'Lucas Vance',
    email: 'lucas.vance@example.com',
    phone: '+244 926 777 888',
    group: 'Family',
    tableNumber: 'Mesa 2',
    maxPlusOnes: 1,
    plusOnesConfirmed: 0,
    status: 'Pending',
    dietaryRequirements: '',
    rsvpToken: 'lucas-vance',
    invitationViews: 1,
    checkedIn: false,
    notes: 'Irmão do noivo'
  },
  {
    id: 'g_5',
    name: 'Pedro Pureza',
    email: 'pedro.pureza@example.com',
    phone: '+244 928 817 000',
    group: 'Friends',
    tableNumber: 'Mesa 4',
    maxPlusOnes: 1,
    plusOnesConfirmed: 0,
    status: 'Pending',
    dietaryRequirements: '',
    rsvpToken: 'pedro-pureza-8170',
    invitationViews: 0,
    checkedIn: false,
    notes: 'Amigo convidado'
  }
];

export const INITIAL_CLIENTS: ClientWeddingSaaS[] = [
  {
    id: 'client_1',
    clientName: 'Gabriel & Sofia',
    clientEmail: 'gabriel.sofia@kieventos.ao',
    weddingDate: '2026-09-19',
    plan: 'Luxury',
    status: 'Active',
    guestCount: 5,
    rsvpsReceived: 2,
    revenue: 499,
    createdAt: '2026-01-15',
    config: INITIAL_WEDDING_CONFIG
  }
];

export const INITIAL_AUDIT_LOGS: SystemAuditLog[] = [
  {
    id: 'l_1',
    timestamp: '2026-06-27T10:45:12Z',
    actor: 'Super Administrador',
    action: 'Template Criado',
    details: 'Novo tema de convite "Boho Floresta" compilado e ativo na plataforma.',
    ip: '192.168.1.1'
  },
  {
    id: 'l_2',
    timestamp: '2026-06-27T09:12:45Z',
    actor: 'Sofia Montgomery',
    action: 'Site Atualizado',
    details: 'Informações de PIX e conta bancária para lista de presentes alteradas.',
    ip: '172.56.21.90'
  },
  {
    id: 'l_3',
    timestamp: '2026-06-26T21:11:03Z',
    actor: 'Webhook do Stripe',
    action: 'Assinatura Renovada',
    details: 'Ciclo de cobrança processado para plano "Luxo" do cliente_1 ($499.00).',
    ip: '3.18.12.110'
  },
  {
    id: 'l_4',
    timestamp: '2026-06-26T18:05:33Z',
    actor: 'Marcos Avery (Convidado)',
    action: 'RSVP Confirmado',
    details: 'Token de convidado marcus-avery-vows submeteu confirmação de presença com 0 acompanhantes.',
    ip: '107.4.212.8'
  }
];
