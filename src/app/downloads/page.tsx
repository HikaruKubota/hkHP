import MainTemplate from '@/components/templates/MainTemplate';
import { useI18n } from '@/lib/i18n';

export default function Downloads() {
  const { t } = useI18n();
  return (
    <MainTemplate>
      <h1 className="text-2xl mb-4">{t('downloads.title')}</h1>
      <p>成果物のダウンロードリンクを掲載します。</p>
    </MainTemplate>
  );
}
