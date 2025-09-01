import { useState } from 'react';
import '@src/Options.css';
import { Button } from '@extension/ui';
import { withErrorBoundary, withSuspense, useTheme } from '@extension/shared';
import { t } from '@extension/i18n';
import { GeneralSettings } from './components/GeneralSettings';
import { ModelSettings } from './components/ModelSettings';
import { FirewallSettings } from './components/FirewallSettings';

type TabTypes = 'general' | 'models' | 'firewall' | 'help';

const TABS: { id: TabTypes; icon: string; label: string }[] = [
  { id: 'general', icon: '⚙️', label: t('options_tabs_general') },
  { id: 'models', icon: '📊', label: t('options_tabs_models') },
  { id: 'firewall', icon: '🔒', label: t('options_tabs_firewall') },
  { id: 'help', icon: '📚', label: t('options_tabs_help') },
];

const Options = () => {
  const [activeTab, setActiveTab] = useState<TabTypes>('models');
  const { isDarkMode } = useTheme();

  const handleTabClick = (tabId: TabTypes) => {
    if (tabId === 'help') {
      window.open('https://nanobrowser.ai/docs', '_blank');
    } else {
      setActiveTab(tabId);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings isDarkMode={isDarkMode} />;
      case 'models':
        return <ModelSettings isDarkMode={isDarkMode} />;
      case 'firewall':
        return <FirewallSettings isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen min-w-[768px] bg-[rgb(var(--color-bg-primary))] text-[rgb(var(--color-text-primary))]">
      {/* Vertical Navigation Bar */}
      <nav className="w-48 border-r border-[rgb(var(--color-border-primary))] bg-[rgb(var(--color-bg-secondary))] backdrop-blur-sm">
        <div className="p-4">
          <h1 className="mb-6 text-xl font-bold text-[rgb(var(--color-text-primary))]">{t('options_nav_header')}</h1>
          <ul className="space-y-2">
            {TABS.map(item => (
              <li key={item.id}>
                <Button
                  onClick={() => handleTabClick(item.id)}
                  className={`flex w-full items-center space-x-2 rounded-lg px-4 py-2 text-left text-base transition-colors ${
                    activeTab !== item.id
                      ? 'bg-[rgb(var(--color-bg-tertiary))] text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-hover-bg))] hover:text-[rgb(var(--color-text-primary))]'
                      : 'bg-[rgb(var(--color-accent-primary))] text-white'
                  }`}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 bg-[rgb(var(--color-bg-primary))] p-8">
        <div className="mx-auto min-w-[512px] max-w-screen-lg">{renderTabContent()}</div>
      </main>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Options, <div>Loading...</div>), <div>Error Occurred</div>);
