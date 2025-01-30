import PageHeading from '../components/PageHeading.tsx';
import { Headings } from '../constants';

const Pricing = () => {
  return (
    <div className="container mx-auto">
      <PageHeading
        title={Headings.pricing.title}
        description={Headings.pricing.description}
      />
    </div>
  );
};

export default Pricing;
