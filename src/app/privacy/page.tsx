import { LegalPage } from "@/components/legal-page"

export default function PrivacyPolicy() {
  return (
    <LegalPage 
      title="Политика за поверителност"
      icon="privacy"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            1. Събиране на информация
          </h2>
          <div className="space-y-4">
            <p className="text-[hsl(var(--muted-foreground))]">
              Ние събираме минимално количество информация, необходимо за функционирането на платформата. 
              Това включва:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Информация за браузъра и устройството</li>
              <li>IP адрес</li>
              <li>Бисквитки за подобряване на потребителското изживяване</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            2. Използване на информацията
          </h2>
          <div className="space-y-4">
            <p className="text-[hsl(var(--muted-foreground))]">
              Събраната информация се използва единствено за:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Подобряване на услугите ни</li>
              <li>Персонализиране на потребителското изживяване</li>
              <li>Анализ на използването на платформата</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            3. Защита на информацията
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Вашата информация е защитена чрез съвременни методи за криптиране и сигурност. 
            Ние не споделяме вашите данни с трети страни без вашето изрично съгласие.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            4. Вашите права
          </h2>
          <div className="space-y-4">
            <p className="text-[hsl(var(--muted-foreground))]">
              Имате право да:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Поискате достъп до вашите данни</li>
              <li>Коригирате или изтриете вашите данни</li>
              <li>Оттеглите съгласието си за обработка на данни</li>
            </ul>
          </div>
        </section>
      </div>
    </LegalPage>
  )
} 