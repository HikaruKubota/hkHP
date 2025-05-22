import MainTemplate from '@/components/templates/MainTemplate';
import PrimaryButton from '@/components/atoms/PrimaryButton';
import { useI18n } from '@/lib/i18n';

export default function Home() {
  const { t } = useI18n();
  return (
    <MainTemplate>
      <h1 className="text-2xl mb-4">{t('home.title')}</h1>
      <p className="mb-4">{t('home.description')}</p>
      <div className="flex gap-2">
        <PrimaryButton onClick={() => alert('hello')}>Button</PrimaryButton>
      </div>
    </MainTemplate>
  );
}
