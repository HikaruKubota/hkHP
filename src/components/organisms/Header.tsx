import { useI18n } from '@/lib/i18n';
import NavLink from '../atoms/NavLink';

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <nav className="flex gap-4">
        <NavLink href="/">{t('nav.home')}</NavLink>
        <NavLink href="/about">{t('nav.about')}</NavLink>
        <NavLink href="/downloads">{t('nav.downloads')}</NavLink>
        <NavLink href="/blog">{t('nav.blog')}</NavLink>
        <NavLink href="/contact">{t('nav.contact')}</NavLink>
      </nav>
    </header>
  );
}
