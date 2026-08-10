import React, { useState } from 'react';
import { 
  Calculator, 
  Coins, 
  GraduationCap, 
  PiggyBank, 
  TrendingUp, 
  ShieldCheck, 
  MessageCircle, 
  Info, 
  DollarSign
} from 'lucide-react';

export const CalculatorsSection: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<'mmf' | 'education' | 'pension'>('mmf');

  // --- MMF State ---
  const [mmfInitial, setMmfInitial] = useState<number>(10000);
  const [mmfMonthly, setMmfMonthly] = useState<number>(5000);
  const [mmfYears, setMmfYears] = useState<number>(3);
  const [mmfRate, setMmfRate] = useState<number>(12.0); // 12% p.a. average

  // --- Education Plan State ---
  const [childAge, setChildAge] = useState<number>(3);
  const [targetAge, setTargetAge] = useState<number>(18);
  const [currentFee, setCurrentFee] = useState<number>(150000); // per year
  const [eduInflation, setEduInflation] = useState<number>(8); // 8% p.a.

  // --- Pension State ---
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retireAge, setRetireAge] = useState<number>(60);
  const [pensionMonthly, setPensionMonthly] = useState<number>(10000);
  const [pensionRate, setPensionRate] = useState<number>(10.5);

  // --- MMF Calculations ---
  const calculateMMF = () => {
    const totalMonths = mmfYears * 12;
    const monthlyRate = mmfRate / 100 / 12;
    let balance = mmfInitial;
    let totalDeposited = mmfInitial;

    for (let i = 0; i < totalMonths; i++) {
      balance = (balance + mmfMonthly) * (1 + monthlyRate);
      totalDeposited += mmfMonthly;
    }

    const interestEarned = balance - totalDeposited;
    return {
      totalDeposited: Math.round(totalDeposited),
      interestEarned: Math.round(interestEarned),
      finalBalance: Math.round(balance)
    };
  };

  // --- Education Calculations ---
  const calculateEducation = () => {
    const yearsLeft = Math.max(1, targetAge - childAge);
    // Future value of fee considering inflation
    const futureFeeYearly = currentFee * Math.pow(1 + eduInflation / 100, yearsLeft);
    const totalFutureFee = futureFeeYearly * 4; // assuming 4 year degree
    const monthlyRate = 0.09 / 12; // assumed 9% policy yield
    const months = yearsLeft * 12;

    // Required monthly contribution
    const requiredMonthly = (totalFutureFee * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

    return {
      yearsLeft,
      futureFeeYearly: Math.round(futureFeeYearly),
      totalFutureFee: Math.round(totalFutureFee),
      requiredMonthly: Math.round(requiredMonthly)
    };
  };

  // --- Pension Calculations ---
  const calculatePension = () => {
    const yearsToRetire = Math.max(1, retireAge - currentAge);
    const months = yearsToRetire * 12;
    const monthlyRate = pensionRate / 100 / 12;
    let balance = 0;
    let totalContributed = 0;

    for (let i = 0; i < months; i++) {
      balance = (balance + pensionMonthly) * (1 + monthlyRate);
      totalContributed += pensionMonthly;
    }

    // Tax relief estimated (30% of contribution up to KES 20,000 limit)
    const eligibleTaxReliefAmount = Math.min(pensionMonthly, 20000);
    const monthlyTaxSaved = eligibleTaxReliefAmount * 0.30;
    const totalTaxSaved = monthlyTaxSaved * months;

    return {
      yearsToRetire,
      totalContributed: Math.round(totalContributed),
      interestGrowth: Math.round(balance - totalContributed),
      projectedLumpSum: Math.round(balance),
      monthlyTaxSaved: Math.round(monthlyTaxSaved),
      totalTaxSaved: Math.round(totalTaxSaved)
    };
  };

  const mmfResults = calculateMMF();
  const eduResults = calculateEducation();
  const pensionResults = calculatePension();

  const formatKes = (num: number) => {
    return `KES ${num.toLocaleString('en-KE')}`;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8 text-slate-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Calculator className="w-6 h-6 text-amber-400" />
            <span>Financial Goal Calculators</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulate your savings growth, school fee requirements, and tax savings with ICEA LION.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-950 border border-slate-800 rounded-2xl mb-6">
        <button
          onClick={() => setActiveCalc('mmf')}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeCalc === 'mmf'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Coins className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline">Money Market (MMF)</span>
          <span className="sm:hidden">MMF</span>
        </button>

        <button
          onClick={() => setActiveCalc('education')}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeCalc === 'education'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline">Educator Plan</span>
          <span className="sm:hidden">Education</span>
        </button>

        <button
          onClick={() => setActiveCalc('pension')}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeCalc === 'pension'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <PiggyBank className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline">Pension & Tax</span>
          <span className="sm:hidden">Pension</span>
        </button>
      </div>

      {/* --- MMF CALCULATOR --- */}
      {activeCalc === 'mmf' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Coins className="w-4 h-4" /> MMF Growth Inputs
            </h3>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Initial Deposit (KES)</span>
                <span className="font-semibold text-amber-400">{formatKes(mmfInitial)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="500000"
                step="500"
                value={mmfInitial}
                onChange={(e) => setMmfInitial(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Monthly Top-Up (KES)</span>
                <span className="font-semibold text-amber-400">{formatKes(mmfMonthly)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={mmfMonthly}
                onChange={(e) => setMmfMonthly(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Investment Duration</span>
                <span className="font-semibold text-amber-400">{mmfYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={mmfYears}
                onChange={(e) => setMmfYears(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Estimated Annual Rate (% p.a.)</span>
                <span className="font-semibold text-amber-400">{mmfRate}%</span>
              </div>
              <input
                type="range"
                min="8"
                max="15"
                step="0.5"
                value={mmfRate}
                onChange={(e) => setMmfRate(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated MMF Balance</span>
              <div className="text-3xl font-extrabold text-amber-400 mt-1 font-serif">
                {formatKes(mmfResults.finalBalance)}
              </div>

              <div className="mt-5 space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Money Deposited:</span>
                  <span className="font-semibold text-white">{formatKes(mmfResults.totalDeposited)}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Compound Interest Earned:</span>
                  <span>+{formatKes(mmfResults.interestEarned)}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl text-xs text-amber-200 leading-relaxed">
                💡 <strong>Did You Know?</strong> ICEA LION MMF accrues interest daily and allows easy top-ups and withdrawals via M-PESA anytime!
              </div>
            </div>

            <a
              href={`https://wa.me/254757752161?text=${encodeURIComponent(
                `Hi Chrispus, I calculated an MMF growth plan with initial KES ${mmfInitial} and monthly KES ${mmfMonthly} over ${mmfYears} years. Please help me set up an account.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Start ICEA LION MMF Account</span>
            </a>
          </div>
        </div>
      )}

      {/* --- EDUCATION PLAN CALCULATOR --- */}
      {activeCalc === 'education' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Child Fee Estimator
            </h3>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Child's Current Age</span>
                <span className="font-semibold text-amber-400">{childAge} years old</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={childAge}
                onChange={(e) => setChildAge(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Target College / Form 1 Age</span>
                <span className="font-semibold text-amber-400">{targetAge} years old</span>
              </div>
              <input
                type="range"
                min="12"
                max="21"
                value={targetAge}
                onChange={(e) => setTargetAge(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Today's Annual School Fee (KES)</span>
                <span className="font-semibold text-amber-400">{formatKes(currentFee)}</span>
              </div>
              <input
                type="range"
                min="30000"
                max="1000000"
                step="10000"
                value={currentFee}
                onChange={(e) => setCurrentFee(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Required Monthly Savings</span>
              <div className="text-3xl font-extrabold text-amber-400 mt-1 font-serif">
                {formatKes(eduResults.requiredMonthly)} / mo
              </div>

              <div className="mt-5 space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Years Remaining:</span>
                  <span className="font-semibold text-white">{eduResults.yearsLeft} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Future Annual Fee (8% inflation):</span>
                  <span className="font-semibold text-amber-300">{formatKes(eduResults.futureFeeYearly)}</span>
                </div>
                <div className="flex justify-between font-bold text-white">
                  <span>Total 4-Year University Cost:</span>
                  <span>{formatKes(eduResults.totalFutureFee)}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-200">
                🛡️ <strong>Waiver of Premium Included:</strong> ICEA LION pays all remaining fees if anything happens to you before your child graduates.
              </div>
            </div>

            <a
              href={`https://wa.me/254757752161?text=${encodeURIComponent(
                `Hi Chrispus, I used your Educator Plan calculator for my ${childAge}-year-old child (targeting ${targetAge} yrs). Recommended monthly contribution is KES ${eduResults.requiredMonthly}. Please advise me on setting this up.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Get ICEA LION Educator Plan</span>
            </a>
          </div>
        </div>
      )}

      {/* --- PENSION CALCULATOR --- */}
      {activeCalc === 'pension' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <PiggyBank className="w-4 h-4" /> Retirement & Tax Inputs
            </h3>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Current Age</span>
                <span className="font-semibold text-amber-400">{currentAge} yrs</span>
              </div>
              <input
                type="range"
                min="18"
                max="55"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Target Retirement Age</span>
                <span className="font-semibold text-amber-400">{retireAge} yrs</span>
              </div>
              <input
                type="range"
                min="50"
                max="70"
                value={retireAge}
                onChange={(e) => setRetireAge(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Monthly Pension Contribution (KES)</span>
                <span className="font-semibold text-amber-400">{formatKes(pensionMonthly)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={pensionMonthly}
                onChange={(e) => setPensionMonthly(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Projected Lump Sum at Retirement</span>
              <div className="text-3xl font-extrabold text-amber-400 mt-1 font-serif">
                {formatKes(pensionResults.projectedLumpSum)}
              </div>

              <div className="mt-5 space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Monthly KRA Tax Saved:</span>
                  <span>+{formatKes(pensionResults.monthlyTaxSaved)} / mo</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Total Tax Saved over {pensionResults.yearsToRetire} yrs:</span>
                  <span>+{formatKes(pensionResults.totalTaxSaved)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Contributions Paid:</span>
                  <span className="font-semibold text-white">{formatKes(pensionResults.totalContributed)}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-blue-200">
                💰 <strong>Tax Exemption Advantage:</strong> Under Kenyan law, your contributions up to KES 20,000/month reduce your taxable PAYE income directly!
              </div>
            </div>

            <a
              href={`https://wa.me/254757752161?text=${encodeURIComponent(
                `Hi Chrispus, I calculated a pension plan contributing KES ${pensionMonthly}/month from age ${currentAge} to ${retireAge}. Please assist me with starting an ICEA LION Individual Pension Scheme.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Start Pension & Save Tax Now</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
