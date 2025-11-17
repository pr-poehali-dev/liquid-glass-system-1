import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeArea, setActiveArea] = useState('закупки');

  const workAreas = [
    { name: 'закупки', task: 'Проверка контракта №452-ФЗ' },
    { name: 'юрист', task: 'Подготовка ответа на жалобу' },
    { name: 'финотдел', task: 'Согласование сметы на 2026 год' },
    { name: 'техдокументация', task: 'Проверка проекта реконструкции' },
    { name: 'произвольная проверка', task: 'Анализ входящей документации' }
  ];
  
  const citizenTopics = [
    { text: 'Отопление', size: 'text-5xl', weight: 'font-bold' },
    { text: 'Дороги', size: 'text-3xl', weight: 'font-semibold' },
    { text: 'Благоустройство', size: 'text-2xl', weight: 'font-medium' },
    { text: 'Освещение', size: 'text-xl', weight: 'font-normal' },
    { text: 'Транспорт', size: 'text-2xl', weight: 'font-medium' },
    { text: 'ЖКХ', size: 'text-3xl', weight: 'font-semibold' },
    { text: 'Уборка', size: 'text-lg', weight: 'font-normal' },
    { text: 'Парковки', size: 'text-xl', weight: 'font-normal' },
  ];

  const tasks = [
    {
      title: 'Подготовка отчёта по благоустройству',
      deadline: 'до 18:00',
      aiTip: 'Используйте данные из БД за последний квартал. Обратите внимание на районы с наибольшим количеством обращений.'
    },
    {
      title: 'Проверка закупочной документации',
      deadline: 'до 15:00',
      aiTip: 'Рекомендую начать с позиций свыше 500 тыс. руб. Шаблон проверки в разделе "База знаний".'
    },
    {
      title: 'Ответ на запрос НКО',
      deadline: 'до 17:00',
      aiTip: 'Похожий запрос был обработан 2 недели назад. Используйте шаблон из архива.'
    }
  ];

  const events = [
    { name: 'День города', effect: 'Повышение вовлечённости граждан', budget: '2.5 млн ₽', program: 'Культура и досуг' },
    { name: 'Ремонт дорог', effect: 'Снижение аварийности на 15%', budget: '45 млн ₽', program: 'Безопасные дороги' },
    { name: 'Установка детских площадок', effect: 'Охват 3 микрорайонов', budget: '8 млн ₽', program: 'Комфортная среда' },
  ];

  const marqueeText = [
    '💬 Светлана М.: "Спасибо за оперативный ремонт теплосетей!"',
    '📱 ВК: Новый пост Администрации набрал 1.2к лайков',
    '💬 Михаил К.: "Когда планируется установка светофора на перекрестке?"',
    '📱 Telegram: Обсуждение бюджета округа - 340 комментариев',
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-[1920px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/694db00f-8d17-4979-aabe-3fc58289c0f8.jpg" 
              alt="Герб Видного"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-black">ИИ ПАНЕЛЬ организации общественно-политической работы</h1>
              <p className="text-lg text-gray-700">Ленинский городской округ</p>
            </div>
          </div>
          
          <Card className="backdrop-blur-lg bg-white/80 border-2 border-black rounded-3xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-black">Иванов И.П.</p>
                <p className="text-sm text-gray-600">Заместитель Главы Администрации</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Marquee */}
        <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl overflow-hidden shadow-lg">
          <div className="relative overflow-hidden py-4">
            <div className="animate-marquee whitespace-nowrap inline-flex">
              {[...marqueeText, ...marqueeText].map((text, idx) => (
                <span key={idx} className="mx-8 text-lg font-semibold text-black">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Main Functions */}
          <div className="col-span-4 space-y-4">
            {/* Knowledge Base & Documents */}
            <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-black">Работа с документами</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-green-500 hover:bg-green-600 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="Database" className="mr-2" size={20} />
                  Подключить Базу знаний
                </Button>
                <Button className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="Upload" className="mr-2" size={20} />
                  Загрузить документы для проверки
                </Button>
                <Button className="w-full justify-start bg-white hover:bg-gray-100 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="FileCheck" className="mr-2" size={20} />
                  Отчёт по проверке
                </Button>
                <Button className="w-full justify-start bg-white hover:bg-gray-100 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Создать документ по шаблону
                </Button>
              </div>
            </Card>

            {/* Work Areas */}
            <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-black">Рабочие области</h2>
              <div className="space-y-3">
                {workAreas.map((area) => (
                  <div
                    key={area.name}
                    onClick={() => setActiveArea(area.name)}
                    className={`cursor-pointer rounded-2xl p-4 border-2 border-black transition-all ${
                      activeArea === area.name
                        ? 'bg-green-500 text-black shadow-lg'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-sm uppercase">{area.name}</h3>
                      <Icon name="ChevronRight" size={18} className="text-black" />
                    </div>
                    <p className="text-sm text-gray-700">{area.task}</p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline" className="text-xs border-black rounded-xl h-8">
                        <Icon name="Database" className="mr-1" size={14} />
                        База знаний
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs border-black rounded-xl h-8">
                        <Icon name="Upload" className="mr-1" size={14} />
                        Загрузить
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs border-black rounded-xl h-8">
                        <Icon name="FileCheck" className="mr-1" size={14} />
                        Отчёт
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs border-black rounded-xl h-8">
                        <Icon name="FileText" className="mr-1" size={14} />
                        Шаблон
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Events Table */}
            <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-black">Связь мероприятий с Госпрограммами</h2>
              <div className="space-y-3">
                {events.map((event, idx) => (
                  <div key={idx} className="bg-white/80 rounded-2xl p-4 border-2 border-black">
                    <h3 className="font-bold text-black mb-2">{event.name}</h3>
                    <div className="text-sm space-y-1 text-gray-700">
                      <p><strong>Эффект:</strong> {event.effect}</p>
                      <p><strong>Расходы:</strong> {event.budget}</p>
                      <p><strong>Программа:</strong> <Badge className="bg-yellow-500 text-black border border-black">{event.program}</Badge></p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Middle Column - Citizen Appeals & Tasks */}
          <div className="col-span-4 space-y-4">
            {/* Citizen Appeals Cloud */}
            <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                <Icon name="Users" size={24} />
                Обращения граждан
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 p-6 min-h-[280px]">
                {citizenTopics.map((topic, idx) => (
                  <span
                    key={idx}
                    className={`${topic.size} ${topic.weight} text-black hover:text-green-600 cursor-pointer transition-colors`}
                  >
                    {topic.text}
                  </span>
                ))}
              </div>
            </Card>

            {/* Tasks from Head */}
            <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                <Icon name="ClipboardList" size={24} />
                Поручения главы
              </h2>
              <div className="space-y-4">
                {tasks.map((task, idx) => (
                  <div key={idx} className="bg-white/80 rounded-2xl p-4 border-2 border-black space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-black flex-1">{task.title}</h3>
                      <Badge className="bg-yellow-500 text-black border border-black">{task.deadline}</Badge>
                    </div>
                    <div className="bg-green-100 rounded-xl p-3 border border-green-500">
                      <p className="text-sm font-medium text-black flex gap-2">
                        <Icon name="Sparkles" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{task.aiTip}</span>
                      </p>
                    </div>
                    <Progress value={33 * (idx + 1)} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Interactive Map */}
          <div className="col-span-4 space-y-4">
            <Card className="backdrop-blur-lg bg-white/60 border-2 border-black rounded-3xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                <Icon name="Map" size={24} />
                Интерактивная карта МО
              </h2>
              
              {/* Map Area */}
              <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl border-2 border-black p-8 mb-4 min-h-[400px] relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Central location */}
                    <div className="w-32 h-32 bg-green-500 border-4 border-black rounded-full flex items-center justify-center">
                      <Icon name="Building2" size={48} className="text-black" />
                    </div>
                    
                    {/* Interest points */}
                    <div className="absolute -top-12 -right-12 w-16 h-16 bg-yellow-500 border-2 border-black rounded-full flex items-center justify-center animate-pulse">
                      <Icon name="School" size={24} className="text-black" />
                    </div>
                    <div className="absolute -bottom-8 -left-16 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center">
                      <Icon name="Hospital" size={20} className="text-black" />
                    </div>
                    <div className="absolute top-16 -right-20 w-14 h-14 bg-green-300 border-2 border-black rounded-full flex items-center justify-center">
                      <Icon name="Trees" size={22} className="text-black" />
                    </div>
                    <div className="absolute -top-8 left-20 w-10 h-10 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center">
                      <Icon name="ShoppingBag" size={18} className="text-black" />
                    </div>
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: -100, left: -100, width: 400, height: 400}}>
                      <line x1="120" y1="150" x2="180" y2="120" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="120" y1="170" x2="80" y2="220" stroke="black" strokeWidth="2" />
                      <line x1="140" y1="150" x2="200" y2="180" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="space-y-2">
                <Button className="w-full justify-start bg-white hover:bg-gray-100 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="Video" className="mr-2" size={20} />
                  Переключиться на камеру района
                </Button>
                <Button className="w-full justify-start bg-green-500 hover:bg-green-600 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="Users" className="mr-2" size={20} />
                  Подключить НКО к событию
                </Button>
                <Button className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-black border-2 border-black rounded-2xl font-semibold">
                  <Icon name="FileEdit" className="mr-2" size={20} />
                  Сформировать решение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;