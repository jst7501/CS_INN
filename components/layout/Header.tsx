"use client"; // 👈 이 한 줄 추가

import { UserCircle, Menu, Bell } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="top-0 w-full h-16 bg-white border-b shadow-sm border-slate-200">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl md:px-8">
        {/* 좌측: 로고 및 사명 */}
        <div className="flex items-center gap-3">
          {/* 로고 영역 (이미지가 있다면 img 태그로 교체 가능) */}
          <div className="flex items-center justify-center w-12 h-12 text-white ">
            <Image
              src={logo}
              alt="(주)씨에스이노베이션 로고"
              priority // LCP(최대 콘텐츠 페인트) 향상을 위해 우선 로딩
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-black leading-tight tracking-tight text-slate-800">
              (주) 씨에스이노베이션
            </h1>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider">
              CS INNOVATION CO., LTD.
            </span>
          </div>
        </div>

        {/* 우측: 상태 표시 및 사용자 메뉴 */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* 시스템 상태 (데스크탑 전용) */}
          <div className="flex-col items-end mr-2 x md:flex">
            <span className="text-xs font-bold text-slate-600">
              Safety Management System
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
              <span className="text-[10px] font-bold text-green-600">
                Online
              </span>
            </div>
          </div>
          <div className="hidden w-px h-8 mx-2 bg-slate-200 md:block"></div>
          {/* <button className="relative p-2 transition-colors rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700">
            <Bell size={20} />
            <span className="absolute w-2 h-2 bg-red-500 border border-white rounded-full top-2 right-2"></span>
          </button>

          <button className="p-2 transition-colors rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700">
            <UserCircle size={24} />
          </button>

          <button className="p-2 transition-colors rounded-full md:hidden text-slate-500 hover:bg-slate-100">
            <Menu size={24} />
          </button> */}
        </div>
      </div>
    </header>
  );
}
