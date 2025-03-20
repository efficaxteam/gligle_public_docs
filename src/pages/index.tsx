import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/customer/what-is-gligle">
            🥰 Я користувач
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/organizer/how-to-hold-an-event">
            🤗 Я організатор
          </Link>
        </div>
        <Link
          className="button button--secondary button--lg"
          to="https://t.me/GligleSupport">
          🆘 Написати у підтримку (Telegram)
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const popularDocs = [
    {
      href: "/docs/customer/what-is-gligle",
      label: "Що таке Gligle?",
      description: "Дізнайтеся більше про сервіс Gligle."
    },
    {
      href: "/docs/organizer/how-to-hold-an-event",
      label: "Повна інструкція по проведенню заходу",
      description: "Посібник для організаторів подій, та тих хто бажає провести свій захід."
    },
    {
      href: "/docs/legal/general-rules",
      label: "Загальні правила використання платформи Gligle",
      description: "Короткий огляд правил."
    }
  ];

  const userTroubleshooting = [
    {
      href: "/docs/customer/troubleshooting#код-авторизації-не-приходить-на-пошту",
      label: "Код авторизації не приходить на пошту?",
      description: "Швидке вирішення проблеми якщо не працює авторизація."
    },
    {
      href: "/docs/customer/troubleshooting#не-прийшов-квиток-на-поштутелеграм-після-оплати",
      label: "Не прийшов квиток на пошту/телеграм після оплати?",
      description: "Що робити якщо не прийшов квиток."
    },
    {
      href: "/docs/customer/troubleshooting#не-працює-телеграм-бот-організатора",
      label: "Не працює телеграм бот організатора?",
      description: "Що робити якщо не працює бот організатора."
    }
  ];

  const organizerQuestions = [
    {
      href: '/docs/organizer/how-to-sell-with-telegram',
      label: 'Як продавати квитки через Telegram?',
      description: 'Telegram – один із найпопулярніших каналів для продажу квитків...'
    },
    {
      href: '/docs/organizer/monobank-jars-faq#як-виглядає-процес-покупки-для-користувача',
      label: 'Як виглядає процес покупки для користувача?',
      description: 'Користувач обирає кількість квитків та натискає...'
    },
    {
      href: '/docs/organizer/monobank-jars-faq#що-буде-якщо-користувач-сплатить-меншу-суму-ніж-вказано',
      label: 'Що буде якщо користувач сплатить менше?',
      description: 'Користувачу необхідно сплатити рівно або більше...'
    }
  ];

  return (
    <Layout
      title={`Головна`}
      description={siteConfig.tagline}>
      <HomepageHeader/>
      <main>
        <div className={styles.popular}>
          <Heading as="h2">Популярні статті</Heading>
          <div className={styles.popular__list}>
            {popularDocs.map((doc) => (
              <Link key={doc.href} className={styles.popular__item} to={doc.href}>
                <p>{doc.label}</p>
                <span>{doc.description}</span>
              </Link>
            ))}</div>
        </div>

        <div className={styles.popular}>
          <Heading as="h2">Щось пішло не так?</Heading>
          <div className={styles.popular__list}>
            {userTroubleshooting.map((doc) => (
              <Link key={doc.href} className={styles.popular__item} to={doc.href}>
                <p>{doc.label}</p>
                <span>{doc.description}</span>
              </Link>
            ))}</div>
        </div>

        <div className={styles.popular}>
          <Heading as="h2">Часті питання від організаторів</Heading>
          <div className={styles.popular__list}>
            {organizerQuestions.map((doc) => (
              <Link key={doc.href} className={styles.popular__item} to={doc.href}>
                <p>{doc.label}</p>
                <span>{doc.description}</span>
              </Link>
            ))}</div>
        </div>
      </main>
    </Layout>
  );
}
