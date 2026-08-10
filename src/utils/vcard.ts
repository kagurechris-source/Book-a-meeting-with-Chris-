export function downloadVCard() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Chrispus Thoithi Kagure
N:Kagure;Chrispus;Thoithi;;
ORG:ICEA LION Group
TITLE:Financial Advisor
TEL;TYPE=CELL,VOICE;TYPE=PREF:+254757752161
EMAIL;TYPE=WORK,INTERNET:kagurechris@gmail.com
ADR;TYPE=WORK,PREF:;;5th & 6th Floor, JKUAT Towers, Kenyatta Avenue;Nairobi;;;Kenya
NOTE:Professional Financial Advisor offering Life Assurance, Pensions, Money Market Funds, Education Plans, and General Insurance.
URL:https://wa.me/254757752161
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Chrispus_Thoithi_Kagure_ICEALION.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
