import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Presto resources',
    to: '/docs/presto/tutorial',
    Svg: require('@site/static/img/logo-presto-color.svg').default,
    description: '',
  },
  {
    title: 'Gluten resources',
    to: '/docs/gluten/',
    Svg: require('@site/static/img/gluten-logo.svg').default,
    description: ''
  },
];

function Feature({Svg, title, to, description}) {
  return (
    <div className={clsx('col col--6')}>
      <Link to={to}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
