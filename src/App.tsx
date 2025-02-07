import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Section from './components/Section';
import SkillList from './components/SkillList';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import Experience from './components/Experience';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n/config';

function App() {
  const { t } = useTranslation();

  const technicalSkills = [
    'Node.js', 'JavaScript', 'TypeScript', 'LoopBack ','React', 'Astro', 'NestJS','Go', 'Fiber','MongoDB', 'Neo4J', 'ArangoDB',
    'PostgreSQL', 'Redis','RESTful APIs', 'GraphQL', 'Microservices', 'AWS EC2', 'AWS Lambda', 'AWS S3', 'AWS RDS', 
    'AWS EKS', 'AWS SES', 'Azure AKS', 'AWS SQS', 'AWS SSM', 'AWS Lambda', 'AWS Step Functions', 'AWS ELB ', 'AWS ALB',
    'Azure Storage',
  ];

  const cloudPlatforms = [
    'AWS', 'GCP', 'Azure'
  ];

  const cicdTools = [
    'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Helm', 'GitOps', 'AWS CodePipeline', 'AWS CodeBuild'
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-colors duration-200">
          <ThemeToggle />
          <LanguageSelector />
          <Header />
          
          <main>
            <Section title={t('sections.summary.title')}>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.summary.content')}
              </p>
            </Section>

            <Section title={t('sections.skills.title')}>
              <SkillList skills={technicalSkills} />
            </Section>

            <Section title={t('sections.skills.cloud')}>
              <SkillList skills={cloudPlatforms} />
            </Section>

            <Section title={t('sections.skills.cicd')}>
              <SkillList skills={cicdTools} />
            </Section>

            <Experience />

            <Section title={t('sections.education.title')}>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t('sections.education.degree')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('sections.education.university')} | {t('sections.education.year')}
                </p>
                {/* <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {t('sections.education.focus')}
                </p> */}
              </div>
            </Section>

            <Section title={t('sections.certifications.title')}>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {(t('sections.certifications.items', { returnObjects: true }) as string[]).map((cert: string, index: number) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </Section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );

}
export default App;