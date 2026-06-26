import React from 'react';
import ContractContent from './ContractContent';

interface ContractPreviewProps {
  clientName: string;
  projectName: string;
  data: any;
}

export default function ContractPreview({ clientName, projectName, data }: ContractPreviewProps) {
  return (
    <div 
      className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200" 
      dir="rtl"
      style={{ fontFamily: '"Vazirmatn", "IRANSans", "Shabnam", "Tahoma", sans-serif' }}
    >
      <div className="text-center mb-8 border-b-2 border-slate-800 pb-6">
        <h2 className="text-3xl font-black mb-3">بسمه تعالی</h2>
        <h3 className="text-xl font-bold mt-2 text-slate-800">
          قرارداد رسمی طراحی، توسعه و پیاده‌سازی پلتفرم «{projectName || 'نام پروژه'}»
        </h3>
      </div>

      {/* فراخوانی محتوای کامل از فایل تمپلیت */}
      <ContractContent clientName={clientName} projectName={projectName} data={data} />
      
    </div>
  );
}