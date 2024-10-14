import React from 'react';
import { Phone, Mail, MapPin, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">심지영 변호사</h1>
          <p className="mt-2">전문성과 신뢰로 고객과 함께합니다.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">변호사 소개</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/photo-diary-z33yol/assets/f3gbk5sqwlhi/shim.png"
              alt="김정훈 변호사"
              className="w-48 h-48 object-cover rounded-full mb-4 md:mr-6"
            />
            <div>
              <p className="mb-4">
                안녕하세요, 심지영 변호사입니다. 저는 10년 이상의 사내 변호사 경력을 바탕으로 인수, 합병, 민사, 형사, 가사 등 다양한 법률 분야에서 고객님들의 권리를 지키고 최선의 결과를 얻기 위해 노력하고 있습니다.
              </p>
              <p className="mb-4">
                각 사건의 특성을 정확히 파악하고, 고객님의 입장에서 최선의 해결책을 제시하는 것이 제 역할이라고 생각합니다. 언제나 성실하고 정직한 자세로 여러분의 든든한 법률 조력자가 되겠습니다.
              </p>
              <ul className="list-disc list-inside">
                <li>서울대학교 법학과 졸업</li>
                <li>제50회 사법시험 합격</li>
                <li>한화그룹 사내 변호사</li>
                <li>CJ ENM 사내 변호사</li>
                <li>티빙 사내 변호사</li>
                <li>대한변호사협회 회원</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">연락처</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-blue-900" />
              <span>010-5159-6078</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-900" />
              <span>shimjy8410@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-900" />
              <span>서울특별시 마포구 블라블라</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-900" />
              <span>평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 심지영 변호사 사무소. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;