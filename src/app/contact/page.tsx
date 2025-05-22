import MainTemplate from '@/components/templates/MainTemplate';
import { useI18n } from '@/lib/i18n';

export default function Contact() {
  const { t } = useI18n();
  return (
    <MainTemplate>
      <h1 className="text-2xl mb-4">{t('contact.title')}</h1>
      <p>
        Twitter:{' '}
        <a className="text-blue-600" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          @yourhandle
        </a>
      </p>
    </MainTemplate>
  );
}
