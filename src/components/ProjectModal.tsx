import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, Play, Code, CheckCircle, Copy, Check, ExternalLink, Terminal, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  githubUrl: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, githubUrl }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'learnings'>('demo');
  const [copied, setCopied] = useState(false);

  // Voter Calculator State
  const [voterAge, setVoterAge] = useState<string>('18');
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [voterResult, setVoterResult] = useState<{ status: 'eligible' | 'ineligible' | 'error'; message: string } | null>(null);

  // ATM System State
  const [atmPinInput, setAtmPinInput] = useState<string>('1234');
  const [atmAuthenticated, setAtmAuthenticated] = useState<boolean>(true);
  const [atmBalance, setAtmBalance] = useState<number>(500);
  const [atmActionAmount, setAtmActionAmount] = useState<string>('50');
  const [atmMessage, setAtmMessage] = useState<string>('Welcome to the ATM System. Balance: $500.00');
  const [atmTransactions, setAtmTransactions] = useState<string[]>([
    'Session started: Account active',
    'Initial balance verified: $500.00',
  ]);

  // Grade Calculator State
  const [grades, setGrades] = useState<{ [subject: string]: number }>({
    'Computer Science': 88,
    'Mathematics': 82,
    'Physics': 76,
    'Python Lab': 92,
    'English Communication': 80,
  });
  const [gradeResult, setGradeResult] = useState<{
    total: number;
    max: number;
    percentage: number;
    letterGrade: string;
    status: string;
    passed: boolean;
  } | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset states when opening a project
  useEffect(() => {
    if (project) {
      setActiveTab('demo');
      setCopied(false);
      setVoterResult(null);
      setGradeResult(null);
    }
  }, [project]);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Voter Calculator Logic
  const runVoterCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(voterAge, 10);
    if (isNaN(ageNum) || voterAge.trim() === '') {
      setVoterResult({ status: 'error', message: 'Please enter a valid numeric age.' });
      return;
    }
    if (ageNum < 0 || ageNum > 120) {
      setVoterResult({ status: 'error', message: 'Age must be between 0 and 120.' });
      return;
    }
    if (!isCitizen) {
      setVoterResult({
        status: 'ineligible',
        message: 'Ineligible: Voting requires legal citizenship in the electoral jurisdiction.',
      });
      return;
    }
    if (ageNum >= 18) {
      setVoterResult({
        status: 'eligible',
        message: `Eligible! At ${ageNum} years of age and confirmed citizenship, this individual meets legal voting conditions.`,
      });
    } else {
      const remaining = 18 - ageNum;
      setVoterResult({
        status: 'ineligible',
        message: `Currently not eligible. Age is ${ageNum}. Will become eligible in ${remaining} year${remaining > 1 ? 's' : ''}.`,
      });
    }
  };

  // ATM System Operations
  const handleAtmPinVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (atmPinInput === '1234') {
      setAtmAuthenticated(true);
      setAtmMessage('PIN verified. Access granted to banking functions.');
    } else {
      setAtmAuthenticated(false);
      setAtmMessage('Incorrect PIN. (Hint for demo: 1234)');
    }
  };

  const handleAtmDeposit = () => {
    const amt = parseFloat(atmActionAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmMessage('Error: Deposit amount must be a positive number.');
      return;
    }
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmMessage(`Success: Deposited $${amt.toFixed(2)}. Current balance: $${newBal.toFixed(2)}`);
    setAtmTransactions((prev) => [`Deposited +$${amt.toFixed(2)} (Balance: $${newBal.toFixed(2)})`, ...prev.slice(0, 5)]);
  };

  const handleAtmWithdraw = () => {
    const amt = parseFloat(atmActionAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmMessage('Error: Withdrawal amount must be a positive number.');
      return;
    }
    if (amt > atmBalance) {
      setAtmMessage(`Transaction Declined: Insufficient balance. Available funds: $${atmBalance.toFixed(2)}`);
      return;
    }
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmMessage(`Success: Withdrew $${amt.toFixed(2)}. Remaining balance: $${newBal.toFixed(2)}`);
    setAtmTransactions((prev) => [`Withdrew -$${amt.toFixed(2)} (Balance: $${newBal.toFixed(2)})`, ...prev.slice(0, 5)]);
  };

  // Grade Calculator Logic
  const runGradeCalculation = (e: React.FormEvent) => {
    e.preventDefault();
    const scores = Object.values(grades);
    const totalMarks = scores.reduce((acc, curr) => acc + curr, 0);
    const totalPossible = scores.length * 100;
    const percentage = parseFloat(((totalMarks / totalPossible) * 100).toFixed(2));
    const failedAny = scores.some((s) => s < 35);

    let letterGrade = 'F';
    let status = 'Needs Improvement';
    let passed = true;

    if (failedAny) {
      letterGrade = 'Fail';
      status = 'Subject Backlog (< 35 marks in one or more subjects)';
      passed = false;
    } else if (percentage >= 90) {
      letterGrade = 'A+';
      status = 'First Class with Distinction';
    } else if (percentage >= 80) {
      letterGrade = 'A';
      status = 'First Class';
    } else if (percentage >= 70) {
      letterGrade = 'B';
      status = 'Second Class Upper';
    } else if (percentage >= 60) {
      letterGrade = 'C';
      status = 'Second Class Lower';
    } else if (percentage >= 40) {
      letterGrade = 'D';
      status = 'Pass Grade';
    } else {
      letterGrade = 'F';
      status = 'Failed Aggregate';
      passed = false;
    }

    setGradeResult({
      total: totalMarks,
      max: totalPossible,
      percentage,
      letterGrade,
      status,
      passed,
    });
  };

  const projectUrl = githubUrl.endsWith('/') ? `${githubUrl}${project.id}` : `${githubUrl}/${project.id}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
              <span>Python Project Demo</span>
              <span aria-hidden="true">·</span>
              <span>1st-Semester B.Tech</span>
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-100 bg-white">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'demo'
                ? 'border-blue-600 text-blue-600 bg-blue-50/40'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            Interactive Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-600 bg-blue-50/40'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Python Source Code
          </button>
          <button
            onClick={() => setActiveTab('learnings')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'learnings'
                ? 'border-blue-600 text-blue-600 bg-blue-50/40'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            Concepts Learned
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[68vh] overflow-y-auto">
          {/* TAB 1: INTERACTIVE SIMULATOR */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* DEMO 1: VOTER ELIGIBILITY */}
              {project.demoType === 'voter' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-800 tracking-wider">LIVE LOGIC SIMULATOR</span>
                    </div>
                    <span className="text-xs text-slate-500">Legal threshold: 18 years</span>
                  </div>

                  <form onSubmit={runVoterCalculator} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Applicant Age (Years)
                        </label>
                        <input
                          type="number"
                          value={voterAge}
                          onChange={(e) => setVoterAge(e.target.value)}
                          min="0"
                          max="120"
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g. 19"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Citizenship Status
                        </label>
                        <div className="flex items-center gap-4 mt-2">
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="citizenship"
                              checked={isCitizen}
                              onChange={() => setIsCitizen(true)}
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span>Citizen</span>
                          </label>
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="citizenship"
                              checked={!isCitizen}
                              onChange={() => setIsCitizen(false)}
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span>Non-Citizen</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        Evaluate Eligibility
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setVoterAge('18');
                          setIsCitizen(true);
                          setVoterResult(null);
                        }}
                        className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg transition-colors"
                      >
                        Reset Test Values
                      </button>
                    </div>
                  </form>

                  {voterResult && (
                    <div
                      className={`p-4 rounded-lg border text-sm flex items-start gap-3 ${
                        voterResult.status === 'eligible'
                          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                          : voterResult.status === 'error'
                          ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                          : 'bg-blue-50/80 border-blue-200 text-blue-900'
                      }`}
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-xs tracking-wider mb-0.5">
                          {voterResult.status === 'eligible' ? 'CONDITION SATISFIED' : 'EVALUATION RESULT'}
                        </div>
                        <p>{voterResult.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 2: ATM MANAGEMENT SYSTEM */}
              {project.demoType === 'atm' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-800 tracking-wider">ATM SESSION INTERACTION</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Demo PIN: 1234</span>
                  </div>

                  {!atmAuthenticated ? (
                    <form onSubmit={handleAtmPinVerify} className="space-y-3 bg-white p-4 rounded-lg border border-slate-200">
                      <label className="block text-xs font-medium text-slate-700">Enter Account PIN (4 Digits)</label>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          maxLength={4}
                          value={atmPinInput}
                          onChange={(e) => setAtmPinInput(e.target.value)}
                          className="px-3 py-2 text-sm border border-slate-300 rounded-lg w-32 tracking-widest font-mono"
                          placeholder="••••"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Verify PIN
                        </button>
                      </div>
                      <p className="text-xs text-amber-600">{atmMessage}</p>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      {/* Balance Display */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-xs text-slate-500 uppercase tracking-wider">Current Account Balance</span>
                          <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                            ${atmBalance.toFixed(2)}
                          </div>
                        </div>
                        <div className="text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-medium self-start sm:self-center">
                          PIN Verified · Active Session
                        </div>
                      </div>

                      {/* Transaction Controls */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                        <label className="block text-xs font-medium text-slate-700">Transaction Amount ($)</label>
                        <div className="flex flex-wrap items-center gap-2">
                          <input
                            type="number"
                            min="1"
                            value={atmActionAmount}
                            onChange={(e) => setAtmActionAmount(e.target.value)}
                            className="w-32 px-3 py-2 text-sm border border-slate-300 rounded-lg font-mono"
                            placeholder="50"
                          />
                          <button
                            type="button"
                            onClick={handleAtmDeposit}
                            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                          >
                            Deposit Cash
                          </button>
                          <button
                            type="button"
                            onClick={handleAtmWithdraw}
                            className="px-4 py-2 text-xs font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            Withdraw Cash
                          </button>
                        </div>
                        {atmMessage && (
                          <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-mono">
                            {atmMessage}
                          </div>
                        )}
                      </div>

                      {/* Transaction History Log */}
                      <div className="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-xs space-y-1">
                        <div className="text-slate-400 text-[11px] pb-1 border-b border-slate-800 flex justify-between">
                          <span>SESSION TRANSACTION LOG</span>
                          <span>In-Memory Python State</span>
                        </div>
                        {atmTransactions.map((tx, idx) => (
                          <div key={idx} className="text-slate-300">
                            &gt; {tx}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 3: STUDENT GRADE CALCULATOR */}
              {project.demoType === 'grade' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-800 tracking-wider">GRADE LOGIC SIMULATOR</span>
                    </div>
                    <span className="text-xs text-slate-500">Pass mark: ≥ 35 / 100</span>
                  </div>

                  <form onSubmit={runGradeCalculation} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.keys(grades).map((subject) => (
                        <div key={subject} className="bg-white p-3 rounded-lg border border-slate-200">
                          <label className="block text-xs font-medium text-slate-700 truncate mb-1">
                            {subject}
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grades[subject]}
                            onChange={(e) =>
                              setGrades({
                                ...grades,
                                [subject]: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)),
                              })
                            }
                            className="w-full px-2.5 py-1.5 text-sm border border-slate-300 rounded-md font-mono"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        Calculate Grade & Status
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setGrades({
                            'Computer Science': 90,
                            'Mathematics': 85,
                            'Physics': 80,
                            'Python Lab': 95,
                            'English Communication': 85,
                          });
                          setGradeResult(null);
                        }}
                        className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg transition-colors"
                      >
                        Reset Demo Marks
                      </button>
                    </div>
                  </form>

                  {gradeResult && (
                    <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[11px] text-slate-500 uppercase">Total Marks</div>
                          <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                            {gradeResult.total} / {gradeResult.max}
                          </div>
                        </div>
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[11px] text-slate-500 uppercase">Percentage</div>
                          <div className="text-lg font-bold font-mono text-blue-600 tabular-nums">
                            {gradeResult.percentage}%
                          </div>
                        </div>
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[11px] text-slate-500 uppercase">Letter Grade</div>
                          <div className={`text-lg font-bold font-mono ${gradeResult.passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {gradeResult.letterGrade}
                          </div>
                        </div>
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="text-[11px] text-slate-500 uppercase">Result</div>
                          <div className={`text-sm font-semibold mt-1 ${gradeResult.passed ? 'text-emerald-700' : 'text-rose-700'}`}>
                            {gradeResult.passed ? 'Passed' : 'Backlog'}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 text-center pt-1 border-t border-slate-100">
                        Classification: <span className="font-medium text-slate-900">{gradeResult.status}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PYTHON SOURCE CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">
                  Clean, beginner-friendly Python script with comments and structured functions
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#0F172A]">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span>{project.id}.py</span>
                  <span>Python 3.x</span>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{project.pythonCode}</code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: KEY LEARNINGS */}
          {activeTab === 'learnings' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Concepts and engineering habits practiced while building this project as a 1st-semester student:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyLearnings.map((learning, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-medium">
                      {learning}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-blue-900 block mb-1">Student Context</span>
                This project represents independent programming practice to reinforce conditional statements, logical branching, and clean algorithmic thinking.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Repository on GitHub</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
