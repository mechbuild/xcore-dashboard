
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FolderKanban, FileText, Users, Brain, LayoutDashboard } from "lucide-react";

export default function XCoreDashboard() {
  const [activePanel, setActivePanel] = useState("overview");

  const handleCardClick = (title) => {
    if (title === "Modül Yönetimi") {
      setActivePanel("modules");
    } else if (title === "Projeler") {
      setActivePanel("projects");
    } else if (title === "AI Uyarılar") {
      setActivePanel("aiAlerts");
    } else if (title === "Genel Bakış") {
      setActivePanel("overview");
    } else {
      setActivePanel(null);
    }
  };

  const sections = [
    { icon: <LayoutDashboard className="w-6 h-6" />, title: "Genel Bakış", description: "Sistem durumu, uyarılar ve son işlem özeti" },
    { icon: <FolderKanban className="w-6 h-6" />, title: "Projeler", description: "Tüm aktif projelerin listesi ve durumu" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Modül Yönetimi", description: "BOQ, HVAC, Yangın gibi modüller" },
    { icon: <FileText className="w-6 h-6" />, title: "Çıktılar", description: "Excel ve Word çıktı takibi, eksik döküman uyarıları" },
    { icon: <Brain className="w-6 h-6" />, title: "AI Uyarılar", description: "Eksik modül, gerekçe eksikliği ve öneri sistemi" },
    { icon: <Users className="w-6 h-6" />, title: "Kullanıcılar", description: "Admin, mühendis, mimar rolleri ve yetkileri" },
  ];

  const modules = [
    { name: "BOQ / Keşif", status: "✅ Tamamlandı" },
    { name: "HVAC Sistemi", status: "🟡 Devam Ediyor" },
    { name: "Sprinkler & Yangın Dolabı", status: "❌ Başlamadı" },
    { name: "Elektrik Yük Listesi", status: "✅ Tamamlandı" },
    { name: "Yalıtım (Isı/Ses/Yangın)", status: "🟡 Devam Ediyor" },
    { name: "AI Açıklama Motoru", status: "❌ Başlamadı" },
  ];

  const projects = [
    { name: "Hotel Taşkent", systemCount: 6, status: "🟡 Devam Ediyor" },
    { name: "Ofis Bloğu İstanbul", systemCount: 5, status: "✅ Tamamlandı" },
    { name: "Endüstriyel Tesis Ankara", systemCount: 3, status: "❌ Başlamadı" },
    { name: "MechDesign Pro", systemCount: 8, status: "🟡 Devam Ediyor" },
    { name: "MechBuild Pro", systemCount: 10, status: "✅ Tamamlandı" },
  ];

  const aiAlerts = [
    { issue: "HVAC modülünde teknik gerekçe eksik.", suggestion: "Gerekçe dokümanı eklenmeli." },
    { issue: "Yangın Sistemi modülü hiç başlatılmadı.", suggestion: "Modül aktivasyonu yapılmalı." },
    { issue: "Yalıtım modülü %50 seviyesinde.", suggestion: "Ses yalıtımı hesapları henüz eklenmedi." },
    { issue: "Elektrik modülü tamamlandı fakat açıklama raporu yok.", suggestion: "Word teknik rapor oluşturulmalı." },
  ];

  return (
    <div className="p-6">
      {activePanel === "modules" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, index) => (
            <Card key={index} className="rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{mod.name}</h3>
                <p className="text-sm text-gray-600">Durum: {mod.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : activePanel === "projects" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj, index) => (
            <Card key={index} className="rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{proj.name}</h3>
                <p className="text-sm text-gray-600">Modül Sayısı: {proj.systemCount}</p>
                <p className="text-sm text-gray-600">Durum: {proj.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : activePanel === "aiAlerts" ? (
        <div className="grid grid-cols-1 gap-4">
          {aiAlerts.map((alert, index) => (
            <Card key={index} className="rounded-2xl shadow-sm border-l-4 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-red-600">{alert.issue}</h3>
                <p className="text-sm text-gray-700">Öneri: {alert.suggestion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : activePanel === "overview" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Toplam Proje</h3>
              <p className="text-sm text-gray-600">{projects.length} proje listeleniyor.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Tamamlanan Modül</h3>
              <p className="text-sm text-gray-600">{modules.filter(m => m.status.includes("✅")).length} modül tamamlandı.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Aktif Uyarı</h3>
              <p className="text-sm text-gray-600">{aiAlerts.length} AI önerisi mevcut.</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} onClick={() => handleCardClick(section.title)} className="rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-4 flex items-center space-x-4">
                {section.icon}
                <div>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
