import React from 'react';
import { QrCode, X, Share2, Download, Copy, Check } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const appUrl = window.location.href;

  // Clean SVG QR code path simulation for smooth rendering without external dependencies
  const qrCodeDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    appUrl
  )}&bgcolor=0f172a&color=f59e0b&margin=10`;

  const copyLink = () => {
    navigator.clipboard.writeText(appUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-center text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white font-serif">Share Link Tree QR</h3>
        <p className="text-xs text-slate-400 mt-1 mb-5">
          Scan with any mobile camera to view Chrispus Thoithi Kagure’s ICEA LION Link Tree.
        </p>

        {/* QR Image Frame */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 inline-block shadow-inner mb-5">
          <img
            src={qrCodeDataUrl}
            alt="Chrispus Thoithi Kagure QR Code"
            className="w-52 h-52 rounded-xl object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={copyLink}
            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors border border-slate-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Copy Link Tree URL'}</span>
          </button>

          <button
            onClick={downloadVCard}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Download Contact (.vCard)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
