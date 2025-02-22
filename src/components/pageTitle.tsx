import { Helmet } from 'react-helmet';

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageTitle;