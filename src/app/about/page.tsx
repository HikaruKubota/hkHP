import MainTemplate from '@/components/templates/MainTemplate';
import { useI18n } from '@/lib/i18n';

export default function About() {
  const { t } = useI18n();
  return (
    <MainTemplate>
      <h1 className="text-2xl mb-4">{t('about.title')}</h1>
      <p>ここに経歴を記述します。</p>
    </MainTemplate>
  );
}
