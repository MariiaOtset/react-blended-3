import { useState, useEffect } from 'react';
import { Container, Heading, Section, Loader, CountryList } from 'components';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading title={error} bottom />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
