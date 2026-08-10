import { Product } from '../types';

export const ICEA_PRODUCTS: Product[] = [
  // --- LIFE ASSURANCE & PROTECTION ---
  {
    id: 'endowment-policy',
    title: 'ICEA LION Endowment Policy',
    category: 'life',
    shortDesc: 'Guaranteed lump sum savings combined with financial protection for your family.',
    fullDesc: 'The ICEA LION Endowment Policy is a dual-benefit financial solution that offers both guaranteed savings for long-term goals and full life assurance cover. Should you survive the policy maturity term, you receive the full sum assured plus accumulated bonuses. In case of untimely demise during the term, the full sum assured is immediately paid to designated beneficiaries.',
    keyBenefits: [
      'Guaranteed maturity payout plus attractive compounded bonuses',
      'Full life cover from day one of policy activation',
      'Tax relief benefits: Claim 15% tax relief on premiums (up to KES 60,000 p.a.)',
      'Flexible policy terms ranging from 10 to 25 years',
      'Optional critical illness and disability cover riders'
    ],
    targetAudience: 'Individuals and family breadwinners seeking structured savings with life protection.',
    policyPeriod: '10 to 25 Years',
    minInvestment: 'From KES 3,000 / month',
    iconName: 'ShieldCheck',
    badge: 'Popular',
    whatsappMessage: 'Hi Chrispus, I would like to inquire about the ICEA LION Endowment Policy.'
  },
  {
    id: 'term-assurance',
    title: 'ICEA LION Term Assurance Plan',
    category: 'life',
    shortDesc: 'Maximum pure financial protection for your family at highly affordable monthly premiums.',
    fullDesc: 'ICEA LION Term Assurance provides high sum assured protection for a specified period (e.g., 5, 10, 15, or 20 years). It ensures that your family remains financially secure, debts/mortgages are covered, and living standards are maintained in the event of your passing.',
    keyBenefits: [
      'High cover amounts at low, budget-friendly premiums',
      'Ideal for loan and mortgage protection requirement',
      'Optional accidental death and permanent disability riders',
      'Tax relief benefits applicable on premiums paid'
    ],
    targetAudience: 'Homeowners with mortgages, young parents, and business leaders with financial liabilities.',
    policyPeriod: '5 to 30 Years',
    minInvestment: 'From KES 2,000 / month',
    iconName: 'HeartHandshake',
    whatsappMessage: 'Hi Chrispus, I would like to get a quote for ICEA LION Term Assurance.'
  },
  {
    id: 'whole-life-plan',
    title: 'ICEA LION Whole Life Cover',
    category: 'life',
    shortDesc: 'Lifetime financial protection and legacy creation for generations to come.',
    fullDesc: 'Whole Life Policy provides permanent protection throughout your lifetime. It guarantees a death benefit to your beneficiaries whenever death occurs and builds cash value over time that can be borrowed against.',
    keyBenefits: [
      'Lifetime cover protection regardless of age',
      'Accumulates cash value with annual declared bonuses',
      'Policy loan facility available after 3 years',
      'Creates a lasting generational wealth transfer'
    ],
    targetAudience: 'High net worth individuals, estate planners, and family heads seeking generational legacy.',
    policyPeriod: 'Lifetime Cover',
    minInvestment: 'From KES 5,000 / month',
    iconName: 'Award',
    whatsappMessage: 'Hi Chrispus, I am interested in ICEA LION Whole Life Cover for legacy planning.'
  },
  {
    id: 'family-protection-plan',
    title: 'ICEA LION Family Income Shield',
    category: 'life',
    shortDesc: 'Provides steady monthly income payouts to your dependents if the main breadwinner passes.',
    fullDesc: 'Unlike traditional lump-sum policies, the Family Income Shield guarantees a continuous monthly income flow to your spouse and children to cover day-to-day living costs, rent, and utility bills.',
    keyBenefits: [
      'Replaces lost monthly salary for dependent family members',
      'Protects against sudden financial hardship and inflation',
      'Hassle-free, quick claims settlement process'
    ],
    targetAudience: 'Salaried employees and self-employed parents who are the sole financial providers.',
    policyPeriod: '5 to 20 Years',
    minInvestment: 'From KES 2,500 / month',
    iconName: 'Users',
    whatsappMessage: 'Hi Chrispus, please tell me more about the Family Income Shield plan.'
  },

  // --- PENSIONS & RETIREMENT ---
  {
    id: 'individual-pension-scheme',
    title: 'ICEA LION Individual Pension Scheme (IPS)',
    category: 'pension',
    shortDesc: 'Tax-exempt personal retirement savings plan designed to secure your golden years.',
    fullDesc: 'The ICEA LION Individual Pension Scheme (IPS) allows employed, self-employed, and informal sector workers to build a dedicated retirement nest egg. Your contributions grow with compound interest in a registered, secure fund approved by the Retirement Benefits Authority (RBA).',
    keyBenefits: [
      'Tax Relief: Deduct up to KES 20,000 per month (KES 240,000 per year) from taxable income',
      'Tax-free interest accumulation during the saving period',
      'Flexible contributions: Pay monthly, quarterly, or via lump sums',
      'Transferrable and portable if you change employers',
      '1/3 tax-free lump sum withdrawal at retirement age'
    ],
    targetAudience: 'Employed individuals, freelancers, entrepreneurs, and consultants planning for retirement.',
    policyPeriod: 'Until Retirement Age (50 - 65 yrs)',
    minInvestment: 'From KES 1,000 / month',
    iconName: 'PiggyBank',
    badge: 'Tax Saver',
    whatsappMessage: 'Hi Chrispus, I want to start an ICEA LION Individual Pension Scheme.'
  },
  {
    id: 'income-drawdown-annuity',
    title: 'ICEA LION Income Drawdown & Annuity',
    category: 'pension',
    shortDesc: 'Convert your accumulated retirement savings into a predictable regular income stream.',
    fullDesc: 'Upon reaching retirement, ICEA LION provides Income Drawdown and Guaranteed Annuities to ensure you never run out of money during your golden years. Receive regular monthly income while your balance continues to earn market returns.',
    keyBenefits: [
      'Guaranteed monthly income for life (Annuity) or flexible drawdowns',
      'Capital preservation with potential for capital growth',
      'Protection against longevity risk in retirement'
    ],
    targetAudience: 'Retirees or individuals approaching retirement age with accumulated pension funds.',
    policyPeriod: 'Retirement Phase',
    minInvestment: 'Minimum lump sum transfer',
    iconName: 'TrendingUp',
    whatsappMessage: 'Hi Chrispus, I need advice on ICEA LION Income Drawdown and Annuities.'
  },

  // --- INVESTMENTS & WEALTH MANAGEMENT ---
  {
    id: 'money-market-fund',
    title: 'ICEA LION Money Market Fund (MMF)',
    category: 'investments',
    shortDesc: 'High liquidity, daily compounding returns, and low-risk capital preservation.',
    fullDesc: 'The ICEA LION Money Market Fund is one of Kenya’s leading unit trust funds, investing in high-yielding short-term bank deposits, Treasury Bills, and commercial papers. It offers competitive daily compounding returns while allowing you to withdraw funds on short notice without penalty.',
    keyBenefits: [
      'Competitive daily interest accrual with monthly reinvestment',
      'High liquidity: Access your funds within 24-48 business hours',
      'Capital preservation with low-risk government and top-tier bank backing',
      'Easy top-ups via M-PESA, Bank Transfer, or Standing Orders',
      'No lock-in period'
    ],
    targetAudience: 'Anyone seeking a secure emergency fund, short-term savings growth, or idle cash optimization.',
    minInvestment: 'Initial KES 500 | Top-up KES 500',
    iconName: 'Coins',
    badge: 'Top Rated',
    whatsappMessage: 'Hi Chrispus, I would like to open an ICEA LION Money Market Fund (MMF) account.'
  },
  {
    id: 'equity-growth-fund',
    title: 'ICEA LION Equity & Growth Unit Trusts',
    category: 'investments',
    shortDesc: 'Capital growth by investing in top-performing Nairobi Securities Exchange (NSE) companies.',
    fullDesc: 'Designed for long-term investors aiming to outperform inflation. The Equity Fund invests in blue-chip listed equities, providing high potential capital growth alongside dividend yields.',
    keyBenefits: [
      'Professional fund management by ICEA LION Asset Management',
      'Diversified exposure across banking, telecom, and consumer blue chips',
      'Ideal for wealth accumulation over 3 to 10+ years'
    ],
    targetAudience: 'Growth-oriented investors seeking higher inflation-hedged returns over medium-to-long term.',
    minInvestment: 'Initial KES 10,000 | Top-up KES 2,000',
    iconName: 'BarChart3',
    whatsappMessage: 'Hi Chrispus, I am interested in investing in the ICEA LION Equity Fund.'
  },
  {
    id: 'bond-fund',
    title: 'ICEA LION Bond & Fixed Income Fund',
    category: 'investments',
    shortDesc: 'Consistent income yields through investments in medium to long-term government bonds.',
    fullDesc: 'The Bond Fund targets regular interest income by investing primarily in Kenya Government Treasury Bonds and high-quality corporate bonds.',
    keyBenefits: [
      'Stable interest payouts twice a year',
      'Higher returns than standard bank fixed deposits',
      'Lower volatility compared to equity markets'
    ],
    targetAudience: 'Investors seeking predictable passive income without stock market volatility.',
    minInvestment: 'Initial KES 50,000',
    iconName: 'Landmark',
    whatsappMessage: 'Hi Chrispus, please guide me on the ICEA LION Bond Fund.'
  },

  // --- EDUCATION PLANS ---
  {
    id: 'educator-plan',
    title: 'ICEA LION Educator Plan',
    category: 'education',
    shortDesc: 'Guaranteed financial security for your children’s primary, secondary, and university fees.',
    fullDesc: 'Education costs in Kenya rise consistently year after year. The ICEA LION Educator Plan helps parents save systematically over a selected period, providing partial annual school fee payouts as well as a final maturity bonus. Crucially, if the parent passes away or suffers total disability during the term, ICEA LION pays off all remaining premiums so the child’s education is fully guaranteed.',
    keyBenefits: [
      'Waiver of Premium: ICEA LION continues all future contributions if parent demises or becomes disabled',
      'Scheduled fee payouts at key academic milestones (e.g., Form 1, Grade 7, University)',
      '15% Tax Relief on monthly premiums',
      'Bonuses added annually to accelerate savings fund growth'
    ],
    targetAudience: 'Parents and guardians of infants, primary, or secondary school pupils in Kenya.',
    policyPeriod: '5 to 20 Years',
    minInvestment: 'From KES 3,000 / month',
    iconName: 'GraduationCap',
    badge: 'Must Have',
    whatsappMessage: 'Hi Chrispus, I want to set up an ICEA LION Educator Plan for my child.'
  },
  {
    id: 'soma-plan',
    title: 'ICEA LION Soma Education Savings',
    category: 'education',
    shortDesc: 'Flexible educational fund tailored for high school and tertiary overseas or local education.',
    fullDesc: 'The Soma Plan provides structured, disciplined savings combined with life cover. Flexible maturity intervals allow you to align payouts with tuition schedules.',
    keyBenefits: [
      'Customized payout schedule matching your school fee dates',
      'Guaranteed return on capital plus bonuses',
      'Protects school dreams against inflation'
    ],
    targetAudience: 'Parents planning ahead for secondary, high school, or international university costs.',
    policyPeriod: '7 to 15 Years',
    minInvestment: 'From KES 2,500 / month',
    iconName: 'BookOpen',
    whatsappMessage: 'Hi Chrispus, tell me more about the ICEA LION Soma Plan.'
  },

  // --- GENERAL INSURANCE & ASSET PROTECTION ---
  {
    id: 'motor-insurance',
    title: 'ICEA LION Motor Insurance (Comprehensive)',
    category: 'general',
    shortDesc: 'Complete protection for private and commercial vehicles against accidents, theft, and fire.',
    fullDesc: 'ICEA LION Comprehensive Motor Cover safeguards your vehicle against accidental damage, theft, fire, third-party bodily injury, and property damage. Features include 24/7 roadside assistance, political violence cover, excess protector, and courtesy cars.',
    keyBenefits: [
      'Includes Excess Protector, Political Violence & Terrorism cover',
      'Free 24/7 Roadside breakdown & towing assistance',
      'Fast claim processing & certified repair garage network',
      'Courtesy vehicle option during repair period'
    ],
    targetAudience: 'Car owners, corporate fleets, and taxi operators in Kenya.',
    iconName: 'Car',
    badge: 'Essential',
    whatsappMessage: 'Hi Chrispus, I need a Motor Insurance quote for my vehicle.'
  },
  {
    id: 'domestic-package',
    title: 'ICEA LION Domestic Package (Homeowners & Renters)',
    category: 'general',
    shortDesc: 'Protects your home building, household electronics, furniture, and personal belongings.',
    fullDesc: 'Covers house structure and contents against fire, burglary, flood, water damage, electrical surge, and domestic worker liability.',
    keyBenefits: [
      'Covers both building structure and portable electronics (laptops, phones, TVs)',
      'Includes occupier’s and personal liability protection',
      'Affordable annual rates tailored to your asset valuation'
    ],
    targetAudience: 'Homeowners, tenants, apartment dwellers, and landlords in Nairobi and across Kenya.',
    iconName: 'Home',
    whatsappMessage: 'Hi Chrispus, I would like a quote for ICEA LION Domestic Home Insurance.'
  },
  {
    id: 'travel-insurance',
    title: 'ICEA LION Worldwide Travel Insurance',
    category: 'general',
    shortDesc: 'Comprehensive medical emergency, lost baggage, and flight cancellation cover for travelers.',
    fullDesc: 'Essential for overseas business trips, vacations, and studies. Compliant with Schengen visa requirements and accepted by global embassies.',
    keyBenefits: [
      'Emergency overseas medical expenses cover up to USD 50,000+',
      'Compensation for lost luggage and delayed flights',
      '24/7 global emergency hotline support'
    ],
    targetAudience: 'Frequent travelers, tourists, students studying abroad, and corporate executives.',
    iconName: 'Plane',
    whatsappMessage: 'Hi Chrispus, I need Travel Insurance for an upcoming trip.'
  },
  {
    id: 'health-medical-cover',
    title: 'ICEA LION Health & Medical Insurance',
    category: 'general',
    shortDesc: 'Comprehensive inpatient and outpatient medical cover for families and businesses.',
    fullDesc: 'Provides access to leading hospitals and specialists across Kenya and East Africa, covering maternity, dental, optical, chronic illness care, and emergency evacuations.',
    keyBenefits: [
      'Wide network of premier hospital providers (Nairobi Hospital, Aga Khan, MP Shah, etc.)',
      'Generous inpatient and outpatient limits',
      'Chronic condition & pre-existing condition management'
    ],
    targetAudience: 'Families, SMEs, and corporate organizations looking for premium health insurance.',
    iconName: 'Activity',
    whatsappMessage: 'Hi Chrispus, I want to inquire about ICEA LION Health and Medical Cover.'
  }
];
