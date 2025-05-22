import MainTemplate from '@/components/templates/MainTemplate';
import { useI18n } from '@/lib/i18n';

export default function Blog() {
  const { t } = useI18n();
  return (
    <MainTemplate>
      <h1 className="text-2xl mb-4">{t('blog.title')}</h1>
      <p>Qiitaの記事一覧へのリンクを掲載します。</p>
    </MainTemplate>
  );
}
