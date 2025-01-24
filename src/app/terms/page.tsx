import { LegalPage } from "@/components/legal-page"

export default function TermsOfService() {
  return (
    <LegalPage 
      title="Условия за ползване"
      icon="terms"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            1. Общи условия
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Чрез използването на Yambol Help, вие се съгласявате с настоящите условия за ползване. 
            Ако не сте съгласни с тях, моля не използвайте платформата.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            2. Използване на услугите
          </h2>
          <div className="space-y-4">
            <p className="text-[hsl(var(--muted-foreground))]">
              Нашите услуги са предназначени за:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Информационни цели</li>
              <li>Достъп до общински услуги</li>
              <li>Улесняване на комуникацията с общинската администрация</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            3. Отговорност
          </h2>
          <div className="space-y-4">
            <p className="text-[hsl(var(--muted-foreground))]">
              Yambol Help предоставя информацията добросъвестно, но не носи отговорност за:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Неточности в информацията</li>
              <li>Прекъсвания в достъпа до услугите</li>
              <li>Щети, произтичащи от използването на платформата</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            4. Интелектуална собственост
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Всички материали в платформата са защитени от авторско право и са собственост на Yambol Help 
            или съответните им притежатели.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            5. Промени в условията
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Запазваме си правото да променяме тези условия по всяко време. 
            Промените влизат в сила веднага след публикуването им на платформата.
          </p>
        </section>
      </div>
    </LegalPage>
  )
} 