import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sample Python Base Code (gRPC)',
    Svg: require('@site/static/img/pythoncslf.svg').default,
    description: (
      <>
        The Python Base Code is a simple example of how to use the CLSF API to create a team for the 2D Soccer Simulation League.
        By this code, you can create a powerful team that can compete in the league.
      </>
    ),
    link: 'https://github.com/CLSFramework/sample-playmaker-server-python-grpc'
  },
  {
    title: 'Soccer Simulation 2D',
    Svg: require('@site/static/img/ss2d_logo.svg').default,
    description: (
      <>
        The RoboCup 2D Simulated Soccer League is the oldest of the RoboCup Soccer Simulation Leagues. It consists of a number of competitions with computer simulated soccer matches as the main event.
      </>
    ),
    link: 'https://rcsoccersim.github.io/'
  },
  {
    title: 'Toturial Video',
    Svg: require('@site/static/img/youtube.svg').default,
    description: (
      <>
        You can find the tutorial videos about the CLSFramework to learn how to create a team for the 2D Soccer Simulation League.
        This video is a good start to learn how to create a team.
      </>
    ),
    link: '/docs/ToturialVideos/'
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{padding:'20px'}}>
      <div className="text--center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Svg className={styles.featureSvg} role="img" style={{height: '150px', width: '220px', margin: 'auto'}}/>
      </div>
      <div className="text--center padding-horiz--md" style={{paddingBottom:'20px', paddingTop:'20px'}}>
        <Heading as="h3">{title}</Heading>
        <p style={{textAlign:'justify'}}>
          {description}
          </p>
        {link && (
          <Link
            className="button button--secondary button--lg"
            to={link}>
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent:'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
